import { Box, Tabs, styled, tabsClasses } from '@mui/material';
import { dummyData } from './dummyData';
import { CustomCard, CustomComment } from './CustomCard';
import CustomTextField from '../../atoms/CustomTextField';
import CustomButton from '../../atoms/CustomButton';
import { Text3 } from '../../atoms/Text';
import * as React from 'react';
import Tab, { tabClasses } from '@mui/material/Tab';

const StyledBox = styled(Box)({
    maxWidth: '720px',
    maxHeight: '400px',
    bgcolor: 'background.paper',
    pr: 5,
    my: 1,
    overflowX: 'hidden',
    overflowY: 'scroll',
    '&::-webkit-scrollbar': {
        width: '10px',
    },
    '&::-webkit-scrollbar-thumb': {
        backgroundColor: '#2f3542',
        borderRadius: '7px',
    },
    '&::-webkit-scrollbar-track': {
        backgroundColor: 'rgb(233, 233, 233)',
        borderRadius: '7px',
        boxShadow: 'inset 0px 0px 5px white',
    },
});

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
        <Box sx={{ display: 'flex', width: '100vw' }}>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <Tabs
                    value={value}
                    onChange={handleChange}
                    variant="scrollable"
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
                <StyledBox sx={{ width: '100%' }}>
                    {dummyData.users.map((user) => (
                        <CustomCard key={user.id} user={user} />
                    ))}
                </StyledBox>
            </Box>
            <Box sx={{ width: '290px', backgroundColor: '#D9D9D9', borderRadius: '15px', p: 1, m: 1 }}>
                <Text3>댓글창</Text3>
                <StyledBox sx={{ width: '100%', borderRadius: '20px' }}>
                    {dummyData.users.map((user) => (
                        <CustomComment key={user.id} user={user} />
                    ))}
                </StyledBox>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2, width: '100%', backgroundColor: '#FFFFFF' }}>
                    <CustomTextField sx={{ flexGrow: 1 }} placeholder="댓글을 입력하세요..."></CustomTextField>
                    <CustomButton variant="contained">입력</CustomButton>
                </Box>
            </Box>
        </Box>
    );
};

export default ChaekiToday;
