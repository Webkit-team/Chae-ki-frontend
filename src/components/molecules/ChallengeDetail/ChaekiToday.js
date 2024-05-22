import { Box, Tabs, styled, tabsClasses } from '@mui/material';
import { CustomCard, CustomComment } from './CustomCard';
import CustomTextField from '../../atoms/CustomTextField';
import CustomButton from '../../atoms/CustomButton';
import { Text3 } from '../../atoms/Text';
import * as React from 'react';
import Tab, { tabClasses } from '@mui/material/Tab';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { useCookies } from 'react-cookie';


const StyledBox = styled(Box)({
    maxWidth: '720px',
    maxHeight: '420px',
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
    const [value, setValue] = useState(0);
    const { id } = useParams();
    const [users, setUsers] = useState([]);
    const [comments, setComments] = useState([]);
    const [cookies] = useCookies(["user"]);
    const [commentContent, setCommentContent] = useState('');

    const fetchData = async (week) => {
        try {
            const response = await axios.get(`http://ec2-13-209-50-125.ap-northeast-2.compute.amazonaws.com:8080/challenges/${id}/week/${week}`);
            console.log(response.data.comments);
            setUsers(response.data.users);
            setComments(response.data.comments);

        } catch (error) {
            console.error("요청 중 오류가 발생했습니다:", error);
        }
    };

    const postComment = async (content) => {
        try {
            const token = cookies.user ? cookies.user.jwt : null;
            const uno = cookies.user ? cookies.user.uno : null;
            const response = await axios.post(
                `http://localhost:8080/comments/users/${uno}/challenges/${id}`,
                { content }, // 바디에 댓글 내용을 넣습니다.
                {
                    headers: {
                        'Authorization': `Bearer ${token}`, // 헤더에 인증 정보를 넣습니다.
                    },
                }
            );
            console.log('댓글 작성 성공:', response.data);
            // 성공 후 필요한 로직을 추가할 수 있습니다. 예를 들어 댓글 목록을 새로고침하는 등의 작업이 있을 수 있습니다.
        } catch (error) {
            console.error('댓글 작성 중 오류가 발생했습니다:', error);
        }
    };

    useEffect(() => {
        fetchData(1);
    }, []);

    useEffect(() => {
        fetchData(value + 1);
    }, [value]);

    const handleChange = (event, newValue) => {
        setValue(newValue); 
    }

    const handlePostComment = () => {
        postComment(commentContent);
        setCommentContent('');
    };

    return (
        <Box sx={{ display: 'flex', width: '100%', justifyContent: 'space-between' }}>
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
                    <TabItem label="4주" />
                </Tabs>
                {users.length > 0 && (
                    <StyledBox sx={{ width: '110%', height: 'auto', mb: 3 }}>
                        {users.map((user) => (
                            <CustomCard key={user.userNo} user={user} uno={cookies.user.uno} />
                        ))}
                    </StyledBox>
                )}
            </Box>
            <Box sx={{
                width: '290px',
                backgroundColor: '#D9D9D9',
                borderRadius: '15px',
                p: 1,
                m: 1,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                height: '480px'
            }}>
                <Text3>댓글창</Text3>
                {comments.length > 0 && (
                    <StyledBox sx={{
                        width: '100%',
                        borderRadius: '20px',
                        flexGrow: 1,
                        overflowY: 'auto'
                    }}>
                        {comments.map((comment) => (
                            <CustomComment key={comment.commentNo} comment={comment} uno={cookies.user.uno} />
                        ))}
                    </StyledBox>
                )}
                <Box sx={{
                    display: 'flex',
                    alignItems: 'center',
                    mb: 2,
                    width: '100%',
                    backgroundColor: '#FFFFFF'
                }}>
                    <CustomTextField
                        sx={{ flexGrow: 1 }}
                        placeholder="댓글을 입력하세요..."
                        value={commentContent}
                        onChange={(e) => setCommentContent(e.target.value)}
                    />
                    <CustomButton variant="contained" onClick={handlePostComment}>입력</CustomButton>
                </Box>
            </Box>

        </Box>
    );
};

export default ChaekiToday;
