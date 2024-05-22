import React, { useState } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, TextField } from '@mui/material';
import axios from 'axios';
import CustomButton from '../../atoms/CustomButton';

function ChaekiTodayModal({time, isEditable}) {
    const [open, setOpen] = useState(false);
    const [pageCount, setPageCount] = useState('');
    const [content, setContent] = useState('');

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleSubmit = async () => {
        try {
            const response = await axios.post('서버 URL', {
                pageCount: pageCount,
                content: content,
                time: time,
            });
            console.log(response.data);
            handleClose();
        } catch (error) {
            console.error('데이터 전송 중 오류 발생:', error);
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
                width:'150px'
            }}>채키 투데이 작성</CustomButton>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>채키 투데이 작성</DialogTitle>
                <DialogContent>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="pageCount"
                        label="오늘 읽은 페이지 수"
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
                    <CustomButton onClick={handleClose} sx={{border:'solid black 1px', color:'#FF0000 !important'}}>취소</CustomButton>
                    <CustomButton onClick={handleSubmit} sx={{border:'solid black 1px', color:'#00A00B !important'}}>전송</CustomButton>
                </DialogActions>
            </Dialog>
        </div>
    );
}

export default ChaekiTodayModal;
