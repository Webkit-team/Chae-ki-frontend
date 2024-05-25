import React, { useState } from 'react';
import { Box, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const MyReadingTime = () => {
    const [selectedValue, setSelectedValue] = useState('');

    const dates = ['2024-05-20', '2024-05-21', '2024-05-22', '2024-05-23', '2024-05-24', '2024-05-25', '2024-05-26'];

    const dataOption1 = [2, 0, 5, 1, 3, 2, 4]; // 소수점을 제거한 데이터
    const dataOption2 = [1, 2.5, 0, 6.5, 8, 0, 5];

    const chartData = {
        labels: dates,
        datasets: [
            {
                label: '독서 시간',
                data: selectedValue === 'option1' ? dataOption1 : dataOption2,
                borderColor: 'rgb(75, 192, 192)',
                backgroundColor: 'rgba(75, 192, 192, 0.5)',
                maxBarThickness: 45, // 막대의 최대 두께를 30으로 설정
            },
        ],
    };

    const options = {
        scales: {
            y: {
                beginAtZero: true,
                max: 10, // y축의 최대 값을 10으로 설정
                ticks: {
                    stepSize: 1, // y축 눈금 간격을 1로 설정
                    callback: function(value) {
                        if (Number.isInteger(value)) {
                            return value; // 정수 값만 표시
                        }
                    }
                }
            }
        }
    };

    const handleChange = (event) => {
        setSelectedValue(event.target.value);
    };

    return (
        <Box>
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">챌린지 선택</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={selectedValue}
                    label="챌린지 선택"
                    onChange={handleChange}
                >
                    <MenuItem value="option1">[WHY] 공부에 관하여</MenuItem>
                    <MenuItem value="option2">나로 살아본다</MenuItem>
                </Select>
            </FormControl>
            <Bar data={chartData} options={options} />
        </Box>
    );
};

export default MyReadingTime;
