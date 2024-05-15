import * as React from 'react';
import { styled } from "@mui/material/styles";
import Tabs, { tabsClasses } from '@mui/material/Tabs';
import Tab, { tabClasses } from '@mui/material/Tab';
import Box from '@mui/material/Box';

const TabItem = styled(Tab)(({ theme }) => ({
  position: 'relative',
  borderRadius: '30px',
  textAlign: 'center',
  transition: 'all .5s',
  padding: '5px 10px',
  color: '#555555',
  height: 'auto',
  margin: '10px ',
  float: 'none',
  fontSize: '14px',
  fontWeight: '500',
  [theme.breakpoints.up('md')]: {
    minWidth: 100
  },
  [`&.${tabClasses.selected}, &:hover`]: {
    color: '#FFFFFF',
    backgroundColor: '#6BD1DD',
    boxShadow: '0 7px 10px -5px rgba(76, 175, 80, 0.4)'
  },
}));

export const Category = () => {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ maxWidth: { xs: 150, sm: 650 }, bgcolor: 'background.paper', pr:5}}>
            <Tabs
                value={value}
                onChange={handleChange}
                variant="scrollable"
                scrollButtons
                allowScrollButtonsMobile
                aria-label="scrollable force tabs example"
                sx={{
                    [`& .${tabsClasses.indicator}`]: {
                        display: 'none',
                    },
                }}
            >
                <TabItem label="사회과학"/>
                <TabItem label="심리" />
                <TabItem label="자기계발" />
                <TabItem label="인문학" />
                <TabItem label="종교/역학" />
                <TabItem label="역사" />
                <TabItem label="과학" />
                <TabItem label="소설/시/희곡" />
                <TabItem label="경제경영" />
            </Tabs>
        </Box>
    );
}
