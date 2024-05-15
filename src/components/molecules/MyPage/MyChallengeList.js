import { Box, Card, CardContent, Container } from "@mui/material";
import { MainText, Text2 } from "../../atoms/Text";

const ChallengeList = () => {


    return (<>

        <Container sx={{ display: "flex", justifyContent:"center", gap:20, width: 900 }}>

            <Box sx={{ display: "flex", flexDirection: "column", alignItems:"center"}}>
                <Text2>참여중인 챌린지</Text2>

                <Card sx={{ backgroundColor: "#D9D9D9", width: 300, height: 100, mb: 5 }}>
                    <CardContent>
                        <MainText>챌린지명 : 모두 함께 추리를 </MainText>
                        <MainText>도서명 : 메스커레이드 호텔</MainText>
                        <MainText>기간 : 24.05.15 ~ 24.05.30</MainText>
                    </CardContent>
                </Card>
                <Card sx={{ backgroundColor: "#D9D9D9", width: 300, height: 100, mb: 5 }}>
                    <CardContent>
                        <MainText>챌린지명 : 모두 함께 추리를 </MainText>
                        <MainText>도서명 : 메스커레이드 호텔</MainText>
                        <MainText>기간 : 24.05.15 ~ 24.05.30</MainText>
                    </CardContent>
                </Card>
                <Card sx={{ backgroundColor: "#D9D9D9", width: 300, height: 100, mb: 5 }}>
                    <CardContent>
                        <MainText>챌린지명 : 모두 함께 추리를 </MainText>
                        <MainText>도서명 : 메스커레이드 호텔</MainText>
                        <MainText>기간 : 24.05.15 ~ 24.05.30</MainText>
                    </CardContent>
                </Card>
                <Card sx={{ backgroundColor: "#D9D9D9", width: 300, height: 100, mb: 5 }}>
                    <CardContent>
                        <MainText>챌린지명 : 모두 함께 추리를 </MainText>
                        <MainText>도서명 : 메스커레이드 호텔</MainText>
                        <MainText>기간 : 24.05.15 ~ 24.05.30</MainText>
                    </CardContent>
                </Card>
                <Card sx={{ backgroundColor: "#D9D9D9", width: 300, height: 100, mb: 5 }}>
                    <CardContent>
                        <MainText>챌린지명 : 모두 함께 추리를 </MainText>
                        <MainText>도서명 : 메스커레이드 호텔</MainText>
                        <MainText>기간 : 24.05.15 ~ 24.05.30</MainText>
                    </CardContent>
                </Card>
                <Card sx={{ backgroundColor: "#D9D9D9", width: 300, height: 100, mb: 5 }}>
                    <CardContent>
                        <MainText>챌린지명 : 모두 함께 추리를 </MainText>
                        <MainText>도서명 : 메스커레이드 호텔</MainText>
                        <MainText>기간 : 24.05.15 ~ 24.05.30</MainText>
                    </CardContent>
                </Card>


            </Box>

            <Box sx={{ display: "flex", flexDirection: "column", alignItems:"center" }}>
                <Text2>참여한 챌린지</Text2>

                <Card sx={{ backgroundColor: "#D9D9D9", width: 300, height: 100, mb: 5 }}>
                    <CardContent>
                        <MainText>챌린지명 : 모두 함께 추리를2 </MainText>
                        <MainText>도서명 : 돌이킬 수 없는 약속</MainText>
                        <MainText>기간 : 24.03.30 ~ 24.04.15</MainText>
                    </CardContent>
                </Card>
                <Card sx={{ backgroundColor: "#D9D9D9", width: 300, height: 100, mb: 5 }}>
                    <CardContent>
                        <MainText>챌린지명 : 모두 함께 추리를2 </MainText>
                        <MainText>도서명 : 돌이킬 수 없는 약속</MainText>
                        <MainText>기간 : 24.03.30 ~ 24.04.15</MainText>
                    </CardContent>
                </Card>
                <Card sx={{ backgroundColor: "#D9D9D9", width: 300, height: 100, mb: 5 }}>
                    <CardContent>
                        <MainText>챌린지명 : 모두 함께 추리를2 </MainText>
                        <MainText>도서명 : 돌이킬 수 없는 약속</MainText>
                        <MainText>기간 : 24.03.30 ~ 24.04.15</MainText>
                    </CardContent>
                </Card>
                <Card sx={{ backgroundColor: "#D9D9D9", width: 300, height: 100, mb: 5 }}>
                    <CardContent>
                        <MainText>챌린지명 : 모두 함께 추리를2 </MainText>
                        <MainText>도서명 : 돌이킬 수 없는 약속</MainText>
                        <MainText>기간 : 24.03.30 ~ 24.04.15</MainText>
                    </CardContent>
                </Card>
            </Box>
        </Container>


    </>)
}

export default ChallengeList;