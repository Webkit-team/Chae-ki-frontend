import { Box, Paper, Tab, Tabs, styled, tabClasses, tabsClasses } from '@mui/material';
import React from 'react';

const chaekiList = [
    {

    },
    {

    },
    {

    },
]



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

const ChaekiToday = () => {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(value === newValue ? false : newValue);
        console.log(value);
    };
    return (
        <>
            <Box sx={{ maxWidth: { xs: 150, sm: 650 }, bgcolor: 'background.paper', pr: 5 }}>
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
                    <TabItem label="1주" />
                    <TabItem label="2주" />
                    <TabItem label="3주" />
                </Tabs>
                <Paper>
                    채키투데이
                </Paper>
            </Box>
        </>
    );
};

export default ChaekiToday;