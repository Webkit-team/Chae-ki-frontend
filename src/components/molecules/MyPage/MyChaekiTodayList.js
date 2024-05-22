import { Box, Container, Divider, Modal, Typography } from "@mui/material";
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';

import { Text5, MainText } from "../../atoms/Text";
import CustomCard from "../../atoms/CustomCard";
import CustomButton from "../../atoms/CustomButton";
import { useEffect, useState } from "react";
import axios from "axios";

const ChaekiTodayList = ({uno, jwt, setChaekiTodaysCount}) => {
    const [open, setOpen] = useState(false);

    const [chaekiTodays, setChaekiTodays] = useState([]);
    const [selectedData, setSelectedData] = useState(null);     // 클릭한 카드 정보 저장


    useEffect(() => {
        const fetchChaekiTodayData = async() => {
            try {
                const response = await axios.get(`http://ec2-13-209-50-125.ap-northeast-2.compute.amazonaws.com:8080/users/${uno}/chaekiTodays`, {
                    headers: {
                        Authorization: jwt
                    }});

                    if (response.status === 200) {
                        console.log(response.data);
                        setChaekiTodays(response.data);
                        setChaekiTodaysCount(response.data.length)
                    }
            } catch (error) {
                console.error("Failed to fetch chakiTodays: ", error)
            }
        };

        fetchChaekiTodayData();
    }, [uno, jwt, setChaekiTodaysCount]);


    const handleOpen = (data) => {
        setSelectedData(data);
        setOpen(true);
    }
    const handleClose = () => {
        setOpen(false);
        setSelectedData(null);
    }

    const modalBody = (
        <Box sx={{
            position: "absolute", top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 900,
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
                            챌린지명 : {selectedData.challengeName}
                        </Typography>
                    </Box>

                    <Box sx={{ display: "flex", height: 25 }}>
                        <Box sx={{ display: "flex", width: "80%" }}>
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
                                도서명 : {selectedData.bookName}
                            </Typography>
                        </Box>

                        <Box sx={{ display: "flex", pt: 0.5, width: "15%", justifyContent: "center" }}>
                            <Text5>{selectedData.createdAt}</Text5>
                        </Box>

                        <Box sx={{ display: "flex", width: "5%", justifyContent: "right" }}>    
                            <ThumbUpAltIcon />
                            <MainText sx={{ pl: 1 }}>{selectedData.likeCount}</MainText>
                        </Box>
                    </Box>
                </Box>

                <Divider width="100%" sx={{ display: "flex", mt: 1, mb: 1, justifyContent: "center", border: "double 1px #D9D9D9" }}></Divider>

                <Box sx={{
                    display: "flex",
                    width: "900px",
                    height: "190px"
                }}
                >
                    <MainText
                        sx={{
                            overflowY: "auto",
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

        </Box>);


    return (<>

        <Container
            sx={{
                display: "grid",
                gridTemplateColumns: "400px 400px",
                justifyContent: "center",
                gap: 5,
                width: 900,
                pt: 2, pb: 3
            }}>

            {chaekiTodays.map((data, index) => (
                <CustomCard key={index} onClick={() => handleOpen(data)}>
                    <Box sx={{ display: "flex", flexDirection: "column", width: "100%", justifyContent: "center" }}>
                        <Box sx={{ display: "flex", pl: 2.5, pr: 2.5, pb: 2, height: 30 }}>
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
                                {data.challengeName}
                            </Typography>
                        </Box>

                        <Box sx={{ display: "flex", height: 25 }}>
                            <Box sx={{ display: "flex", width: "50%", pl: 2.5 }}>
                                <Typography
                                    sx={{
                                        fontFamily: 'NanumBarunGothicBold',
                                        fontWeight: 100,
                                        fontSize: '18px',
                                        display: '-webkit-box',
                                        WebkitBoxOrient: 'vertical',
                                        WebkitLineClamp: 1,
                                        overflow: "hidden",
                                        textOverflow: 'ellipsis',
                                    }}
                                >
                                    {data.bookName}
                                </Typography>
                            </Box>

                            <Box sx={{ display: "flex", pr: 3, pt: 0.5, width: "23%", justifyContent: "right" }}>
                                <Text5>{data.createdAt}</Text5>
                            </Box>

                            <Box sx={{ display: "flex", pl: 1 }}>
                                <ThumbUpAltIcon />
                                <MainText sx={{ pl: 1 }}>{data.likeCount}</MainText>
                            </Box>
                        </Box>
                    </Box>

                    <Divider width="90%" sx={{ display: "flex", mt: 1, mb: 1, justifyContent: "center", border: "double 1px #D9D9D9" }}></Divider>

                    <Box sx={{
                        display: "flex",
                        width: "90%",
                        height: "75px"
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
                        >
                            {data.content}
                        </MainText>
                    </Box>
                </CustomCard>
            ))}

            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                {modalBody}
            </Modal>

        </Container>

    </>)
}

export default ChaekiTodayList;