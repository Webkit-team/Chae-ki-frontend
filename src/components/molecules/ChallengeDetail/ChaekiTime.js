import React, { useState, useEffect } from 'react';
import { Box } from '@mui/material';
import { Text1 } from '../../atoms/Text';
import CustomButton from '../../atoms/CustomButton';
import CustomTextField from '../../atoms/CustomTextField';
import axios from 'axios';
import ChaekiTodayModal from './ChaekiTodayModal';
import { useParams } from 'react-router-dom';
import { useCookies } from 'react-cookie';


const ChaekiTime = () => {
    const { id } = useParams();
    const [cookies] = useCookies(["user"]);
    const [time, setTime] = useState(0);
    const [timerOn, setTimerOn] = useState(false);
    const [inputTime, setInputTime] = useState('');
    const [isChaekiTodayActive, setIsChaekiTodayActive] = useState(false);
    const [isEditable, setIsEditable] = useState('');
    const [todayNo, setTodayNo] = useState('');

    const uno = cookies.user ? cookies.user.uno : null;
    const token = cookies.user ? cookies.user.jwt : null;

    const checkChaekiToday = async () => {
        try {
            const res = await axios.get(`http://ec2-13-209-50-125.ap-northeast-2.compute.amazonaws.com:8080/today/challenges/${id}/users/${uno}`,
                {
                    headers: {
                        Authorization: token,
                    }
                }
            );
            if (res.data.posted) {  // 채키 타임 작성
                setTodayNo(res.data.todayNo);
                console.log(todayNo);
                setIsEditable(true);
                setIsChaekiTodayActive(true);
            } else {    // 채키 투데이 작성
                setIsEditable(false);
                setIsChaekiTodayActive(true);
            }
        } catch (error) {
            console.error("채키투데이 확인 중 오류 발생:", error);
        }
    };

    useEffect(() => {
        let interval = null;

        if (timerOn) {
            interval = setInterval(() => {
                setTime(prevTime => {
                    if (prevTime - 1 === 0) {
                        checkChaekiToday();
                        setTimerOn(false);
                        setIsChaekiTodayActive(true);
                    }
                    return prevTime - 1;
                });
            }, 1000);
        } else {
            clearInterval(interval);
        }

        return () => clearInterval(interval);
    }, [timerOn, checkChaekiToday]);

    const addTime = (seconds) => {
        if (!timerOn) {
            const newTotalTime = time + seconds;
            const maxSeconds = 10 * 3600;

            if (newTotalTime > maxSeconds) {
                alert('최대 10시간까지만 설정 가능합니다.');
            } else {
                setTime(newTotalTime);
            }
        }
    };

    const handleInputTime = () => {
        if (!timerOn) {
            const minutes = parseInt(inputTime, 10);
            if (isNaN(minutes) || minutes < 0) {
                alert('유효한 시간을 입력하세요.');
                return;
            }
            const totalSeconds = minutes * 60;
            const maxSeconds = 10 * 3600;
            if (totalSeconds > maxSeconds) {
                alert('최대 10시간까지만 설정 가능합니다.');
                return;
            }
            addTime(totalSeconds);
            setInputTime('');
        }
    };

    const formatTime = () => {
        const hours = Math.floor(time / 3600);
        const minutes = Math.floor((time % 3600) / 60);
        const seconds = time % 60;

        const formattedHours = hours < 10 ? `0${hours}` : hours;
        const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
        const formattedSeconds = seconds < 10 ? `0${seconds}` : seconds;

        return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
    };

    return (
        <>
            <Box sx={{ display: 'flex', justifyContent: 'center', pt: 3 }}>
                <Box sx={{ display: 'flex', flexDirection: 'column', width: '250px', height: '100px', p: 2 }}>
                    <Text1 sx={{ fontFamily: 'DS-DIGIB', fontSize: '72px', height: '86px', pb: 2, textAlign: 'center' }}>
                        {formatTime()}
                    </Text1>
                    <Box sx={{ display: 'flex' }}>
                        <CustomButton onClick={() => addTime(6)} sx={{ border: 'solid 1px black', width: '100vw' }} >10분</CustomButton>
                        <CustomButton onClick={() => addTime(1800)} sx={{ border: 'solid 1px black', width: '100vw' }} >30분</CustomButton>
                        <CustomButton onClick={() => addTime(3600)} sx={{ border: 'solid 1px black', width: '100vw' }} >60분</CustomButton>
                    </Box>
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', p: 2, mt: 4 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <CustomTextField
                            value={inputTime}
                            onChange={(e) => setInputTime(e.target.value)}
                            placeholder="분 단위로 입력"
                        />
                        <CustomButton onClick={handleInputTime} sx={{ ml: 2, border: 'solid 1px black', width: '80px', height: '40px' }}>입력</CustomButton>
                    </Box>
                    <Box sx={{ display: 'flex', mt: '20px' }}>
                        <CustomButton
                            onClick={() => {
                                if (time > 0) {
                                    setTimerOn(true);
                                } else {
                                    alert('시간을 설정하세요.');
                                }
                            }}
                            sx={{ border: 'solid 1px black', width: '130px', height: '40px', color: '#00A00B !important' }}
                        >시작</CustomButton>

                        <CustomButton onClick={() => setTimerOn(false)} sx={{ border: 'solid 1px black', width: '130px', height: '40px', color: '#0010A0 !important' }} >일시중지</CustomButton>
                        <CustomButton onClick={() => {
                            const isConfirmed = window.confirm('진짜로 초기화하시겠습니까?');
                            if (isConfirmed) {
                                setTime(0);
                                setTimerOn(false);
                            }
                        }} sx={{ border: 'solid 1px black', width: '130px', height: '40px', color: '#FF0000 !important' }}
                        >초기화</CustomButton>
                    </Box>
                </Box>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'center', my: 4 }}>
                {isChaekiTodayActive && (
                    <ChaekiTodayModal time={time} isEditable={isEditable} todayNo={todayNo}/>
                )}
            </Box>
        </>
    );
};

export default ChaekiTime;
