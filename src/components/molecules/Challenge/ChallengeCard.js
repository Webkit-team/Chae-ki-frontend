import { Box, Card } from '@mui/material';
import React from 'react';
import { Text3, Text5 } from '../../atoms/Text';
import CustomButton from '../../atoms/CustomButton';

const ChallengeCard = () => {
    return (
        <Card sx={{ p: 3, m: 3, display: 'flex', height: '150px' }}>
            <Box sx={{ display: 'flex', flexDirection: 'row', flexGrow: 1 }}>
                <img src="https://placehold.co/300x350" alt="placeholder" />
                <Box sx={{ p: 1, m: 1 }}>
                    <Text3>챌린지명</Text3>
                    <Text5>책 분야</Text5>
                    <Text5>참가자 수</Text5>
                    <Text5>기간</Text5>
                </Box>
            </Box>
            <CustomButton variant="outlined" to="/book" sx={{
                alignSelf: 'flex-end', mt: 'auto'
            }}>
                도서 상세 보기
            </CustomButton>
            <CustomButton variant="outlined" to="/challenge/:id" sx={{
                backgroundColor: 'black',
                '&:hover': {
                    backgroundColor: '#949494',
                    borderColor: '#000000',
                },
                alignSelf: 'flex-end', mt: 'auto'
            }} style={{ color: '#FFFFFF' }} >
                참가하기
            </CustomButton>
        </Card>
    );
};

export default ChallengeCard;
