import { Container, ImageList, ImageListItem, ImageListItemBar, Paper } from "@mui/material";

import bookExImg1 from "../../../assets/book1.png"
import bookExImg2 from "../../../assets/book2.png"

import { useNavigate } from "react-router-dom";

const MyBookList = () => {
    const bookImg = "https://placehold.co/150x200"
    const itemData = [
        {
            img: bookExImg1,
            title: "매스커레이드 호텔"
        },
        {
            img: bookExImg2,
            title: "기린의 날개"
        },
        {
            img: bookImg,
            title: "매스커레이드 호텔3ㄴㄻㄴㄹㅇㄴㄹㄴㄹ"
        },
        {
            img: bookImg,
            title: "매스커레이드 호텔4"
        },
        {
            img: bookImg,
            title: "매스커레이드 호텔4"
        },
        {
            img: bookImg,
            title: "매스커레이드 호텔4"
        },
        {
            img: bookImg,
            title: "매스커레이드 호텔4"
        },
        {
            img: bookImg,
            title: "매스커레이드 호텔4"
        },
        {
            img: bookImg,
            title: "매스커레이드 호텔4"
        },
        {
            img: bookImg,
            title: "매스커레이드 호텔4"
        },
        {
            img: bookImg,
            title: "매스커레이드 호텔4"
        },
    ]

    const navigate = useNavigate();

    const handleBookClick = (props) => {
        navigate("/book");
    }

    return (<>
        <Container
            sx={{
                display: "flex", alignItems: "center", justifyContent: "center"
            }}
        >
            <ImageList
                sx={{ width: 810, height: 660, pl: "1px", pr: "1px", pt: "1px", pb: "1px" }}
                cols={4}
                rowHeight={200}
                gap={50}
            >

                {itemData.map((item, index) => (
                    <Paper
                        sx={{
                            display: "flex", justifyContent: "center", alignItems: "center",
                            width: 155, height: "105%",
                            transition: "Transform 0.1s ease-in-out",
                            "&:hover": {
                                transform: "scale(1.01)",
                                border: "solid"
                            }, border: "solid 1px #D9D9D9"
                        }}
                        elevation={10}
                    >
                        <ImageListItem
                            key={index}
                            sx={{ width: "150px", height: "200px", pb: "30px" }}
                        >
                            <img
                                src={item.img}
                                alt="ㅎㅇ"
                                loading="lazy"
                                style={{ width: "150px", height: "200px", objectFit: "cover" }}
                                onClick={(props) => (handleBookClick())}
                            />
                            <ImageListItemBar
                                title={item.title}
                                position="below"
                                sx={{
                                    fontFamily: 'NanumBarunGothicBold',
                                    fontWeight: 100,
                                    fontSize: '18px',
                                    textAlign: "center"
                                }}
                            />
                        </ImageListItem>
                    </Paper>
                ))}
                
            </ImageList>
        </Container>
    </>)
}

export default MyBookList;