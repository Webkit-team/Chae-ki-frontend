import React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import CustomButton from '../../atoms/CustomButton';
import { useNavigate } from 'react-router-dom';
import { Text1, Text2, Text3, Text4, Text5 } from '../../atoms/Text';
import { Button, Tooltip, makeStyles, styled } from '@mui/material';
import { ClassNames } from '@emotion/react';

const StyledImage = styled('img')({
    width: '150px',
    height: '220px',
    objectFit: 'cover',
    border: 'solid 1px #CECECE',
    cursor: 'pointer',
});

const challengeList = [
    {
        img: "https://image.aladin.co.kr/product/33786/1/cover200/k132930130_2.jpg",
        title: '돌다리도 두들겨보고 건너자',
        bookname: '감으로 읽고 각으로 쓴다',
        startdate: '2024-05-20',
        enddate: '2024-05-31',
        memberCount: '15',
        id: '306',
    },
    {
        img: "https://image.aladin.co.kr/product/33811/91/cover200/k842930585_2.jpg",
        title: '자기계발의 중요성을 알자',
        bookname: '나는 읽고 쓰고 버린다 - 손웅정의 말',
        startdate: '2024-05-18',
        enddate: '2024-05-31',
        memberCount: '10',
        id: '303',
    },
    {
        img: "https://image.aladin.co.kr/product/33798/94/cover200/k852930477_2.jpg",
        title: '봄을 맞은 문학 여행',
        bookname: '나의 돈키호테',
        startdate: '2024-05-19',
        enddate: '2024-05-31',
        memberCount: '10',
        id: '304',
    },
    {
        img: "https://image.aladin.co.kr/product/33686/83/cover500/k422939932_2.jpg",
        title: '봄비를 느껴보자',
        bookname: '삶이 흔들릴 때 뇌과학을 읽습니다',
        startdate: '2024-05-17',
        enddate: '2024-05-31',
        memberCount: '15',
        id: '302',
    },

    {
        img: "https://image.aladin.co.kr/product/32852/7/cover200/k132936910_2.jpg",
        title: '투자의 비밀을 알아보자',
        bookname: '돈의 심리학',
        startdate: '2024-05-20',
        enddate: '2024-05-31',
        memberCount: '10',
        id: '305',
    },

    {
        img: "https://image.aladin.co.kr/product/33562/77/cover200/k882939888_1.jpg",
        title: '오늘의 하루는 어땠습니까?',
        bookname: '나를 소모하지 않는 현명한 태도에 관하여',
        startdate: '2024-05-20',
        enddate: '2024-05-31',
        memberCount: '15',
        id: '307',
    },
]

const ChallengeRanking = () => {
    const navigate = useNavigate();

    const handleClick = (id) => {
        navigate(`/challenges/${id}`);
    }
    return (
        <Box sx={{ p: 2, my: 5 }}>
            <Grid container spacing={5} direction="column" alignItems="center">
                <Grid item md={6} display="flex" sx={{ animation: `slideRightFadeIn 1s 0ms`, marginBottom: 7 }}>
                    <img src={challengeList[0].img} alt="챌린지 이미지" style={{ marginRight: '35px', width: '200px', height: '100%', objectFit: 'contain', border: 'solid 1px #CECECE', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }} />
                    <div className="wrap-detail" style={{ backgroundColor: '#FFFFFF',padding: 30, alignContent: 'center', maxWidth: '480px', border: '1px solid #CECECE', borderRadius:'10px', background: 'white', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', justifyContent: 'space-between', margin: 'auto' }}>
                        <Text1 sx={{fontSize:'22px'}} >오늘의 챌린지</Text1>
                        <hr/>
                        <Text1 sx={{fontFamily:'MaruBuri-Bold', fontSize:'25px', color:'#000000'}}>"{challengeList[0].title}" </Text1>
                        <Text5 sx={{ mt: 1 }}>기간: {challengeList[0].startdate} ~ {challengeList[0].enddate}</Text5>
                        <Text5 sx={{ pb: 2 }}>참가인원: {challengeList[0].memberCount} / 20</Text5>
                        <div className='wrap-button' style={{ display: 'flex', justifyContent: 'flex-end' }}>
                            <CustomButton variant="outlined" to={`/books/${challengeList[0].id}`} sx={{
                                backgroundColor: '#ffffff', 
                                padding: '10px 20px',
                                borderRadius: '4px',
                                border: 'solid 1px #D6D6D6',
                                boxShadow: '0 4px #999', 
                                '&:hover': {
                                    backgroundColor: '#D6D6D6',
                                    border: ' 1px solid #D6D6D6',
                                    boxShadow: '0 4px #666', 
                                },
                                '&:active': {
                                    backgroundColor: '#C0C0C0',
                                    boxShadow: '0 4px #666', 
                                    transform: 'translateY(2px)', 
                                },
                            }}>
                                챌린지 보러가기
                            </CustomButton>
                            {/* <CustomButton variant="outlined" to={`/challenges/${challengeList[0].id}`} sx={{
                                marginLeft:'40px',
                                backgroundColor: '#000000', 
                                color: 'white !important',
                                padding: '10px 20px',
                                border: 'black 1px solid',
                                borderRadius: '4px',
                                boxShadow: '0 4px #999', 
                                '&:hover': {
                                    backgroundColor: '#535353',
                                    border: '#838383 1px solid',
                                    boxShadow: '0 4px #666', 
                                },
                                '&:active': {
                                    backgroundColor: '#767676',
                                    boxShadow: '0 4px #666', 
                                    transform: 'translateY(2px)', 
                                },
                            }}>
                                챌린지 정보보기
                            </CustomButton> */}
                        </div>
                    </div>
                </Grid>
                <Box sx={{ mt: 6 }}>
                    <Grid container spacing={3} gap={5} sx={{ justifyContent: 'center' }}>
                        {challengeList.slice(1).map((item, key) => (
                            <Grid item md={2} key={key} onClick={() => handleClick(item.id)} sx={{ padding: 1, width: '250px', animation: `slideUpFadeIn 1s ease-out ${key * 100}ms forwards` }} >
                                <StyledImage src={item.img} alt={item.title} />
                                <Tooltip title={item.title} arrow>
                                    <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                                        <Text5 sx={{ overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap", width: '100%' }}>
                                            {item.title}
                                        </Text5>
                                    </Box>
                                </Tooltip>
                            </Grid>
                        ))}
                    </Grid>
                </Box>

            </Grid>

        </Box>
    );
};

export default ChallengeRanking;
