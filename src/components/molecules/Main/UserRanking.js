import React from 'react';
import { Box, Card, Tooltip } from '@mui/material';
import MilitaryTechIcon from '@mui/icons-material/MilitaryTech';
import { Text5, Text4 } from '../../atoms/Text';
import profileimage from '../../../assets/profile.png';
import InfoIcon from '@mui/icons-material/Info';

const UserRanking = () => {
    return (
        <Card sx={{ position: 'absolute', top: '100px', right:'25px', display: 'flex', flexDirection: 'column', width: '180px', height: '200px', zIndex:999, borderRadius:5, padding:2, border:'solid 0.1px #CECECE' }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Text4>유저 랭킹</Text4>
                <Tooltip title="이 랭킹은 유저가 챌린지 활동을 통해 얻은 포인트로 매겨진 순위입니다." sx={{ maxWidth: 100 }} >
                    <InfoIcon sx={{ color: '#000000', fontSize:'28px' }} />
                </Tooltip>
            </Box>
            <div style={{ border: 'solid 1px black', marginTop: '8px', marginBottom: '8px' }} />
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <MilitaryTechIcon sx={{ fontSize: '50px', color: '#D5A11E' }} /><img src={profileimage} alt="프로필 이미지1" style={{ width: '40px', height: '40px', borderRadius: 30, margin: 5, marginRight:'10px', backgroundColor: 'grey' }} /><Text5>닉네임1</Text5>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <MilitaryTechIcon sx={{ fontSize: '50px', color: '#A3A3A3' }} /><img src={profileimage} alt="프로필 이미지1" style={{ width: '40px', height: '40px', borderRadius: 30, margin: 5,  marginRight:'10px', backgroundColor: 'grey' }} /><Text5>닉네임2</Text5>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <MilitaryTechIcon sx={{ fontSize: '50px', color: '#CD7F32' }} /><img src={profileimage} alt="프로필 이미지1" style={{ width: '40px', height: '40px', borderRadius: 30, margin: 5,  marginRight:'10px', backgroundColor: 'grey' }} /><Text5>닉네임3</Text5>
            </Box>
        </Card>
    );
};

export default UserRanking;