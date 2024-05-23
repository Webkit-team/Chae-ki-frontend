import { Box, Divider, Grid } from "@mui/material";
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { SubTitle, MainText, Text2, Text3, Text5 } from "../atoms/Text";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";

const BookDetailContainer = () => {
    const { id } = useParams();
    const [cookies] = useCookies(["user"]);
    const [book, setBook] = useState({});
    const [like, setLike] = useState(false);

    const uno = cookies.user ? cookies.user.uno : null;
    const token = cookies.user ? cookies.user.jwt : null;
    const navigate = useNavigate();

    const handleLikeOn = async () => {
        try {
            const url = `http://ec2-13-209-50-125.ap-northeast-2.compute.amazonaws.com:8080/books/${id}/users/${uno}`;
            const response = await axios.post(url, {}, {
                headers: {
                    Authorization: token
                }
            });

            if (response.status === 200) {
                console.log(response.status);
                setLike(!like);
                setBook(prevBook => ({
                    ...prevBook,
                    likeCount: response.data.likeCount
                }));
            }
        } catch (error) {
            alert('로그인이 필요합니다.');
        }
    }

    const handleLikeOff = async () => {
        try {
            const url = `http://ec2-13-209-50-125.ap-northeast-2.compute.amazonaws.com:8080/books/${id}/users/${uno}`;
            const response = await axios.delete(url, {
                headers: {
                    Authorization: token
                }
            });
            if (response.status === 200) {
                console.log(response.status);
                setLike(!like);
                setBook(prevBook => ({
                    ...prevBook,
                    likeCount: response.data.likeCount
                }));
            }
        } catch (error) {
            alert('로그인이 필요합니다.');
        }
    };

    const handleImageClick = () => {
        window.location.href = book.shopUrl;
    }

    useEffect(() => {
        const fetchBookData = async () => {
            try {
                let url = `http://ec2-13-209-50-125.ap-northeast-2.compute.amazonaws.com:8080/books/${id}`;
                if (uno) {
                    url += `?userNo=${uno}`;
                }
                const response = await axios.get(url, {
                    headers: {
                        Authorization: token
                    }
                });

                if (response.status === 200) {
                    setLike(response.data.checkLike)
                    console.log(response.data);
                    setBook(response.data);
                }
            } catch (error) {
                console.error("Failed to fetch book data:", error);
            }
        }
        fetchBookData();
    }, [id, uno, token]);


    return (
        <>
            <SubTitle>도서 상세 조회</SubTitle>
            <Box sx={{ display: "flex", width: "100%", justifyContent: "center", pt: 5 }}>
                <Box sx={{ display: "flex", flexDirection: "column", alignItems: "end", width: "40%", pr: 5 }}>
                    <Box
                        component="img"
                        sx={{
                            width: 250,
                            height: 350,
                            objectFit: "cover",
                            border: 'solid 1px grey',
                            cursor:'pointer'
                        }}
                        src={book.imageUrl}
                        alt={book.name}
                        onClick={handleImageClick}
                    />
                    <Grid container spacing={1} sx={{ textAlign: "right", py: 3.5 }}>
                        <Grid item xs={6}>
                            <Text3>저자</Text3>
                        </Grid>
                        <Grid item xs={6}>
                            <MainText>{book.writer}</MainText>
                        </Grid>
                        <Grid item xs={6}>
                            <Text3>출판사</Text3>
                        </Grid>
                        <Grid item xs={6}>
                            <MainText>{book.publisher}</MainText>
                        </Grid>
                        <Grid item xs={6}>
                            <Text3>출간일</Text3>
                        </Grid>
                        <Grid item xs={6}>
                            <MainText>{book.publishDate}</MainText>
                        </Grid>
                        <Grid item xs={6}>
                            <Text3>분야</Text3>
                        </Grid>
                        <Grid item xs={6}>
                            <MainText>{book.category}</MainText>
                        </Grid>
                        <Grid item xs={6}>
                            <Text3>도서 가격</Text3>
                        </Grid>
                        <Grid item xs={6}>
                            <MainText>{book.price}원</MainText>
                        </Grid>
                    </Grid>
                </Box>
                <Box sx={{ display: "flex", width: "60%" }}>
                    <Box sx={{ width: "100%" }}>
                        <Box sx={{ display: "flex", width: "100%" }}>
                            <Box sx={{ flexGrow: 1 }}>
                                <Text2>{book.name}</Text2>
                            </Box>
                            <Box sx={{ display: "flex", justifyContent: "flex-end", alignItems: 'flex-end' }}>
                                <Box sx={{ cursor: "pointer" }}>
                                    {like ?
                                        <FavoriteIcon onClick={handleLikeOff}sx={{ fontSize: 30, pr: 0.5, color: '#FF0000' }} />
                                        :
                                        <FavoriteBorderIcon  onClick={handleLikeOn} sx={{ fontSize: 30, pr: 0.5, color: '#FF0000' }} />}
                                </Box>
                            </Box>
                        </Box>
                        <Divider sx={{ border: "solid 1px", mt: 1, mb: 1 }} />
                        <Box sx={{ overflowY: "auto", height: '290px' }}>
                            <MainText>{book.description}</MainText>
                        </Box>
                        <Box sx={{ pt: 0.5, pb: 1 }}>

                        </Box>
                    </Box>
                </Box>
            </Box>
        </>
    );
};

export default BookDetailContainer;
