import { Container, Box, Card, CardContent, Typography, Divider, Modal } from "@mui/material";
import BookmarkIcon from '@mui/icons-material/Bookmark';

import { MainText, Text5 } from "../../atoms/Text";
import CustomButton from "../../atoms/CustomButton";

import { useState } from "react";

import reviewImg1 from "../../../assets/reviewImages/review1.jpg"
import bookImg1 from "../../../assets/book1.png"

const MyReviewList = () => {

    const [open, setOpen] = useState(false);
    const [selectedData, setSelectedData] = useState(null);

    const handleOpen = (data) => {
        setSelectedData(data);
        setOpen(true);
    }

    const handleClose = () => {
        setOpen(false);
        setSelectedData(null);
    }


    const reviews = [
        {
            no: 1,
            title: "추리소설의 대가, 히가시노 게이고의 대표작을 읽고",
            img: reviewImg1,
            bookImg: bookImg1,
            bookTitle: "매스커레이드 호텔",
            nickname: "강쥐의행복",
            createdAt: "2024-05-17",
            content: "연쇄살인으로 의심되는 3명이 죽은 상태로 소설은 시작됩니다. 그리고 범인이 남긴('독도를 우리 땅'이라는 노래를 알고 있는 세대는 그리 어렵지 않게 짐작할 수 있는, 물론 좀 꼬아서 만들기는 했습니다만) 단서에 따라 경시청에서는 코르테시아 도쿄 호텔에 수사관을 파견하고 일부 수사관은 호텔 직원으로 신분을 위장하여 범인을 색출하기 위한 수사를 시작하게 됩니다. 책 제목인 '매스커레이드 호텔'에서 매스커레이드는 '가면, 가면무도회'라는 뜻이라고 합니다. 호텔이라는 특성상 많은 사람들이 호텔을 오고가고, 스스로를 숨기고 가면을 쓰고 서로를 대합니다. 직원도 손님도 크게 다르지 않습니다. 그 안에서 안전함을 또한 편안함을 느끼며 그 댓가를 지불합니다. 예상되는 살인 날짜가 다가 오면서 호텔 직원들도 잠복한 수사관들도 긴장이 고조되고 모든 일에 예민하게 됩니다. 그 와중에 특정인들이 특정정보를 독점하게 되고 정보를 공개해서 우리의 안위를 도모할 것인지 공개하지 않아서 타인의 안위도 지킬 것인지 조마조마한 상황이 이어집니다. 그리고 결국은 범인이 밝혀지고 그 범인의 뜻밖의 살인의도가 드러납니다. 추리 소설의 대가, 히가시노 게이고 매스커레이드 시리즈는 읽으면서 긴장감을 늦출 수 없었습니다. 추리 소설에 입문하시는 분들께 강추드립니다.",
            scrap: 8
        }]

    const modalBody = (
        <Box sx={{
            position: "absolute", top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 900, height: 600,
            overflow: "scroll",
            bgcolor: 'background.paper',
            border: '3px solid',
            boxShadow: 24,
            pt: 4, pb: 1, pl: 4, pr: 4
        }}>
            {selectedData && (<>
                <Box sx={{ display: "flex", flexDirection: "column", width: "100%", justifyContent: "center" }}>
                    <Box sx={{ display: "flex", pb: 2, height: 30 }}>
                        <Typography
                            sx={{
                                fontFamily: 'NanumBarunGothicBold',
                                fontWeight: 900,
                                fontSize: '21px',
                                display: '-webkit-box',
                                WebkitBoxOrient: 'vertical',
                                WebkitLineClamp: 1,
                                overflow: "hidden",
                                textOverflow: 'ellipsis',
                            }}
                        >
                            제목 : {selectedData.title}
                        </Typography>
                    </Box>

                    <Box sx={{ display: "flex", height: 25, pb: 2 }}>
                        <Typography
                            sx={{
                                fontFamily: 'NanumBarunGothic',
                                fontWeight: 100,
                                fontSize: '18px',
                                display: '-webkit-box',
                                WebkitBoxOrient: 'vertical',
                                WebkitLineClamp: 1,
                                overflow: "hidden",
                                textOverflow: 'ellipsis',
                            }}
                        >
                            도서명 : {selectedData.bookTitle}
                        </Typography>
                    </Box>

                    <Box sx={{ display: "flex", height: 25, justifyContent: "right" }}>
                        <Box sx={{ display: "flex", pt: 0.5, width: "15%", justifyContent: "center" }}>
                            <Text5 sx={{ backgroundColor: "#d9d9d9" }}>{selectedData.nickname}</Text5>
                        </Box>

                        <Box sx={{ display: "flex", pt: 0.5, width: "15%", justifyContent: "center" }}>
                            <Text5>{selectedData.createdAt}</Text5>
                        </Box>

                        <Box sx={{ display: "flex", width: "5%", justifyContent: "right" }}>
                            <BookmarkIcon />
                            <MainText sx={{ pl: 1 }}>{selectedData.scrap}</MainText>
                        </Box>
                    </Box>

                </Box>

                <Divider width="100%" sx={{ display: "flex", mt: 1, mb: 1, justifyContent: "center", border: "double 1px #D9D9D9" }}></Divider>

                <Box sx={{
                    display: "flex",
                    flexDirection: "column",
                    width: "900px",
                    height: "500px",
                    overflow: "scroll",
                }}
                >

                    <Box sx={{ pt: 5, pb: 10, display: "flex", justifyContent: "center" }}>
                        <img src={selectedData.img} alt="도서 후기 이미지입니다" width={500} height={300} />
                    </Box>

                    <MainText
                        sx={{
                            fontWeight: 100,
                            fontSize: '16px'
                        }}
                    >
                        {selectedData.content}
                    </MainText>
                </Box>

                <Box sx={{ display: "flex", justifyContent: "right" }}>
                    <CustomButton
                        onClick={handleClose}
                    >
                        닫기
                    </CustomButton>
                </Box>
            </>)}

        </Box>
    )


    return (<>
        <Container sx={{ display: "flex", flexDirection: "column", width: "100%", pt: 2, pb: 2, height: 500, overflowY: "scroll" }}>

            <Box sx={{ display: "flex", flexDirection: "column", alignItems: "left" }}>
                {reviews.map((review) => (
                    <Card
                        key={review.no}
                        onClick={() => handleOpen(review)}
                        sx={{
                            width: "100%",
                            height: 180, mb: 3,
                            transition: "Transform 0.1s ease-in-out",
                            "&:hover": {
                                transform: "scale(1.0005)",
                                border: "solid"
                            }, border: "solid 1px #D9D9D9",
                        }}
                        elevation={10}
                    >

                        <CardContent sx={{ display: "flex" }}>
                            <Box
                                component="img"
                                src={review.bookImg}        // 여기
                                sx={{
                                    width: 102,
                                    height: "150px",
                                    border: "solid 1px #cecece"
                                }}
                            >

                            </Box>

                            <Box sx={{ pl: 3, width: "85%" }}>
                                <MainText
                                    sx={{
                                        fontFamily: 'NanumBarunGothicBold',
                                        fontWeight: 100,
                                        fontSize: '18px'
                                    }}
                                >
                                    도서후기명 : {review.title}
                                </MainText>

                                <MainText>
                                    도서명 : {review.bookTitle}
                                </MainText>

                                <Text5 sx={{ mt: 2 }}>
                                    작성일자 : {review.createdAt}
                                </Text5>
                            </Box>
                            
                            <Box sx={{display:"flex", alignItems:"center"}}>
                                <Box
                                    component="img"
                                    src={reviewImg1}
                                    sx={{
                                        display: "flex",
                                        width: 150,
                                        height: "100px",
                                        border: "solid 1px #cecece"
                                    }}
                                >
                                </Box>
                            </Box>


                        </CardContent>
                    </Card>
                ))}
            </Box>

        </Container>

        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            {modalBody}
        </Modal>

    </>)
}

export default MyReviewList;