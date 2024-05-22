import { Box, Button, IconButton, Paper, styled } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Text1, Text3, Text5 } from '../../atoms/Text';
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

const TextContainer = styled(Text5)(({ theme, isExpanded }) => ({
    p: '8px',
    width: '580px',
    justifyContent: 'start',
    height: isExpanded ? 'auto' : '40px',
    overflow: 'hidden',
    display: '-webkit-box',
    WebkitLineClamp: isExpanded ? 'none' : '3',
    WebkitBoxOrient: 'vertical',
    cursor: 'pointer',
}));

export const CustomCard = ({ user, uno }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [activeDays, setActiveDays] = useState([]);
    const [isExpanded, setIsExpanded] = useState(false);
    const [isLiked, setIsLiked] = useState(false);
    const isCurrentUser = user.userUno === uno;

    const toggleExpand = () => {
        setIsExpanded(!isExpanded);
    };

    const handleReport = () => {
        alert('이 글을 신고하시겠습니까?');
    };

    const handleEdit = () => {
        // 수정 로직
    };

    const handleDelete = () => {
        // 삭제 로직
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
        setCurrentIndex(currentIndex > 0 ? currentIndex - 1 : user.todays.length - 1);
    };

    const handleNext = () => {
        setCurrentIndex(currentIndex < user.todays.length - 1 ? currentIndex + 1 : 0);
    };

    useEffect(() => {
        const newActiveDays = user.todays.map((today) => {
            const day = new Date(today.createdAt).getDay();
            return daysOfWeek[day].slice(0, 1);
        });
        setActiveDays(newActiveDays);
    }, [user.todays]);

    return (
        <CustomPaper>
            <Box sx={{ position: 'absolute', transform: 'translateY(-50%)', top: 0, left: 0, padding: '0 8px' }}>
                {["월", "화", "수", "목", "금", "토", "일"].map((day) => (
                    <DayLabel key={day} isActive={activeDays.includes(day)}>
                        {day}
                    </DayLabel>
                ))}
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'column', width: '100vw', textAlign: 'center', justifyContent: 'center', alignItems: 'center' }}>
                <img src={user.imageUrl} alt='프로필 이미지' style={{ width: '40px', height: '40px', borderRadius: 30, margin: 5, marginRight: '10px', backgroundColor: 'white', border: '1px solid black' }} />
                <Text1 sx={{ fontSize: '18px' }}>{user.nickname}</Text1>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'column', pl: 3, alignItems: 'flex-start' }}>
                <Box sx={{ display: 'flex', alignSelf: 'end', alignItems: 'center', p: '1px' }}>
                    {isCurrentUser && (<Box>
                        <Button onClick={handleEdit} sx={{ px: 0, fontSize: '15px', height: '20px', color: '#00A00B' }}>수정</Button>
                        <Button onClick={handleDelete} sx={{ px: 0, fontSize: '15px', height: '20px', color: '#FF0000' }}>삭제</Button>
                    </Box>
                    )}
                    <FlagIcon sx={{ mr: 2, color: '#FF0000' }} onClick={handleReport} />
                    {isLiked ? (
                        <FavoriteIcon onClick={toggleLike} sx={{ color: '#FD699F' }} />
                    ) : (
                        <FavoriteBorderIcon onClick={toggleLike} sx={{ color: '#FD699F' }} />
                    )}
                    <Text5 sx={{ px: 0.5 }}>{user.todays[currentIndex].likeCount}</Text5>
                </Box>
                <TextContainer isExpanded={isExpanded} onClick={toggleExpand}>{user.todays[currentIndex].content}</TextContainer>
                <Box sx={{ display: 'flex', mt: 1, alignItems: 'center', alignSelf: 'end' }}>
                    <Text5 sx={{ mr: 3 }}>{user.todays[currentIndex].createdAt}</Text5>
                    <IconButton sx={{ p: 0 }} onClick={handlePrev}>
                        <ArrowBackIosIcon />
                    </IconButton>
                    <Text5>{activeDays[currentIndex]}요일</Text5>
                    <IconButton sx={{ p: 0 }} onClick={handleNext}>
                        <ArrowForwardIosIcon sx={{ ml: '5px' }} />
                    </IconButton>
                </Box>
            </Box>
        </CustomPaper>
    );
}

export const CustomComment = ({ comment, uno }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isExpanded, setIsExpanded] = useState(true);
    const [isLiked, setIsLiked] = useState(false);
    const isCurrentUser = comment.userUno === uno;

    const toggleExpand = () => {
        setIsExpanded(!isExpanded);
    };

    const handleReport = () => {
        alert('이 글을 신고하시겠습니까?');
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

    return (
        <CustomPaper sx={{ p: '10px', width: '260px' }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', textAlign: 'left', justifyContent: 'flex-start', alignItems: 'flex-start', px: 1 }}>
                <img src={comment[currentIndex].imageUrl} alt='프로필 이미지' style={{ width: '30px', height: '30px', borderRadius: 30, backgroundColor: 'white', border: '1px solid black' }} />
                <Text1 sx={{ fontSize: '12px' }}>{comment[currentIndex].nickname}</Text1>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'column', pl: 3, textAlign: 'left', justifyContent: 'flex-start', alignItems: 'flex-start' }}>
                <TextContainer isExpanded={isExpanded} onClick={toggleExpand} sx={{ width: '150px' }}>{comment[currentIndex].content}</TextContainer>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%', p: '1px' }}>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <Button sx={{ px: 0, fontSize: '13px', height: '15px', color: '#00A00B', py: 0, minWidth: '30px' }}>수정</Button>
                        <Button sx={{ px: 0, fontSize: '13px', height: '15px', color: '#FF0000', py: 0, minWidth: '35px' }}>삭제</Button>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <FlagIcon sx={{ fontSize: '18px', mr: 2, color: '#FF0000' }} onClick={handleReport} />
                        {isLiked ? (
                            <FavoriteIcon onClick={toggleLike} sx={{ fontSize: '18px', color: '#FD699F' }} />
                        ) : (
                            <FavoriteBorderIcon onClick={toggleLike} sx={{ fontSize: '18px', color: '#FD699F' }} />
                        )}
                        <Text5 sx={{ px: 0.5 }}>{comment[currentIndex].likeCount}</Text5>
                    </Box>
                </Box>
            </Box>
        </CustomPaper>
    );
}