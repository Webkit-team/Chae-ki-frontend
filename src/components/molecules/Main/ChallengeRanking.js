import React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import CustomButton from '../../atoms/CustomButton';
import { useNavigate } from 'react-router-dom';

const testImg = "https://placehold.co/150x200"
const imgList = [
    {
        img: testImg,
        title: 'test1'
    },
    {
        img: testImg,
        title: 'test2'
    },
    {
        img: testImg,
        title: 'test3'
    },
    {
        img: testImg,
        title: 'test4'
    },
    {
        img: testImg,
        title: 'test5'
    },
    {
        img: testImg,
        title: 'test6'
    },

]

const ChallengeRanking = () => {
    const navigate = useNavigate();
    const handleClick = (props) => {
        navigate('/challenge/:id');
    }
    return (
        <Box sx={{ p: 2, my:1 }}>
            <Grid container spacing={5} direction="column" alignItems="center">
                <Grid item md={6} display="flex">
                    <img src='https://placehold.co/200x250' alt="test-img" style={{ marginRight: '35px' }} />
                    <div className="wrap-detail" style={{ alignContent: 'center' }}>
                        <h4>챌린지명: </h4>
                        <h4>도서명: </h4>
                        <h4>기간: </h4>
                        <h4>참가인원: </h4>
                        <div className='wrap-button' sx={{ display: 'flex' }}>
                            <CustomButton variant="outlined" to="/book">
                                도서 상세 보기
                            </CustomButton>
                            <CustomButton variant="outlined" to="/challenge" sx={{
                                backgroundColor: 'black',
                                '&:hover': {
                                    backgroundColor: '#949494',
                                    borderColor: 'green',
                                },
                            }} style={{ color: '#FFFFFF' }} >
                                챌린지 보기
                            </CustomButton>
                        </div>
                    </div>
                </Grid>
                <Grid item md={6} sx={{marginTop:3}}>
                    <Grid container spacing={5} alignContent='center'>
                        {imgList.map((item, key) => (
                            <Grid item md={2} onClick={(props) => (handleClick())}>
                                <img src={item.img} alt={item.title} />
                                <h3>(챌린지명)</h3>
                            </Grid>
                        ))}
                    </Grid>
                </Grid>
            </Grid>

        </Box>
    );
};

export default ChallengeRanking;


