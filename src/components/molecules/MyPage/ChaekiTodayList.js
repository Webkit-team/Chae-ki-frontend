import { Box, Container, Divider, Typography } from "@mui/material";
import { Text3, Text4, Text5, MainText } from "../../atoms/Text";
import CustomCard from "../../atoms/CustomCard";

const ChaekiTodayList = () => {

    return (<>

        <Container
            sx={{
                display: "grid",
                gridTemplateColumns: "400px 400px",
                justifyContent: "center",
                gap: 10,
                width: 900,
                pt: 2, pb: 3
            }}>
            
            <CustomCard>
                <Box sx={{
                    display: "flex",
                    width: "90%",
                    minHeight: "80px"
                }}
                >
                    <MainText
                        sx={{
                            display: '-webkit-box',
                            WebkitBoxOrient: 'vertical',
                            WebkitLineClamp: 3,
                            overflow: "hidden",
                            textOverflow: 'ellipsis',

                        }}
                    >재미있게 잘 읽었습니다. 밤에 시작했는데 읽다보니 그냥 끝까지 보느라 잠이 모자랐네요.
                        소름돋고 너무 재밌었어요.
                        믿고 읽는 히가시노게이고!
                        믿고 읽는 히가시노게이고!
                        믿고 읽는 히가시노게이고!
                        믿고 읽는 히가시노게이고!
                        믿고 읽는 히가시노게이고!
                        믿고 읽는 히가시노게이고!
                        믿고 읽는 히가시노게이고!
                    </MainText>
                </Box>

                <Divider width="90%" sx={{ display: "flex", justifyContent: "center", border: "double 1px #D9D9D9" }}></Divider>

                <Box sx={{ display: "flex", position: "relative", right: 130, top: 25.5 }}>
                    <Typography
                        sx={{
                            fontFamily: 'NanumBarunGothicBold',
                            fontWeight: 100,
                            fontSize: '18px'
                        }}
                    >
                        기린의 날개
                    </Typography>
                </Box>

                <Box sx={{ display: "flex", position: "relative", left: 130, top: 0 }}>
                    <Text5 >24.05.01</Text5>
                </Box>
            </CustomCard>

            <CustomCard>
                <Box sx={{
                    display: "flex",
                    width: "90%",
                    minHeight: "80px"
                }}
                >
                    <MainText
                        sx={{
                            display: '-webkit-box',
                            WebkitBoxOrient: 'vertical',
                            WebkitLineClamp: 3,
                            overflow: "hidden",
                            textOverflow: 'ellipsis',

                        }}
                    >재미있게 잘 읽었습니다. 밤에 시작했는데 읽다보니 그냥 끝까지 보느라 잠이 모자랐네요.
                        소름돋고 너무 재밌었어요.
                        믿고 읽는 히가시노게이고!
                        믿고 읽는 히가시노게이고!
                        믿고 읽는 히가시노게이고!
                        믿고 읽는 히가시노게이고!
                        믿고 읽는 히가시노게이고!
                        믿고 읽는 히가시노게이고!
                        믿고 읽는 히가시노게이고!
                    </MainText>
                </Box>

                <Divider width="90%" sx={{ display: "flex", justifyContent: "center", border: "double 1px #D9D9D9" }}></Divider>

                <Box sx={{ display: "flex", position:"relative", left: 20, top: 25.5 }}>
                    <Typography
                        sx={{
                            fontFamily: 'NanumBarunGothicBold',
                            fontWeight: 100,
                            fontSize: '18px'
                        }}
                    >
                        메스커레이드 호텔
                    </Typography>
                </Box>

                <Box sx={{ display: "flex", position: "relative", left: 130, top: 0 }}>
                    <Text5 >24.04.05</Text5>
                </Box>
            </CustomCard>
            {/* 여기부터 진짜 */}
            <CustomCard>
                <Box sx={{
                    display: "flex",
                    width: "90%",
                    minHeight: "80px"
                }}
                >
                    <MainText
                        sx={{
                            display: '-webkit-box',
                            WebkitBoxOrient: 'vertical',
                            WebkitLineClamp: 3,
                            // whiteSpace: 'nowrap',
                            overflow: "hidden",
                            textOverflow: 'ellipsis',
                        }}
                    >
                        너무 너무 좋습니다!
                    </MainText>
                </Box>

                <Divider width="90%" sx={{ display: "flex", justifyContent: "center", border: "double 1px #D9D9D9" }}></Divider>

                <Box sx={{ display: "flex", position: "relative", left: 20, top: 25.5 }}>
                    <Typography
                        sx={{
                            fontFamily: 'NanumBarunGothicBold',
                            fontWeight: 100,
                            fontSize: '18px'
                        }}
                    >
                        기린의 날개
                    </Typography>
                </Box>

                <Box sx={{ display: "flex", position: "relative", left: 130, top: 0 }}>
                    <Text5 >24.05.01</Text5>
                </Box>
            </CustomCard>

            <CustomCard>
                <Box sx={{
                    display: "flex",
                    width: "90%",
                    minHeight: "80px"
                }}
                >
                    <MainText
                        sx={{
                            display: '-webkit-box',
                            WebkitBoxOrient: 'vertical',
                            WebkitLineClamp: 3,
                            // whiteSpace: 'nowrap',
                            overflow: "hidden",
                            textOverflow: 'ellipsis',

                        }}
                    >재미있게 잘 읽었습니다. 밤에 시작했는데 읽다보니 그냥 끝까지 보느라 잠이 모자랐네요.
                        소름돋고 너무 재밌었어요.
                        믿고 읽는 히가시노게이고!
                        믿고 읽는 히가시노게이고!
                        믿고 읽는 히가시노게이고!
                        믿고 읽는 히가시노게이고!
                        믿고 읽는 히가시노게이고!
                        믿고 읽는 히가시노게이고!
                        믿고 읽는 히가시노게이고!
                    </MainText>
                </Box>

                <Divider width="90%" sx={{ display: "flex", justifyContent: "center", border: "double 1px #D9D9D9" }}></Divider>

                <Box sx={{ display: "flex", position: "relative", right: 130, top: 25.5 }}>
                    <Typography
                        sx={{
                            fontFamily: 'NanumBarunGothicBold',
                            fontWeight: 100,
                            fontSize: '18px'
                        }}
                    >
                        기린의 날개
                    </Typography>
                </Box>

                <Box sx={{ display: "flex", position: "relative", left: 130, top: 0 }}>
                    <Text5 >24.05.01</Text5>
                </Box>
            </CustomCard>



            <CustomCard>
                <Text3>유에서 무로 돌아갑시다.</Text3>
                <Divider width="90%" sx={{ display: "flex", justifyContent: "center", border: "double 1px #D9D9D9" }}></Divider>
                <Text4>무소유</Text4>
            </CustomCard>

            <CustomCard>
                <Text3>유에서 무로 돌아갑시다.</Text3>
                <Divider width="90%" sx={{ display: "flex", justifyContent: "center", border: "double 1px #D9D9D9" }}></Divider>
                <Text4>무소유</Text4>
            </CustomCard>

            <CustomCard>
                <Text3>유에서 무로 돌아갑시다.</Text3>
                <Divider width="90%" sx={{ display: "flex", justifyContent: "center", border: "double 1px #D9D9D9" }}></Divider>
                <Text4>무소유</Text4>
            </CustomCard>

            <CustomCard>
                <Text3>유에서 무로 돌아갑시다.</Text3>
                <Divider width="90%" sx={{ display: "flex", justifyContent: "center", border: "double 1px #D9D9D9" }}></Divider>
                <Text4>무소유</Text4>
            </CustomCard>
        </Container>

    </>)
}

export default ChaekiTodayList;