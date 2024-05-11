import { Box, ImageList, ImageListItem, styled } from '@mui/material';
import React from 'react';

const testImg = "https://placehold.co/150x200"
const imgList = [
    {
        img: testImg,
        title: 'test1'
    },
    {
        img: testImg,
        title: 'test2'
    },
    {
        img: testImg,
        title: 'test3'
    },
    {
        img: testImg,
        title: 'test4'
    },
    {
        img: testImg,
        title: 'test5'
    },
]

const HoverImage = styled('img')({
    transition: 'transform 0.5s ease',
    '&:hover': {
        transform: 'scale(1.2)',
        zIndex: 2,
    },
    position: 'absolute', 
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    margin: 'auto', 
});



const BookRanking = () => {
    return (
        <Box sx={{my:10}}>
            <h2>이달의 도서</h2>
            <ImageList sx={{ width: '70vw', height: 270, overflow: 'hidden', pl:1}} gap={10} cols={5}> 
                {imgList.map((item, index) => (
                    <ImageListItem key={index}>
                        <HoverImage
                            src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                            srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                            alt={item.title}
                        />
                    </ImageListItem>
                ))}
            </ImageList>
        </Box>
    );
};

export default BookRanking;