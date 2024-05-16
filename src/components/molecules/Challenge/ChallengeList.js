import React from 'react';
import ChallengeCard from './ChallengeCard';
import { Box, Grid, Pagination } from '@mui/material';

const ChallengeList = () => {
    return (
        <>
            <Grid>
                <ChallengeCard />
                <ChallengeCard />
                <ChallengeCard />
                <ChallengeCard />
            </Grid>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', pb:5 }}>
                <Pagination count={10} />
            </Box>
        </>
    );
};

export default ChallengeList;