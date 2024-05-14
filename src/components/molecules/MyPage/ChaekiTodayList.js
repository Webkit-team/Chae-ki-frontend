import { Box, Container, Divider } from "@mui/material";
import { Text3, Text4, MainText } from "../../atoms/Text";
import CustomCard from "../../atoms/CustomCard";

const ChaekiTodayList = () => {

    return (<>

        <Container sx={{ display: "grid", gridTemplateColumns: "400px 400px", justifyContent: "center", gap: 10, width: 900, pt: 2, pb: 3 }}>
            
            {/* 방법1. 박스 안에 텍스트 - 박스에서도 레이아웃 설정, 더보기 설정 o */}
            <CustomCard>
                <Box sx={{
                    display: "flex",
                    width: "90%",
                    height: 70,
                    // maxHeight: 80,
                    position: "relative",
                    alignItems: "start",
                    justifyContent: "start",
                    textAlign:"start"
                }}>
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
                        재미있게 잘 읽었습니다. 밤에 시작했는데 읽다보니 그냥 끝까지 보느라 잠이 모자랐네요.
                        소름돋고 너무 재밌었어요.
                        믿고 읽는 히가시노게이고!
                        믿고 읽는 히가시노게이고!
                        믿고 읽는 히가시노게이고!
                        믿고 읽는 히가시노게이고!
                        믿고 읽는 히가시노게이고!
                    </MainText>
                </Box>

                <Divider width="90%" sx={{ display: "flex", justifyContent: "center", border: "double 1px #D9D9D9" }}></Divider>

                <Box sx={{ display: "flex", position: "relative", right: 100, top: 50, alignItems: "right", justifyContent: "right" }}>
                    <Text4>메스커레이드 호텔</Text4>
                </Box>
            </CustomCard>

            {/* 방법2. 박스 안에 텍스트 - 박스에서도 레이아웃 설정, 더보기 설정 x */}
            <CustomCard>
                <Box sx={{
                    display: "flex",
                    width: "100%",
                    maxHeight: 150,
                    position: "relative",
                    alignItems: "center",
                    justifyContent: "center",
                    overflow: "scroll"
                }}>
                    <Text3>
                        재미있게 잘 읽었습니다. 밤에 시작했는데 읽다보니 그냥 끝까지 보느라 잠이 모자랐네요.
                        소름돋고 너무 재밌었어요.
                        믿고 읽는 히가시노게이고!
                        믿고 읽는 히가시노게이고!
                        믿고 읽는 히가시노게이고!
                        믿고 읽는 히가시노게이고!
                        믿고 읽는 히가시노게이고!
                        믿고 읽는 히가시노게이고!
                        믿고 읽는 히가시노게이고!
                    </Text3>
                </Box>

                <Divider width="90%" sx={{ display: "flex", justifyContent: "center", border: "double 1px #D9D9D9" }}></Divider>

                <Box sx={{ display: "flex", position: "relative", right: 100, top: 50, alignItems: "right", justifyContent: "right" }}>
                    <Text4>메스커레이드 호텔</Text4>
                </Box>
            </CustomCard>
        
            {/* 방법3. 박스 안넣고 바로 텍스트 - 더보기 설정 o */}
            <CustomCard>
                <Box sx={{
                    display: "flex",
                    width: "100%",
                    maxHeight: 100,
                    position: "relative",
                    alignItems: "center",
                    justifyContent: "center"
                }}>
                    <Text3
                        sx={{
                            whiteSpace: 'nowrap',
                            overflow: "hidden",
                            textOverflow: 'ellipsis',
                        }}
                    >
                        재미있게 잘 읽었습니다. 밤에 시작했는데 읽다보니 그냥 끝까지 보느라 잠이 모자랐네요.
                        소름돋고 너무 재밌었어요.
                        믿고 읽는 히가시노게이고!
                    </Text3>

                </Box>
                <Divider width="90%" sx={{ display: "flex", justifyContent: "center", border: "double 1px #D9D9D9" }}></Divider>
                <Text4>돌이킬 수 없는 약속</Text4>
            </CustomCard>

            {/* 방법4. 박스 안넣고 바로 텍스트 - 더보기 설정 x */}
            <CustomCard>
                <Text3>재미있게 잘 읽었습니다. 밤에 시작했는데 읽다보니 그냥 끝까지 보느라 잠이 모자랐네요.
                    소름돋고 너무 재밌었어요.
                    믿고 읽는 히가시노게이고!
                    믿고 읽는 히가시노게이고!
                        믿고 읽는 히가시노게이고!
                        믿고 읽는 히가시노게이고!
                        믿고 읽는 히가시노게이고!
                        믿고 읽는 히가시노게이고!
                        믿고 읽는 히가시노게이고!
                </Text3>
                <Divider width="90%" sx={{ display: "flex", justifyContent: "center", border: "double 1px #D9D9D9" }}></Divider>
                <Text4>기린의 날개</Text4>
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