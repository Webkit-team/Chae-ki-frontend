import { Box, Card } from '@mui/material';
import React from 'react';
import { Text3, Text4, Text5 } from '../../atoms/Text';
import CustomButton from '../../atoms/CustomButton';

const ChallengeCard = ({img, title, category, bookname, startdate, enddate, memberCount, id}) => {
    return (
        <Card sx={{ p: 3, m: 1, display: 'flex', height: '150px' }} >
            <Box sx={{ display: 'flex', flexDirection: 'row', flexGrow: 1 }}>
                <img src={img} alt="placeholder" style={{border: 'solid 1px #CECECE'}} />
                <Box sx={{ p: 1, m: 1 }}>
                    <Text4 sx={{fontSize:'15px', color:'#717171'}}>{title}</Text4>
                    <Text3>{bookname}</Text3>
                    <Text5>분야 : {category}</Text5>
                    <Text5>참가인원 : {memberCount} / 20</Text5>
                    <Text5 sx={{mt:2, color:'#717171'}}>{startdate} ~ {enddate}</Text5>
                </Box>
            </Box>
            <CustomButton variant="outlined" to="/books/:id" sx={{
                alignSelf: 'flex-end', mt: 'auto'
            }}>
                도서 상세 보기
            </CustomButton>
            <CustomButton variant="outlined" sx={{
                backgroundColor: 'black',
                '&:hover': {
                    backgroundColor: '#949494',
                    borderColor: '#000000',
                },
                alignSelf: 'flex-end', mt: 'auto'
            }} style={{ color: '#FFFFFF' }} to={`/challenges/${id}`}>
                참가하기
            </CustomButton>
        </Card>
    );
};

export default ChallengeCard;
