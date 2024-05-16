import React, { useState, useEffect } from 'react';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider, MobileTimePicker } from '@mui/x-date-pickers';
import dayjs from 'dayjs';
import { Box } from '@mui/material';
import { Text1 } from '../../atoms/Text';
import CustomButton from '../../atoms/CustomButton';

const ChaekiTime = () => {
    const [endTime, setEndTime] = useState(dayjs());
    const [timeLeft, setTimeLeft] = useState('');
    const [timerActive, setTimerActive] = useState(false); // 타이머 활성화 상태

    // 남은 시간을 계산하고 업데이트하는 함수
    const updateTimeLeft = () => {
        const now = dayjs();
        const difference = endTime.diff(now);

        if (difference > 0) {
            const minutes = Math.floor(difference / (1000 * 60));
            const seconds = Math.floor((difference / 1000) % 60);
            setTimeLeft(`${minutes}:${seconds < 10 ? `0${seconds}` : seconds}`);
        } else {
            setTimeLeft('00:00');
        }
    };

    useEffect(() => {
        if (timerActive) {
            const timer = setTimeout(() => {
                updateTimeLeft();
            }, 1000);
            return () => clearTimeout(timer);
        } else {
            updateTimeLeft();
        }
    }, [endTime, timerActive]);
    

    const handleClick = (min) => () => {
        setEndTime((prevEndTime) => {
            const newEndTime = prevEndTime.add(min, 'minute');
            if (!timerActive) {
                updateTimeLeft();
            }
            return newEndTime;
        });
    };

    const startTimer = () => {
        setTimerActive(true);
    };

    const pauseTimer = () => {
        setTimerActive(false);
    };

    const resetTimer = () => {
        setTimerActive(false);
        setTimeLeft('');
        setEndTime(dayjs());
        updateTimeLeft();
    };

    return (
        <Box sx={{ p: 2, display: 'flex' }}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <Box sx={{width:'500px', height:'200px', backgroundColor:'grey'}}>
                        <Text1 sx={{ fontFamily: 'DS-DIGIB', fontSize: '100px' }}>{timeLeft}</Text1>
                    </Box>
                    <Box>
                        <CustomButton sx={{ border: 'solid 1px black' }} onClick={handleClick(10)}>+10</CustomButton>
                        <CustomButton sx={{ border: 'solid 1px black' }} onClick={handleClick(30)}>+30</CustomButton>
                        <CustomButton sx={{ border: 'solid 1px black' }} onClick={handleClick(60)}>+60</CustomButton>
                    </Box>
                </Box>
                <Box>
                    <MobileTimePicker
                        label="종료 시간"
                        value={endTime}
                        onChange={(newValue) => {
                            setEndTime(newValue);
                            updateTimeLeft();
                        }}
                    />
                    <Box>
                        <CustomButton sx={{ border: 'solid 1px black' }} onClick={startTimer}>시작</CustomButton>
                        <CustomButton sx={{ border: 'solid 1px black' }} onClick={pauseTimer}>일시중지</CustomButton>
                        <CustomButton sx={{ border: 'solid 1px black' }} onClick={resetTimer}>초기화</CustomButton>
                    </Box>
                </Box>
            </LocalizationProvider>
        </Box>
    );
}
export default ChaekiTime;
