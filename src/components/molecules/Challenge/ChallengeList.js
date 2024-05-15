import React from 'react';
import ChallengeCard from './ChallengeCard';
import { Grid } from '@mui/material';

const ChallengeList = () => {
    return (
        <Grid>
            <ChallengeCard />
            <ChallengeCard />
            <ChallengeCard />
            <ChallengeCard />
        </Grid>
    );
};

export default ChallengeList;