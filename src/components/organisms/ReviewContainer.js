import { Box, Container, TableContainer, Table, TableHead, TableBody, TableRow, TableCell, Paper, Button } from "@mui/material";
import { SubTitle, Text4, Text5 } from "../atoms/Text";

const ReviewContainer = () => {

    const reviewDummyData = [
        {
            no: 1,
            title: "추리소설의 대가, 히가시노 게이고의 대표작을 읽고",
            bookTitle: "매스커레이드 호텔",
            nickname: "보아뱀",
            createdAt: "2024-05-24",
            scrap: "5"
        },
        {
            no: 2,
            title: "너만 읽냐? 나도 읽는다!",
            bookTitle: "기린의 날개",
            nickname: "독서왕",
            createdAt: "2024-05-21",
            scrap: "3"
        },
        {
            no: 3,
            title: "제가 한번 읽어보았습니다.",
            bookTitle: "매스커레이드 나이트",
            nickname: "메추리알",
            createdAt: "2024-05-24",
            scrap: "3"
        },
        {
            no: 4,
            title: "어떻게 이런 반전이",
            bookTitle: "용의자 X의 헌신",
            nickname: "원효대사",
            createdAt: "2024-05-24",
            scrap: 1
        },
        {
            no: 5,
            title: "비 오는날 읽기 좋은 소설",
            bookTitle: "가면산장 살인사건",
            nickname: "페르시아",
            createdAt: "2024-05-24",
            scrap: 0
        },
        {
            no: 6,
            title: "영화로도 개봉한 바로 이 책",
            bookTitle: "봉제인형 살인사건",
            nickname: "반페르시",
            createdAt: "2024-05-24",
            scrap: "11"
        },
        {
            no: 7,
            title: "모든 것을 내려놓고 싶을 때",
            bookTitle: "무소유",
            nickname: "루시퍼",
            createdAt: "2024-05-24",
            scrap: "50"
        },

    ]


    // const handleGo = (reviewDummyData.no) => {
    //     console.log("요소 눌림");
    // }


    // 사진 추가, 상세 보기 기능 넣어야 함


    return (
        <>
            <SubTitle>도서 후기</SubTitle>

            <Container>
                <TableContainer
                    component={ Paper }
                    sx={{ mt: 6, mb: 15 }}
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
                                <TableRow key={review.no} sx={{}} elevation={20} >
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

                <Box sx={{ display:"flex", justifyContent:"center", pb:6}}>
                    페이지네이션
                </Box>

            </Container>
        </>
    );
}

export default ReviewContainer;