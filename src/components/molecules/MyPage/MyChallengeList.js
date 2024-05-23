import { Box, Card, CardContent, Container } from "@mui/material";
import { MainText, Text5 } from "../../atoms/Text";
import { useEffect, useState } from "react";

import CustomButton from "../../atoms/CustomButton";
import axios from "axios";

const MyChallengeList = ({uno, jwt, setChallengesCount}) => {
      
    const [challenges, setChallenges] = useState([]);
    
    useEffect(() => {
        const fetchChallengeData = async() => {
            try {
                const response = await axios.get(`http://ec2-13-209-50-125.ap-northeast-2.compute.amazonaws.com:8080/users/${uno}/challenges`, {
                headers: {
                    Authorization: jwt
                }});

                if (response.status === 200) {
                    console.log(response.data);
                    setChallenges(response.data);
                    setChallengesCount(response.data.length);
                }

            } catch (error) {
                console.error("Failed to fetch challenges: ", error);
            }
        };

        fetchChallengeData();
    }, [uno, jwt, setChallengesCount]);


    return (<>

        <Container sx={{ display: "flex", flexDirection: "column", width: "100%", pt: 2, pb: 2, height: 500, overflowY: "scroll" }}>
            
            <Box sx={{ display: "flex", flexDirection: "column", alignItems: "left" }}>
                {challenges.map((challenge) => (
                    <Card
                        key={challenge.no}
                        sx={{
                            width: "100%",
                            height: 180, mb: 3
                        }}
                        elevation={10}
                        >

                        <CardContent sx={{ display: "flex" }}>
                            <Box
                                component="img"
                                src={challenge.bookDetail.imageUrl}
                                sx={{
                                    width: 102,
                                    height: "150px",
                                    border: "solid 1px #cecece"
                                }}
                            >

                            </Box>

                            <Box sx={{ pl: 3, width: "85%"}}>
                                <MainText
                                    sx={{
                                        fontFamily: 'NanumBarunGothicBold',
                                        fontWeight: 100,
                                        fontSize: '18px'
                                    }}
                                >
                                    챌린지명 : {challenge.name}
                                </MainText>

                                <MainText>
                                    도서명 : {challenge.bookDetail.name}
                                </MainText>

                                <Text5 sx={{mt:2}}>
                                    기간 : {challenge.startDate} ~ {challenge.endDate}
                                </Text5>
                            </Box>

                            <Box sx={{ display: "flex", width:"25%"}}>
                                <CustomButton variant="outlined" sx={{
                                    backgroundColor: 'black',
                                    '&:hover': {
                                        backgroundColor: '#949494',
                                        borderColor: '#000000',
                                    },
                                    alignSelf: 'flex-end', mt: 'auto'
                                }} style={{ color: '#FFFFFF' }} to={`/challenges/${challenge.no}`}>
                                    챌린지 바로가기
                                </CustomButton>
                            </Box>
                        </CardContent>
                    </Card>
                ))}
            </Box>

        </Container>
    </>)
}

export default MyChallengeList;