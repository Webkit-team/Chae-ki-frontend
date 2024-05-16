import { Typography } from '@mui/material';
import React from 'react';


export const SubTitle = ({children, sx, ...props}) => {
    return (
        <Typography 
        sx={{
            fontFamily:'NanumBarunGothicBold',
            fontWeight: 900,
            fontSize: '32px',
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            pt:5,
            pb:1,
            ...sx
        }}
        {...props}
        >     
        {children}
        </Typography>
    );
};

export const MainText = ({children, sx, ...props}) => {
    return (
        <Typography 
        sx={{
            fontFamily:'NanumBarunGothic',
            fontWeight: 400,
            fontSize: '17px',
            lineHeight: "150%",
            ...sx
        }}
        {...props}
        >
        {children}
        </Typography>
    );
};

export const Text1 = ({children, sx, ...props}) => {
    return (
        <Typography 
        sx={{
            fontFamily:'NanumBarunGothic',
            fontWeight: 900,
            fontSize: '32px',
            ...sx
        }}
        {...props}
        >     
        {children}
        </Typography>
    );
};

export const Text2 = ({children, sx, ...props}) => {
    return (
        <Typography 
        sx={{
            fontFamily:'NanumBarunGothic',
            fontWeight: 900,
            fontSize: '25px',
            ...sx
        }}
        {...props}
        >     
        {children}
        </Typography>
    );
};

export const Text3 = ({children, sx, ...props}) => {
    return (
        <Typography 
        sx={{
            fontFamily:'NanumBarunGothic',
            fontWeight: 900,
            fontSize: '21px',
            ...sx
        }}
        {...props}
        >     
        {children}
        </Typography>
    );
};


export const Text4 = ({children, sx, ...props}) => {
    return (
        <Typography 
        sx={{
            fontFamily:'NanumBarunGothic',
            fontWeight: 100,
            fontSize: '18px',
            ...sx
        }}
        {...props}
        >     
        {children}
        </Typography>
    );
};

export const Text5 = ({children, sx, ...props}) => {
    return (
        <Typography 
        sx={{
            fontFamily:'NanumBarunGothic',
            fontWeight: 100,
            fontSize: '14px',
            ...sx
        }}
        {...props}
        >
        {children}
        </Typography>
    );
};