import { Box, Container, TableContainer, Table, TableHead, TableBody, TableRow, TableCell, Paper, Button, Typography, Divider, Modal } from "@mui/material";
import { SubTitle, Text4, Text5, MainText } from "../atoms/Text";
import BookmarkIcon from '@mui/icons-material/Bookmark';
import CustomButton from "../atoms/CustomButton";

import { useState } from "react";

import reviewImg1 from "../../assets/reviewImages/review1.jpg"

const ReviewContainer = () => {

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

    const reviewDummyData = [
        {
            no: 1,
            title: "추리소설의 대가, 히가시노 게이고의 대표작을 읽고",
            img: reviewImg1,
            bookTitle: "매스커레이드 호텔",
            nickname: "강쥐의행복",
            createdAt: "2024-05-17",
            content: "연쇄살인으로 의심되는 3명이 죽은 상태로 소설은 시작됩니다. 그리고 범인이 남긴('독도를 우리 땅'이라는 노래를 알고 있는 세대는 그리 어렵지 않게 짐작할 수 있는, 물론 좀 꼬아서 만들기는 했습니다만) 단서에 따라 경시청에서는 코르테시아 도쿄 호텔에 수사관을 파견하고 일부 수사관은 호텔 직원으로 신분을 위장하여 범인을 색출하기 위한 수사를 시작하게 됩니다. 책 제목인 '매스커레이드 호텔'에서 매스커레이드는 '가면, 가면무도회'라는 뜻이라고 합니다. 호텔이라는 특성상 많은 사람들이 호텔을 오고가고, 스스로를 숨기고 가면을 쓰고 서로를 대합니다. 직원도 손님도 크게 다르지 않습니다. 그 안에서 안전함을 또한 편안함을 느끼며 그 댓가를 지불합니다. 예상되는 살인 날짜가 다가 오면서 호텔 직원들도 잠복한 수사관들도 긴장이 고조되고 모든 일에 예민하게 됩니다. 그 와중에 특정인들이 특정정보를 독점하게 되고 정보를 공개해서 우리의 안위를 도모할 것인지 공개하지 않아서 타인의 안위도 지킬 것인지 조마조마한 상황이 이어집니다. 그리고 결국은 범인이 밝혀지고 그 범인의 뜻밖의 살인의도가 드러납니다.",
            scrap: 8
        },
        {
            no: 2,
            title: "너만 읽냐? 나도 읽었다!",
            bookTitle: "기린의 날개",
            nickname: "독서왕",
            createdAt: "2024-05-17",
            scrap: 0
        },
        {
            no: 3,
            title: "제가 한번 읽어보았습니다.",
            bookTitle: "매스커레이드 나이트",
            nickname: "메추리알",
            createdAt: "2024-05-18",
            scrap: 3
        },
        {
            no: 4,
            title: "어떻게 이런 반전이",
            bookTitle: "용의자 X의 헌신",
            nickname: "원효대사",
            createdAt: "2024-05-19",
            scrap: 1
        },
        {
            no: 5,
            title: "비 오는날 읽기 좋은 소설 추천",
            bookTitle: "가면산장 살인사건",
            nickname: "페르시아",
            createdAt: "2024-05-20",
            scrap: 15
        },
        {
            no: 6,
            title: "영화로도 개봉한 바로 이 책",
            bookTitle: "봉제인형 살인사건",
            nickname: "반페르시",
            createdAt: "2024-05-21",
            scrap: 4
        },
        {
            no: 7,
            title: "모든 것을 내려놓고 싶을 때",
            bookTitle: "무소유",
            nickname: "루시퍼",
            createdAt: "2024-05-24",
            scrap: 5
        },

    ]

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


    return (
        <>
            <SubTitle>도서 후기</SubTitle>

            <Container>
                <Box sx={{ display: "flex", justifyContent: "right", mt: 6, }}>
                    <CustomButton sx={{
                        width:80, height: 40,
                        borderRadius: 1,
                        backgroundColor: 'black',
                        '&:hover': {
                            backgroundColor: '#949494',
                            borderColor: '#000000',
                        },
                        color: '#FFFFFF !important'
                    }}>작성하기</CustomButton>
                </Box>

                <TableContainer
                    component={Paper}
                    sx={{ mt: 2, mb: 15 }}
                // elevation={10}
                >
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell sx={{ textAlign: "center" }}><Text4 sx={{ fontFamily: 'NanumBarunGothicBold' }}>번호</Text4></TableCell>
                                <TableCell sx={{ textAlign: "center" }}><Text4 sx={{ fontFamily: 'NanumBarunGothicBold' }}>제목</Text4></TableCell>
                                <TableCell sx={{ textAlign: "center" }}><Text4 sx={{ fontFamily: 'NanumBarunGothicBold' }}>도서명</Text4></TableCell>
                                <TableCell sx={{ textAlign: "center" }}><Text4 sx={{ fontFamily: 'NanumBarunGothicBold' }}>작성자</Text4></TableCell>
                                <TableCell sx={{ textAlign: "center" }}><Text4 sx={{ fontFamily: 'NanumBarunGothicBold' }}>작성일자</Text4></TableCell>
                                <TableCell sx={{ textAlign: "center" }}><Text4 sx={{ fontFamily: 'NanumBarunGothicBold' }}>스크랩</Text4></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {reviewDummyData.map((review) => (
                                <TableRow
                                    key={review.no}
                                    sx={{
                                        '&:hover': {
                                            backgroundColor: '#d9d9d9',
                                            borderColor: '#000000',
                                            cursor: "pointer"
                                        }
                                    }}
                                    elevation={20}
                                    onClick={() => handleOpen(review)}>
                                    <TableCell sx={{ textAlign: "center" }}>{review.no}</TableCell>
                                    <TableCell>{review.title}</TableCell>
                                    <TableCell>{review.bookTitle}</TableCell>
                                    <TableCell>{review.nickname}</TableCell>
                                    <TableCell sx={{ textAlign: "center" }}>{review.createdAt}</TableCell>
                                    <TableCell sx={{ textAlign: "center" }}>{review.scrap}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>

                <Box sx={{ display: "flex", justifyContent: "center", pb: 6 }}>
                    페이지네이션
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
        </>
    );
}

export default ReviewContainer;