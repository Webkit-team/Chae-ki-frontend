import { Box, Button, IconButton, Paper, styled } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Text1, Text3, Text4, Text5 } from '../../atoms/Text';
import FlagIcon from '@mui/icons-material/Flag';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useCookies } from 'react-cookie';

const daysOfWeek = ["일요일", "월요일", "화요일", "수요일", "목요일", "금요일", "토요일"];

const CustomPaper = styled(Paper)(({ theme }) => ({
    display: 'flex',
    position: 'relative',
    width: '670px',
    padding: theme.spacing(2),
    marginLeft: 2,
    marginTop: theme.spacing(2),
    boxShadow: theme.shadows[3],
    '&::before': {
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        padding: '0 8px',
        backgroundColor: 'white',
    }
}));

const DayLabel = styled(Text3)(({ theme, isActive }) => ({
    color: isActive ? 'black' : 'lightgray',
    display: 'inline-block',
    marginRight: theme.spacing(1),
    fontSize: '17px'
}));

const TextContainer = styled(Text4)(({ theme, isExpanded }) => ({
    p: '8px',
    width: '580px',
    justifyContent: 'start',
    height: 'auto',
    overflow: 'hidden',
}));

export const CustomCard = ({ user, uno }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [activeDays, setActiveDays] = useState([]);
    const [isLiked, setIsLiked] = useState(false);
    const isCurrentUser = user.userNo === uno;


    const handleReport = () => {
        const isConfirmed = window.confirm('정말로 신고하시겠습니까?');
        if(isConfirmed){
            alert('신고가 완료되었습니다.');
        }else{
            return;
        }
    };

    const toggleLike = () => {
        setIsLiked(!isLiked);
        // axios.post('/api/like', { liked: !isLiked })
        //     .then(response => {
        //         console.log(response.data); 
        //     })
        //     .catch(error => {
        //         console.error('좋아요 상태 변경 실패:', error);
        //     });
    };

    const handlePrev = () => {
        setCurrentIndex(currentIndex > 0 ? currentIndex - 1 : (user.todays?.length || 1) - 1);
    };

    const handleNext = () => {
        setCurrentIndex(currentIndex < (user.todays?.length || 1) - 1 ? currentIndex + 1 : 0);
    };

    useEffect(() => {
        const newActiveDays = user.todays?.map((today) => {
            const day = new Date(today.createdAt).getDay();
            return daysOfWeek[day].slice(0, 1);
        });
        setActiveDays(newActiveDays);
    }, [user.todays]);

    if (!user || !user.todays || user.todays.length === 0) {
        return null;
    }

    const currentToday = user.todays[currentIndex] || {};

    return (
        <CustomPaper>
            {user && (
                <>
                    <Box sx={{ position: 'absolute', transform: 'translateY(-50%)', top: 0, left: 0, padding: '0 8px' }}>
                        {["월", "화", "수", "목", "금", "토", "일"].map((day) => (
                            <DayLabel key={day} isActive={activeDays.includes(day)}>
                                {day}
                            </DayLabel>
                        ))}
                    </Box>
                    <Box sx={{ display: 'flex', flexDirection: 'column', width: '100vw', textAlign: 'center', justifyContent: 'center', alignItems: 'center' }}>
                        <img src={user.imageUrl} alt='프로필 이미지' style={{ width: '40px', height: '40px', borderRadius: 30, margin: 5, marginRight: '10px', backgroundColor: 'white', border: '1px solid black' }} />
                        <Text1 sx={{ fontSize: '18px', maxWidth: '150px' }}>{user.nickname}</Text1>
                    </Box>
                    <Box sx={{ display: 'flex', flexDirection: 'column', pl: 3, alignItems: 'flex-start' }}>
                        <Box sx={{ display: 'flex', alignSelf: 'end', alignItems: 'center', p: '1px' }}>
                            {/* {isCurrentUser && (
                                <Box>
                                    <Button onClick={handleEdit} sx={{ px: 0, fontSize: '15px', height: '20px', color: '#00A00B' }}>수정</Button>
                                    <Button onClick={handleDelete} sx={{ px: 0, fontSize: '15px', height: '20px', color: '#FF0000' }}>삭제</Button>
                                </Box>
                            )} */}
                            <FlagIcon sx={{ mr: 2, color: '#FF0000' }} onClick={handleReport} />
                            {isLiked ? (
                                <FavoriteIcon onClick={toggleLike} sx={{ color: '#FD699F' }} />
                            ) : (
                                <FavoriteBorderIcon onClick={toggleLike} sx={{ color: '#FD699F' }} />
                            )}
                            <Text5 sx={{ px: 0.5 }}>{currentToday.likeCount}</Text5>
                        </Box>
                        <TextContainer sx={{fontSize:'16px'}}>{currentToday.content}</TextContainer>
                        <Box sx={{ display: 'flex', mt: 'auto', alignItems: 'center', alignSelf: 'flex-end' }}>
                            <Text5 sx={{ mr: 3 }}>{currentToday.createdAt}</Text5>
                            <IconButton sx={{ p: 0 }} onClick={handlePrev}>
                                <ArrowBackIosIcon />
                            </IconButton>
                            <Text5>{activeDays[currentIndex]}요일</Text5>
                            <IconButton sx={{ p: 0 }} onClick={handleNext}>
                                <ArrowForwardIosIcon sx={{ ml: '5px' }} />
                            </IconButton>
                        </Box>
                    </Box>
                </>
            )}
        </CustomPaper>

    );
}

export const CustomComment = ({ comment, uno }) => {
    const [isLiked, setIsLiked] = useState(false);
    const isCurrentUser = comment.userNo === uno;

    const handleReport = () => {
        const isConfirmed = window.confirm('정말로 신고하시겠습니까?');
        if(isConfirmed){
            alert('신고가 완료되었습니다.');
        }else{
            return;
        }
    };

    const toggleLike = () => {
        setIsLiked(!isLiked);
        // axios.post('/api/like', { liked: !isLiked })
        //     .then(response => {
        //         console.log(response.data); 
        //     })
        //     .catch(error => {
        //         console.error('좋아요 상태 변경 실패:', error);
        //     });
    };
    if (!comment) {
        return null;
    }
    return (

        <CustomPaper sx={{ p: '10px', width: '260px' }}>
            {comment && (
                <>
                    <Box sx={{ display: 'flex', flexDirection: 'column', textAlign: 'left', justifyContent: 'flex-start', alignItems: 'flex-start', px: 1 }}>
                        <img src={comment.imageUrl} alt='프로필 이미지' style={{ width: '30px', height: '30px', borderRadius: 30, backgroundColor: 'white', border: '1px solid black' }} />
                        <Text1 sx={{ fontSize: '14px', maxWidth: '50px' }}>{comment.nickname}</Text1>
                    </Box>
                    <Box sx={{ display: 'flex', flexDirection: 'column', pl: 1, textAlign: 'left', justifyContent: 'flex-start', alignItems: 'flex-start' }}>
                        <TextContainer sx={{ width: '150px', fontSize:'14px' }}>{comment.content}</TextContainer>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%', p: '1px' }}>
                            {/* {isCurrentUser && (
                                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                    <Button onClick={handleEdit} sx={{ px: 0, fontSize: '13px', height: '15px', color: '#00A00B', py: 0, minWidth: '30px' }}>수정</Button>
                                    <Button onClick={handleDelete} sx={{ px: 0, fontSize: '13px', height: '15px', color: '#FF0000', py: 0, minWidth: '35px' }}>삭제</Button>
                                </Box>
                            )} */}
                            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                <FlagIcon sx={{ fontSize: '18px', mr: 2, color: '#FF0000' }} onClick={handleReport} />
                                {isLiked ? (
                                    <FavoriteIcon onClick={toggleLike} sx={{ fontSize: '18px', color: '#FD699F' }} />
                                ) : (
                                    <FavoriteBorderIcon onClick={toggleLike} sx={{ fontSize: '18px', color: '#FD699F' }} />
                                )}
                                <Text5 sx={{ px: 0.5 }}>{comment.likeCount}</Text5>
                            </Box>
                        </Box>
                    </Box>
                </>
            )}
        </CustomPaper>
    );
}