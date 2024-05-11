import React from 'react';
import { Button } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

const CustomButton = ({ children, to, sx, ...props }) => {
  return (
    <Button
      component={RouterLink}
      to={to}
      sx={{
        backgroundColor: '#FFFFFF',
        borderRadius: 0,
        '&:hover': {
          backgroundColor: '#CECECE',
          borderColor: 'black',
        },
        margin: '5px',
        borderColor: 'black',
        fontFamily: 'NanumBarunGothicLight',
        ...sx,
      }}
      {...props}
    >
      {children}
    </Button>
  );
};

export default CustomButton;

