import React, { useEffect, useState } from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import CustomButton from '../../atoms/CustomButton';
import { useNavigate } from 'react-router-dom';
import { Text1, Text5 } from '../../atoms/Text';
import { Tooltip, styled } from '@mui/material';
import axios from 'axios';

const StyledImage = styled('img')({
    width: '100%',
    height: '220px',
    objectFit: 'cover',
    border: 'solid 1px #CECECE',
    cursor: 'pointer',
});

const ChallengeRanking = () => {
    const navigate = useNavigate();
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://ec2-13-209-50-125.ap-northeast-2.compute.amazonaws.com:8080/challenges');
                setData(response.data.content);
            } catch (error) {
                console.error('Error fetching data: ', error);
            }
        };

        fetchData();
    }, []);

    const handleClick = (id) => {
        navigate(`/challenges/${id}`);
    }
    return (
        <Box sx={{ my: 5, alignItems:"center" }}>
            <Grid container spacing={5} direction="column" alignItems="center">
                {data.length > 0 && (
                    <Grid item md={6} display="flex" sx={{ animation: `slideRightFadeIn 1s 0ms`, marginBottom: 7 }}>
                        <img src={data[0].book.imageUrl} alt="챌린지 이미지" style={{ marginRight: '35px', width: '200px', height: '100%', objectFit: 'contain', border: 'solid 1px #CECECE', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }} />
                        <div className="wrap-detail" style={{ backgroundColor: '#FFFFFF', padding: 30, alignContent: 'center', maxWidth: '480px', border: '1px solid #CECECE', borderRadius: '10px', background: 'white', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', justifyContent: 'space-between', margin: 'auto' }}>
                            <Text1 sx={{ fontSize: '22px' }} >오늘의 챌린지</Text1>
                            <hr />
                            <Text1 sx={{ fontFamily: 'MaruBuri-Bold', fontSize: '25px', color: '#000000' }}>"{data[0].name}" </Text1>
                            <Text5 sx={{ mt: 1 }}>기간: {data[0].startDate} ~ {data[0].endDate}</Text5>
                            <Text5 sx={{ pb: 2 }}>참가인원: {data[0].memberCount} / 20</Text5>
                            <div className='wrap-button' style={{ display: 'flex', justifyContent: 'flex-end' }}>
                                <CustomButton variant="outlined" to={`/challenges/${data[0].no}`} sx={{
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
                            </div>
                        </div>
                    </Grid>
                )}
                <Box sx={{ mt: 6, alignItems:'center', justifyContent: 'center' }}>
                    <Grid container spacing={1} gap={5} sx={{ justifyContent: 'center' }}>
                        {data.slice(1, 6).map((item, key) => (
                            <Grid item md={2} key={key} onClick={() => handleClick(item.no)} sx={{ padding: 1, width: '100%', animation: `slideUpFadeIn 1s ease-out ${key * 100}ms forwards` }} >
                                <StyledImage src={item.book.imageUrl} alt={item.book.name} />
                                <Tooltip title={item.name} arrow>
                                    <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", textAlign:'center' }}>
                                        <Text5 sx={{ overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap", width: '100%' }}>
                                            {item.name}
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
