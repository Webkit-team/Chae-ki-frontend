import React, { useState } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, TextField } from '@mui/material';
import axios from 'axios';
import CustomButton from '../../atoms/CustomButton';
import { useParams } from 'react-router-dom';
import { useCookies } from 'react-cookie';

function ChaekiTodayModal({ time, isEditable, todayNo }) {
    const { id } = useParams();
    const [cookies] = useCookies(["user"]);
    const [open, setOpen] = useState(false);
    const [pageCount, setPageCount] = useState('');
    const [content, setContent] = useState('');

    const uno = cookies.user ? cookies.user.uno : null;
    const token = cookies.user ? cookies.user.jwt : null;

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleSubmit = async () => {
        if (isEditable) {
            try {
                const response = await axios.put(`http://ec2-13-209-50-125.ap-northeast-2.compute.amazonaws.com:8080/today/${todayNo}`,
                    {
                        time: time,
                        page: pageCount,
                    },
                    {
                        headers: {
                            Authorization: token,
                        }
                    });
                console.log(response.data);
                handleClose();
            } catch (error) {
                console.error('데이터 전송 중 오류 발생:', error);
            }
        } else {
            try {
                const response = await axios.post(`http://ec2-13-209-50-125.ap-northeast-2.compute.amazonaws.com:8080/today/challenges/${id}/users/${uno}`,
                    {
                        readingPage: pageCount,
                        content: content,
                        readingTime: time,
                    },
                    {
                        headers: {
                            Authorization: token,
                        }
                    });
                console.log(response.data);
                handleClose();
            } catch (error) {
                console.error('데이터 전송 중 오류 발생:', error);
            }
        }
    };

    return (
        <div>
            <CustomButton variant="outlined" onClick={handleClickOpen} sx={{
                backgroundColor: 'black',
                '&:hover': {
                    backgroundColor: '#949494',
                    borderColor: 'black',
                },
                alignSelf: 'flex-end', mt: 'auto',
                color: '#FFFFFF !important',
                width: '150px'
            }}>채키 투데이 작성</CustomButton>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>채키 투데이 작성</DialogTitle>
                <DialogContent>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="pageCount"
                        label="오늘 읽은 마지막 페이지 수"
                        type="number"
                        fullWidth
                        variant="outlined"
                        inputProps={{ max: 9999 }}
                        value={pageCount}
                        onChange={(e) => setPageCount(e.target.value)}
                    />
                    <TextField
                        margin="dense"
                        id="content"
                        disabled={isEditable}
                        label="내용"
                        type="text"
                        fullWidth
                        variant="outlined"
                        value={content}
                        multiline
                        rows={4}
                        onChange={(e) => setContent(e.target.value)}
                    />
                </DialogContent>
                <DialogActions>
                    <CustomButton onClick={handleClose} sx={{ border: 'solid black 1px', color: '#FF0000 !important' }}>취소</CustomButton>
                    <CustomButton onClick={handleSubmit} sx={{ border: 'solid black 1px', color: '#00A00B !important' }}>전송</CustomButton>
                </DialogActions>
            </Dialog>
        </div>
    );
}

export default ChaekiTodayModal;
