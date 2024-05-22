import { Box, Divider } from "@mui/material";
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { SubTitle, MainText, Text2, Text3, Text5 } from "../atoms/Text";

import bookExImg1 from "../../assets/book1.png"
import bookExImg2 from "../../assets/book2.png"
import { Link, useParams } from "react-router-dom";

import axios from "axios";
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";

const BookDetailContainer = () => {
    const { id } = useParams();
    const [cookies] = useCookies(["user"]);
    const [like, setLike] = useState(false);
    const [book, setBook] = useState({});

    const uno = cookies.user ? cookies.user.uno : null;
    const token = cookies.user ? cookies.user.jwt : null;

    const handleLikeToggle = () => {
        setLike(!like);
    }

    useEffect(() => {
        const fetchBookData = async () => {
            try {
                let url = '';
                if (uno) {
                    url = `http://ec2-13-209-50-125.ap-northeast-2.compute.amazonaws.com:8080/books/${id}/users/${uno}`;
                } else {
                    url = `http://ec2-13-209-50-125.ap-northeast-2.compute.amazonaws.com:8080/books/${id}`;
                }

                const response = await axios.get(url, {
                    headers: {
                        Authorization: token
                    }
                });

                if (response.status === 200) {
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
                            objectFit: "cover"
                        }}
                        src={book.imageUrl}
                        alt={book.name}
                    />
                    <Box sx={{ display: "flex", flexDirection: "column", textAlign: "right" }}>
                        <Box sx={{ pt: 3.5, height: 40 }}>
                            <Text3>저자</Text3>
                        </Box>
                        <Box sx={{ height: 40 }}>
                            <Text3>옮긴이</Text3>
                        </Box>
                        <Box sx={{ height: 40 }}>
                            <Text3>출판사</Text3>
                        </Box>
                        <Box sx={{ height: 40 }}>
                            <Text3>출간일</Text3>
                        </Box>
                        <Box sx={{ height: 40 }}>
                            <Text3>분야</Text3>
                        </Box>
                        <Box sx={{ height: 58 }}>
                            <Text3>도서 가격</Text3>
                        </Box>
                        <Box sx={{ height: 40 }}>
                            <Text3>도서 구매 링크</Text3>
                        </Box>
                    </Box>

                </Box>


                <Box sx={{ display: "flex", width: "60%" }}>
                    <Box sx={{ width: "100%" }}>
                        <Divider width="100%" sx={{ border: "solid 1px", mb: 1 }}></Divider>

                        <Box sx={{ display: "flex", width: "100%" }}>
                            <Box sx={{ width: "85%", height: 80 }}>
                                <Text2>{book.name}</Text2>
                            </Box>

                            <Box sx={{ display: "flex", width: "15%", justifyContent: "end" }}>
                                <Box onClick={handleLikeToggle} sx={{ cursor: "pointer" }}>
                                    {like ?
                                        <FavoriteIcon sx={{ fontSize: 30, pr: 0.5, color: '#FF0000' }} />
                                        :
                                        <FavoriteBorderIcon sx={{ fontSize: 30, pr: 0.5, color: '#FF0000' }} />}
                                </Box>

                                <Text2>{book.likeCount}</Text2>
                            </Box>
                        </Box>

                        <Divider width="100%" sx={{ border: "solid 1px", mt: 1, mb: 1 }}></Divider>

                        <Box sx={{ height: 235, overflowY: "auto" }}>
                            <MainText>{book.description}</MainText>
                        </Box>

                        <Divider width="100%" sx={{ border: "solid 1px", mt: 1, mb: 1 }}></Divider>

                        <Box sx={{ pt: 2.5, height: 40 }}>
                            <MainText>{book.writer}</MainText>
                        </Box>

                        <Box sx={{ height: 40 }}>
                            <MainText>{book.translator}</MainText>
                        </Box>

                        <Box sx={{ height: 40 }}>
                            <MainText>{book.publisher}</MainText>
                        </Box>

                        <Box sx={{ height: 40 }}>
                            <MainText>{book.publishDate}</MainText>
                        </Box>

                        <Box sx={{ height: 40 }}>
                            <MainText>{book.category}</MainText>
                        </Box>

                        <Box sx={{ height: 40 }}>
                            <MainText>{book.price}</MainText>
                        </Box>

                        <Divider width="100%" sx={{ border: "solid 1px", mt: 1, mb: 1 }}></Divider>

                        <Box sx={{ pt: 0.5, pb: 1, mb:5, height: 40 }}>
                            <Link to={book.shopUrl}><Text5>바로가기(알라딘)</Text5></Link>
                        </Box>
                    </Box>
                </Box>

            </Box>
        </>)
};

export default BookDetailContainer;