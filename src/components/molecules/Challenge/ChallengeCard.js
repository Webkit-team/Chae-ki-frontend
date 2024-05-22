import { Box, Card } from '@mui/material';
import React, { useState } from 'react';
import { Text3, Text4, Text5 } from '../../atoms/Text';
import CustomButton from '../../atoms/CustomButton';
import { useCookies } from 'react-cookie';
import axios from 'axios';

const ChallengeCard = ({ img, title, category, bookname, startdate, enddate, memberCount, id, onClick }) => {
    const [isLoading, setIsLoading] = useState(true);
    const [cookies] = useCookies(["user"]);

    const handleImageLoad = () => {
        setIsLoading(false);
    };

    const handleJoin = async () => {

        const token = cookies.user ? cookies.user.jwt : null;
        const uno = cookies.user ? cookies.user.uno : null;
        if (!token) {
            alert('로그인이 필요합니다.');
            return;
        }
        try {
            const res = await axios.post(
                `http://ec2-13-209-50-125.ap-northeast-2.compute.amazonaws.com:8080/challenges/${id}/users/${uno}`,
                {},
                {
                    headers: {
                        'Authorization': token,
                    },
                }
            );
            if(res){
                alert('챌린지에 참가하셨습니다.');
            }
        } catch (error) {
            console.error('참가 실패:', error.response ? error.response.data : error.message);
        }
    };

    return (
        <Card sx={{ p: 3, m: 1, display: 'flex', height: 'auto' }} >
            <Box onClick={onClick} sx={{ display: 'flex', flexDirection: 'row', flexGrow: 1, cursor: 'pointer', width: '500px', height: '150px' }}>
                <Box sx={{ position: 'relative', width: '150px', height: '160px' }}>
                    {isLoading && (
                        <Box sx={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: '#f0f0f0' }} />
                    )}
                    <img
                        src={img}
                        alt="placeholder"
                        style={{ display: isLoading ? 'none' : 'block', width: '100%', height: '100%', objectFit: 'cover', border: 'solid 1px #CECECE' }}
                        onLoad={handleImageLoad}
                    />
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'column', px: 1, py: 0, ml: 1, justifyContent: 'space-between', height: '150px', width: '100%' }}>
                    <Box>
                        <Text4 sx={{ fontSize: '15px', color: '#717171' }}>{title}</Text4>
                        <Text3 sx={{ lineHeight: '120%' }}>{bookname}</Text3>
                        <Text5>분야 : {category}</Text5>
                        <Text5>참가인원 : {memberCount} / 20</Text5>
                    </Box>
                    <Text5 sx={{ mt: 2, color: '#717171' }}>{startdate} ~ {enddate}</Text5>
                </Box>
            </Box>
            <CustomButton variant="outlined" to={`/books/${id}`} sx={{
                alignSelf: 'flex-end', mt: 'auto', zIndex: '999'
            }}>
                도서 상세 보기
            </CustomButton>
            <CustomButton variant="outlined" sx={{
                backgroundColor: 'black',
                '&:hover': {
                    backgroundColor: '#949494',
                    borderColor: '#000000',
                },
                alignSelf: 'flex-end', mt: 'auto', zIndex: '999', color: '#FFFFFF !important'
            }} onClick={handleJoin}>
                참가하기
            </CustomButton>
        </Card>
    );
};

export default ChallengeCard;
