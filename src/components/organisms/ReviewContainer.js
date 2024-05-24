import { Box } from "@mui/material";
import png02 from '../../assets/png02.png';
import { SubTitle } from "../atoms/Text";

const ReviewContainer = () => {
    return (
        <>
            <SubTitle>도서 후기</SubTitle>
            <Box sx={{ width: '100%', hegiht: '100%' }}>
                <img src={png02} alt="개발 진행중" style={{marginLeft:'27px'}}/>
            </Box>
        </>
    );
}

export default ReviewContainer;