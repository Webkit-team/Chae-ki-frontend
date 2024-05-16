import { Button, TextField } from '@mui/material';
import React from 'react';
import SearchIcon from '@mui/icons-material/Search';

const Search = () => {
    return (
        <>
            <TextField placeholder="도서명, 저자명으로 검색합니다." sx={{
                "& .MuiInputBase-root": {
                    width: '260px',
                    height: "40px"
                },
                "& .MuiInputBase-input": {
                    maxWidth: '0px',
                    height: "20px",
                    fontSize: "14px"
                },
            }}>
            </TextField>
            <Button variant="dark" sx={{ position: 'relative', top: '0', left: '0', fontSize: '15px', borderRadius:'50px', px:0  }}>
                <SearchIcon sx={{ fontSize: '25px', px:0 }} />
            </Button>
        </>
    );
};

export default Search;