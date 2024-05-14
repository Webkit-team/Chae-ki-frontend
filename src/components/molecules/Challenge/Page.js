import { Box, Pagination } from '@mui/material';
import React from 'react';

const Page = () => {
  return (
    <Box sx={{ display:'flex', alignItems: 'center', justifyContent: 'center' }}>
      <Pagination count={10} />
    </Box>
  );
};

export default Page;