import { Box, ImageList, ImageListItem, styled } from '@mui/material';
import React from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { Text1 } from '../../atoms/Text';

const imgList = [
    {
        img: "https://image.aladin.co.kr/product/33562/77/cover500/k882939888_1.jpg",
        title: '나를 소모하지 않는 현명한 태도에 관하여',
        id: '1',
    },
    {
        img: "https://image.aladin.co.kr/product/33648/90/cover500/k172939414_1.jpg",
        title: '하루 한 장 나의 어휘력을 위한 필사 노트',
        id: '2',
    },
    {
        img: "https://image.aladin.co.kr/product/33857/45/cover500/k482930303_1.jpg",
        title: '어떻게 살 것인가',
        id: '3',
    },
    {
        img: "https://image.aladin.co.kr/product/33626/89/cover500/k662939214_1.jpg",
        title: '일류의 조건',
        id: '4',
    },
    {
        img: "https://image.aladin.co.kr/product/30929/51/cover500/s662930344_1.jpg",
        title: '세이노의 가르침',
        id: '5',
    },
]


const HoverImage = styled('img')({
    transition: 'transform 0.5s ease',
    '&:hover': {
        transform: 'scale(1.2)',
        zIndex: 2,
    },
    margin: 'auto',
    width: '150px',
    border: 'solid 1px #CECECE',
    cursor:'pointer'
});



const BookRanking = () => {
    const navigate = useNavigate();

    const handelClick = (id) => {
        navigate(`/book/${id}`);
    }

    return (
        <Box alignItems="center" sx={{ my: 15 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Text1>이달의 도서</Text1>
            </Box>
            <Box>
                <ImageList sx={{ width: '1000px', height: 'auto', m: 0, overflow: "hidden", zIndex: '1', py:10 }} gap={15} cols={5}>
                    {imgList.map((item, index) => (
                        <ImageListItem key={index} cols={1}>
                            <HoverImage
                                src={item.img}
                                srcSet={item.img}
                                alt={item.title}
                                onClick={() => (handelClick(item.id))}
                            />
                        </ImageListItem>
                    ))}
                </ImageList>
            </Box>
        </Box>
    );
};

export default BookRanking;