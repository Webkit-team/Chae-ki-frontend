import React from 'react';
import ChallengeRanking from '../molecules/Main/ChallengeRanking';
import BookRanking from '../molecules/Main/BookRanking';
import ChaekiToday from '../molecules/Main/ChaekiToday';
import { Box } from '@mui/material';

const MainContainer = () => {

    return (
        <>
            <Box sx={{ position: 'relative' }}>
                <Box 
                    style={{
                        background: 'linear-gradient(180deg,#dce5ed 0%, #ffffff 100% )',
                        transition: 'background 1s ease-in-out', 
                        position: 'absolute', 
                        top: '-40px', 
                        left: '-490px', 
                        width: '100vw', 
                        height: '400px', 
                        zIndex: -1,
                    }} 
                />
                <ChallengeRanking />
            </Box>
            <BookRanking />
            <ChaekiToday />
        </>
    );
}

export default MainContainer;
