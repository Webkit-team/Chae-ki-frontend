import { Button, TextField } from '@mui/material';
import React, { useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import axios from 'axios';

const Search = ({ onDataFetched, status }) => {
    const [searchQuery, setSearchQuery] = useState("");

    const handleSearch = async () => {
        try {
            const response = await axios.get(`http://ec2-13-209-50-125.ap-northeast-2.compute.amazonaws.com:8080/challenges?status=${status}&searchQuery=${searchQuery}`);
            console.log(response.data.content);
            onDataFetched(response.data.content);
        } catch (error) {
            console.error('Search error:', error);
        }
    };

    return (
        <>
            <TextField
                placeholder="도서명으로 검색합니다."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                sx={{
                    "& .MuiInputBase-root": {
                        width: '260px',
                        height: "40px"
                    },
                    "& .MuiInputBase-input": {
                        maxWidth: '200px',
                        height: "20px",
                        fontSize: "14px"
                    },
                }}
            />
            <Button variant="dark" onClick={handleSearch} sx={{ position: 'relative', top: '0', left: '0', fontSize: '15px', borderRadius:'50px', px:0  }}>
                <SearchIcon sx={{ fontSize: '25px', px:0 }} />
            </Button>
        </>
    );
};

export default Search;
