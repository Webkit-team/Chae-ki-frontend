import { Box, Container, Divider, Typography } from "@mui/material";
import { Text5, MainText } from "../../atoms/Text";
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
                    height: "90px"
                }}
                >
                    <MainText
                        sx={{
                            pt: "14px",
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

                <Divider width="90%" sx={{ display: "flex", mt: 1,mb:1, justifyContent: "center", border: "double 1px #D9D9D9" }}></Divider>

                <Box sx={{ display: "flex", width:"100%"}}>
                    <Box sx={{ display: "flex", pl: 2.5, pt: 1, width: "70%", height: 50}}>
                        <Typography
                            sx={{
                                fontFamily: 'NanumBarunGothicBold',
                                fontWeight: 100,
                                fontSize: '18px',
                                display: '-webkit-box',
                                WebkitBoxOrient: 'vertical',
                                WebkitLineClamp: 2,
                                overflow: "hidden",
                                textOverflow: 'ellipsis',
                            }}
                        >
                            기린의 날개
                        </Typography>
                    </Box>

                    <Box sx={{ display: "flex", pt: 1, pr: 3, width: "20%", justifyContent:"right"}}>
                        <Text5 >24.04.05</Text5>
                    </Box>
                </Box>
            </CustomCard>

            <CustomCard>
                <Box sx={{
                    display: "flex",
                    width: "90%",
                    height: "90px"
                }}
                >
                    <MainText
                        sx={{
                            pt: "14px",
                            display: '-webkit-box',
                            WebkitBoxOrient: 'vertical',
                            WebkitLineClamp: 3,
                            overflow: "hidden",
                            textOverflow: 'ellipsis',

                        }}
                    >너무너무 좋습니다.
                    </MainText>
                </Box>

                <Divider width="90%" sx={{ display: "flex", mt: 1,mb:1, justifyContent: "center", border: "double 1px #D9D9D9" }}></Divider>

                <Box sx={{ display: "flex", width:"100%"}}>
                    <Box sx={{ display: "flex", pl: 2.5, pt: 1, width: "70%", height: 50}}>
                        <Typography
                            sx={{
                                fontFamily: 'NanumBarunGothicBold',
                                fontWeight: 100,
                                fontSize: '18px',
                                display: '-webkit-box',
                                WebkitBoxOrient: 'vertical',
                                WebkitLineClamp: 2,
                                overflow: "hidden",
                                textOverflow: 'ellipsis',
                            }}
                        >
                            메스커레이드 호텔
                        </Typography>
                    </Box>

                    <Box sx={{ display: "flex", pt: 1, pr: 3, width: "20%", justifyContent:"right"}}>
                        <Text5 >24.04.05</Text5>
                    </Box>
                </Box>
            </CustomCard>

            <CustomCard>
                <Box sx={{
                    display: "flex",
                    width: "90%",
                    height: "90px"
                }}
                >
                    <MainText
                        sx={{
                            pt: "14px",
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

                <Divider width="90%" sx={{ display: "flex", mt: 1,mb:1, justifyContent: "center", border: "double 1px #D9D9D9" }}></Divider>

                <Box sx={{ display: "flex", width:"100%"}}>
                    <Box sx={{ display: "flex", pl: 2.5, pt: 1, width: "70%", height: 50}}>
                        <Typography
                            sx={{
                                fontFamily: 'NanumBarunGothicBold',
                                fontWeight: 100,
                                fontSize: '18px',
                                display: '-webkit-box',
                                WebkitBoxOrient: 'vertical',
                                WebkitLineClamp: 2,
                                overflow: "hidden",
                                textOverflow: 'ellipsis',
                            }}
                        >
                            전생에 슬라임이었던 건에 대하여
                            전생에 슬라임이었던 건에 대하여
                            전생에 슬라임이었던 건에 대하여
                            전생에 슬라임이었던 건에 대하여
                            전생에 슬라임이었던 건에 대하여
                        </Typography>
                    </Box>

                    <Box sx={{ display: "flex", pt: 1, pr: 3, width: "20%", justifyContent:"right"}}>
                        <Text5 >24.04.05</Text5>
                    </Box>
                </Box>
            </CustomCard>

            <CustomCard>
                <Box sx={{
                    display: "flex",
                    width: "90%",
                    height: "90px"
                }}
                >
                    <MainText
                        sx={{
                            pt: "14px",
                            display: '-webkit-box',
                            WebkitBoxOrient: 'vertical',
                            WebkitLineClamp: 3,
                            overflow: "hidden",
                            textOverflow: 'ellipsis',

                        }}
                    >너무너무 좋습니다.
                    </MainText>
                </Box>

                <Divider width="90%" sx={{ display: "flex", mt: 1,mb:1, justifyContent: "center", border: "double 1px #D9D9D9" }}></Divider>

                <Box sx={{ display: "flex", width:"100%"}}>
                    <Box sx={{ display: "flex", pl: 2.5, pt: 1, width: "70%", height: 50}}>
                        <Typography
                            sx={{
                                fontFamily: 'NanumBarunGothicBold',
                                fontWeight: 100,
                                fontSize: '18px',
                                display: '-webkit-box',
                                WebkitBoxOrient: 'vertical',
                                WebkitLineClamp: 2,
                                overflow: "hidden",
                                textOverflow: 'ellipsis',
                            }}
                        >
                            전생에 슬라임이었던 건에 대하여
                            전생에 슬라임이었던 건에 대하여
                            전생에 슬라임이었던 건에 대하여
                            전생에 슬라임이었던 건에 대하여
                            전생에 슬라임이었던 건에 대하여
                        </Typography>
                    </Box>

                    <Box sx={{ display: "flex", pt: 1, pr: 3, width: "20%", justifyContent:"right"}}>
                        <Text5 >24.04.05</Text5>
                    </Box>
                </Box>
            </CustomCard>
            
        </Container>

    </>)
}

export default ChaekiTodayList;