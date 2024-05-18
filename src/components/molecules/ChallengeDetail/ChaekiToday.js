import { Box, Button, TextField, styled } from '@mui/material';
import { dummyData } from './dummyData';
import { CustomCard, CustomComment } from './CustomCard';



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







const ChaekiToday = () => {

    return (
        <Box sx={{ display: 'flex' }}>
            <StyledBox sx={{ width: '80vw' }}>
                {dummyData.users.map((user) => (
                    <CustomCard key={user.id} user={user} />
                ))}
            </StyledBox>
            <Box>
                <StyledBox sx={{ width: '19vw', }}>
                    {dummyData.users.map((user) => (
                        <CustomComment key={user.id} user={user} />
                    ))}
                </StyledBox>
                <TextField></TextField>
                <Button></Button>
            </Box>
        </Box>
    );
};

export default ChaekiToday;
