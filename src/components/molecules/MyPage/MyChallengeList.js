import { Box, Card, CardContent, Container, MenuItem, Select } from "@mui/material";
import { MainText, Text5 } from "../../atoms/Text";
import CustomFormControl from "../../atoms/CustomFormControl"
import { useState } from "react";

const ChallengeList = () => {

    const [challenge, setChallenge] = useState("doing");

    const handleChange = (e) => {
        setChallenge(e.target.value);
    };

    const challengeData = {
        doing: [
            {
                // challenge 테이블 'name' 이고, book 테이블 'name' 인데 어떻게?
                challengename: "나도 탐정이 될 수 있다?",
                bookname: "매스커레이드 호텔",
                start_date: "24.05.15",
                end_date: "24.05.30",
            },
            {
                challengename: "나도 탐정이 될 수 있다?",
                bookname: "매스커레이드 호텔",
                start_date: "24.05.15",
                end_date: "24.05.30",
            },
            {
                challengename: "나도 탐정이 될 수 있다?",
                bookname: "매스커레이드 호텔",
                start_date: "24.05.15",
                end_date: "24.05.30",
            },
            {
                challengename: "나도 탐정이 될 수 있다?",
                bookname: "매스커레이드 호텔",
                start_date: "24.05.15",
                end_date: "24.05.30",
            },
            {
                challengename: "나도 탐정이 될 수 있다?",
                bookname: "매스커레이드 호텔",
                start_date: "24.05.15",
                end_date: "24.05.30",
            },

        ],

        done: [
            {
                challengename: "명탐점이 되고 싶은 날",
                bookname: "봉제 인형 살인 사건",
                start_date: "24.04.01",
                end_date: "24.04.15",
            },
            {
                challengename: "명탐점이 되고 싶은 날",
                bookname: "봉제 인형 살인 사건",
                start_date: "24.04.01",
                end_date: "24.04.15",
            },
            {
                challengename: "명탐점이 되고 싶은 날",
                bookname: "봉제 인형 살인 사건",
                start_date: "24.04.01",
                end_date: "24.04.15",
            },
            {
                challengename: "명탐점이 되고 싶은 날",
                bookname: "봉제 인형 살인 사건",
                start_date: "24.04.01",
                end_date: "24.04.15",
            },
            {
                challengename: "명탐점이 되고 싶은 날",
                bookname: "봉제 인형 살인 사건",
                start_date: "24.04.01",
                end_date: "24.04.15",
            },
            {
                challengename: "명탐점이 되고 싶은 날",
                bookname: "봉제 인형 살인 사건",
                start_date: "24.04.01",
                end_date: "24.04.15",
            },
        ],
    };

    return (<>

        <Container sx={{ display: "flex", flexDirection: "column", width: 900 }}>
            <Box sx={{display:"flex", justifyContent:"center"}}>
                <CustomFormControl>

                    <Select
                        variant="outlined"
                        value={challenge}
                        onChange={handleChange}
                    >
                        <MenuItem value="doing">참여중인 챌린지</MenuItem>
                        <MenuItem value="done">참여완료 챌린지</MenuItem>
                    </Select>

                </CustomFormControl>
            </Box>


            <Box sx={{ display: "flex", flexDirection: "column", alignItems: "left" }}>
                {challengeData[challenge]?.map((data, index) => (
                    <Card key={index} sx={{ backgroundColor: "#D9D9D9", width: "100%", height: 100, mb: 2 }}>
                        <CardContent>
                            <MainText
                                sx={{textAlign:"center",
                                fontFamily:'NanumBarunGothicBold',
                                fontWeight: 100,
                                fontSize: '18px'
                                }}
                            >
                                챌린지명 : {data.challengename}
                            </MainText>
                            <MainText 
                                // sx={{fontFamily:'NanumBarunGothicBold',
                                // fontWeight: 100,
                                // fontSize: '18px'}}
                            >
                                도서명 : {data.bookname}
                            </MainText>
                            <Text5 sx={{textAlign:"right"}}>
                                기간 : {data.start_date} ~ {data.end_date}
                            </Text5>
                        </CardContent>
                    </Card>
                ))}
            </Box>

        </Container>
    </>)
}

export default ChallengeList;