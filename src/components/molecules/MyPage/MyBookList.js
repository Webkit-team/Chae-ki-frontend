import { Container, ImageList, ImageListItem, ImageListItemBar, Paper, Tooltip } from "@mui/material";

import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const MyBookList = ({uno, jwt, setBookLikeCount}) => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        const fetchBookData = async() => {
            try {
                const response = await axios.get(`http://ec2-13-209-50-125.ap-northeast-2.compute.amazonaws.com:8080/users/${uno}/favorite-books`, {
                headers: {
                    Authorization: jwt
                }});

                if (response.status === 200) {
                    console.log(response.data);
                    setBooks(response.data.books);
                    setBookLikeCount(response.data.books.length);
                }

            } catch (error) {
                console.error("Failed to fetch challenges: ", error);
            }
        };

        fetchBookData();
    }, [uno, jwt, setBookLikeCount])

    const navigate = useNavigate();

    const handleBookClick = (id) => {
        navigate(`/books/${id}`);
    }

    return (<>
        <Container
            sx={{
                display: "flex", width:"100%", alignItems: "center", justifyContent: "center"
            }}
        >
            <ImageList
                sx={{ width: 800, height: 550, overflowY: "scroll", pl: "1px", pr: "1px", pt: "1px", pb: "1px" }}
                cols={4}
                rowHeight={200}
                gap={50}
            >

                {books.map((book, index) => (
                    <Paper
                        sx={{
                            display: "flex", justifyContent: "center", alignItems: "center",
                            width: 155, height: 240,
                            transition: "Transform 0.1s ease-in-out",
                            "&:hover": {
                                transform: "scale(1.01)",
                                border: "solid 3px"
                            }, border: "solid 1px #D9D9D9"
                        }}
                        elevation={20}
                    >
                        <ImageListItem
                            key={index}
                            sx={{ width: "150px", height: "200px", pb: "30px" }}
                        >
                            <img
                                src={book.imageUrl}
                                alt="찜 도서 이미지입니다"
                                loading="lazy"
                                style={{ width: "150px", height: "200px", objectFit: "cover" }}
                                onClick={() => (handleBookClick(book.bookNo))}
                            />
                            <Tooltip title={book.title} arrow>

                            <ImageListItemBar
                                title={book.title}
                                position="below"
                                sx={{
                                    fontFamily: 'NanumBarunGothicBold',
                                    fontWeight: 100,
                                    fontSize: '18px',
                                    textAlign: "center"
                                }}
                            />
                            </Tooltip>
                        </ImageListItem>
                    </Paper>
                ))}
                
            </ImageList>
        </Container>
    </>)
}

export default MyBookList;