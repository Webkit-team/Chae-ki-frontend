import React from 'react';
import { Box, Card, Tooltip } from '@mui/material';
import MilitaryTechIcon from '@mui/icons-material/MilitaryTech';
import { Text5, Text4 } from '../../atoms/Text';
import profileimage from '../../../assets/profile.png';
import InfoIcon from '@mui/icons-material/Info';

const users = [
    {
        img: 'https://mblogthumb-phinf.pstatic.net/20160817_259/retspe_14714118890125sC2j_PNG/%C7%C7%C4%AB%C3%F2_%281%29.png?type=w800',
        name: '최지원'
    },
    {
        img: 'https://pds.joongang.co.kr/news/component/htmlphoto_mmdata/201402/05/htm_20140205947611601161.jpg',
        name: '권태현'
    },
    {
        img: 'https://i.namu.wiki/i/RQBoymvPB5YEMOOr1-fo2J5S58ep8bW5I3kt2vWt-6UN399RSb7wgZPaeIZ5_a6j7wUB9A30eov5RGbrzrsrCA.webp',
        name: '박성준'
    },
];

const medalColors = ['#D5A11E', '#A3A3A3', '#CD7F32'];

const UserRanking = () => {
    return (
        <Card sx={{ position: 'absolute', top: '100px', right: '25px', display: 'flex', flexDirection: 'column', width: '160px', height: '190px', zIndex: 999, borderRadius: 5, padding: 3,paddingTop:2, border: 'solid 0.1px #CECECE' }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Text4>유저 랭킹</Text4>
                <Tooltip title="이 랭킹은 유저가 챌린지 활동을 통해 얻은 포인트로 매겨진 순위입니다." sx={{ maxWidth: 100 }}>
                    <InfoIcon sx={{ color: '#000000', fontSize: '28px'}} />
                </Tooltip>
            </Box>
            <div style={{ border: 'solid 1px black', marginTop: '8px', marginBottom: '8px' }} />
            {users.map((user, index) => (
                <Box key={index} sx={{ display: 'flex', alignItems: 'center' }}>
                    <MilitaryTechIcon sx={{ fontSize: '50px', color: medalColors[index] }} /><img src={user.img || profileimage} alt={`프로필 이미지${index + 1}`} style={{ width: '40px', height: '40px', borderRadius: 30, margin: 5, marginRight: '10px', backgroundColor: 'white', border: '1px solid black' }} /><Text5>{user.name}</Text5>
                </Box>
            ))}
        </Card>
    );
};

export default UserRanking;
