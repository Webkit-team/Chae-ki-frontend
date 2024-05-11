import { ImageList, ImageListItem } from '@mui/material';
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
    {
        img: testImg,
        title: 'test6'
    },

]

const BookRanking = () => {
    return (
        <>
            <h3>이달의 도서</h3>
            <ImageList sx={{ height: 250 }} gap={40} cols={6} rowHeight={164} >
                {imgList.map((item) => (
                    <ImageListItem key={item.img}>
                        <img
                            src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                            srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                            alt={item.title}
                            loading="lazy"
                        />
                    </ImageListItem>
                ))}
            </ImageList>
        </>
    );
};

export default BookRanking;