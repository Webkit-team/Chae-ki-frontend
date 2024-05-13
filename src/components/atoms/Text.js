import { Typography } from '@mui/material';
import React from 'react';


export const Text1 = ({children, ...props}) => {
    return (
        <Typography 
        sx={{
            fontFamily:'NanumBarunGothic',
            fontWeight: 900,
            fontSize: '32px',
        }}>     
        {children}
        </Typography>
    );
};

export const Text2 = ({children, ...props}) => {
    return (
        <Typography 
        sx={{
            fontFamily:'NanumBarunGothic',
            fontWeight: 900,
            fontSize: '25px',
        }}>     
        {children}
        </Typography>
    );
};

export const Text3 = ({children, ...props}) => {
    return (
        <Typography 
        sx={{
            fontFamily:'NanumBarunGothic',
            fontWeight: 900,
            fontSize: '21px',
        }}>     
        {children}
        </Typography>
    );
};

export const Text4 = ({children, ...props}) => {
    return (
        <Typography 
        sx={{
            fontFamily:'NanumBarunGothic',
            fontWeight: 100,
            fontSize: '18px',
        }}>     
        {children}
        </Typography>
    );
};

export const Text5 = ({children, ...props}) => {
    return (
        <Typography 
        sx={{
            fontFamily:'NanumBarunGothic',
            fontWeight: 100,
            fontSize: '14px',
        }}>     
        {children}
        </Typography>
    );
};