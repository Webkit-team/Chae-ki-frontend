import React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import CustomButton from '../../atoms/CustomButton';
import { useNavigate } from 'react-router-dom';
import { Text3, Text4, Text5 } from '../../atoms/Text';
import { Tooltip, styled } from '@mui/material';

const StyledImage = styled('img')({
    width: '150px',
    height: '220px',
    objectFit: 'cover',
    border: 'solid 1px #CECECE',
    cursor: 'pointer',
  });

const challengeList = [
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
        img: "https://image.aladin.co.kr/product/33811/91/cover200/k842930585_2.jpg",
        title: '봄을 맞아 새로운 출발을',
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
        img: "https://image.aladin.co.kr/product/32852/7/cover200/k132936910_2.jpg",
        title: '투자의 비밀을 알아보자',
        bookname: '돈의 심리학',
        startdate: '2024-05-20',
        enddate: '2024-05-31',
        memberCount: '10',
        id: '305',
    },
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
        navigate(`/challenge/${id}`);
    }
    return (
        <Box sx={{ p: 2, my: 5 }}>
            <Grid container spacing={5} direction="column" alignItems="center">
                    <Grid item md={6} display="flex" sx={{animation: `slideRightFadeIn 1s 0ms`}}>
                        <img src={challengeList[0].img} alt="챌린지 이미지" style={{ marginRight: '35px', width: '200px', height: '100%', objectFit: 'contain', border: 'solid 1px #CECECE' }} />
                        <div className="wrap-detail" style={{ alignContent: 'center', maxWidth: '350px' }}>
                            <Text3>챌린지명: {challengeList[0].title} </Text3>
                            <Text4 sx={{ mt: 1 }}>도서명: {challengeList[0].bookname}</Text4>
                            <Text5 sx={{ mt: 1 }}>기간: {challengeList[0].startdate} ~ {challengeList[0].enddate}</Text5>
                            <Text5 sx={{ pb: 2 }}>참가인원: {challengeList[0].memberCount} / 20</Text5>
                            <div className='wrap-button' sx={{ display: 'flex' }}>
                                <CustomButton variant="outlined" to="/book" sx={{ alignSelf: 'flex-end', mt: 'auto' }}>
                                    도서 상세 보기
                                </CustomButton>
                                <CustomButton variant="outlined" to="/challenge" sx={{
                                    backgroundColor: 'black',
                                    '&:hover': {
                                        backgroundColor: '#949494',
                                        borderColor: 'black',
                                    },
                                    alignSelf: 'flex-end', mt: 'auto'
                                }} style={{ color: '#FFFFFF' }} >
                                    챌린지 보기
                                </CustomButton>
                            </div>
                        </div>
                    </Grid>
                <Box sx={{ mt: 6 }}>
                    <Grid container spacing={3} sx={{ justifyContent: 'space-between' }}>
                        {challengeList.slice(1).map((item, key) => (
                            <Grid item md={2} key={key} onClick={() => handleClick(item.id)} sx={{padding: 1, width: '250px', animation: `slideUpFadeIn 1s ease-out ${key * 100}ms forwards` }} >
                                <StyledImage src={item.img} alt={item.title}/>
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


