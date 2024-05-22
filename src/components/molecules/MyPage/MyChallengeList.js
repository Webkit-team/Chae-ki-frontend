import { Box, Card, CardContent, Container, MenuItem, Select } from "@mui/material";
import { MainText, Text5 } from "../../atoms/Text";
import CustomFormControl from "../../atoms/CustomFormControl"
import { useEffect, useState } from "react";

import CustomButton from "../../atoms/CustomButton";
import axios from "axios";

const MyChallengeList = ({uno, jwt, SetChallengesCount}) => {

    // const [challenge, setChallenge] = useState("doing");

    // const handleChange = (e) => {
    //     setChallenge(e.target.value);
    // };
        
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
                    SetChallengesCount(response.data.length);
                }

            } catch (error) {
                console.error("Failed to fetch challenges: ", error);
            }
        };

        fetchChallengeData();
    }, [uno, jwt]);


    return (<>

        <Container sx={{ display: "flex", flexDirection: "column", width: 900 }}>
            {/* <Box sx={{ display: "flex", justifyContent: "center" }}>
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
            </Box> */}


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

                            <Box sx={{ pl: 3 }}>
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

                            <Box sx={{ display: "flex", alignItems: "center", marginLeft: "auto", alignSelf: "flex-end", height: 20, pl: 10, pb: 2 }}>
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