import React, { useEffect, useState } from 'react';
import { Box, Card, Tooltip } from '@mui/material';
import MilitaryTechIcon from '@mui/icons-material/MilitaryTech';
import { Text5, Text4 } from '../../atoms/Text';
import profile from '../../../assets/profile.png';
import InfoIcon from '@mui/icons-material/Info';
import axios from 'axios';

const medalColors = ['#D5A11E', '#A3A3A3', '#CD7F32'];

const UserRanking = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://ec2-13-209-50-125.ap-northeast-2.compute.amazonaws.com:8080/userRank');
                setUsers(response.data);
            } catch (error) {
                console.error('Error fetching data: ', error);
            }
        };

        fetchData();
    }, []);

    return (
        <Card sx={{ position: 'absolute', top: '100px', right: '25px', display: 'flex', flexDirection: 'column', maxWidth: '200px', height: '190px', zIndex: 999, borderRadius: 5, padding: 3,paddingTop:2, border: 'solid 0.1px #CECECE',  animation: `slideUpFadeIn 1s 0ms` }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Text4>유저 랭킹</Text4>
                <Tooltip title="이 랭킹은 유저가 챌린지 활동을 통해 얻은 포인트로 매겨진 순위입니다." sx={{ maxWidth: 100 }}>
                    <InfoIcon sx={{ color: '#000000', fontSize: '28px'}} />
                </Tooltip>
            </Box>
            <div style={{ border: 'solid 1px black', marginTop: '8px', marginBottom: '8px' }} />
            {users.map((user, index) => (
                <Box key={index} sx={{ display: 'flex', alignItems: 'center' }}>
                    <MilitaryTechIcon sx={{ fontSize: '50px', color: medalColors[index] }} /><img src={user.imageUrl || profile} alt={`프로필 이미지${index + 1}`} style={{ width: '40px', height: '40px', borderRadius: 30, margin: 5, marginRight: '10px', backgroundColor: 'white', border: '1px solid black' }} /><Text5>{user.nickname}</Text5>
                </Box>
            ))}
        </Card>
    );
};

export default UserRanking;
