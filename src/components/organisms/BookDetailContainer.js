import { Box, Divider } from "@mui/material";
import FavoriteIcon from '@mui/icons-material/Favorite';
import { SubTitle, MainText, Text2, Text3 } from "../atoms/Text";

import bookExImg1 from "../../assets/book1.png"
import bookExImg2 from "../../assets/book2.png"

const BookDetailContainer = () => {

    const bookDetailList = [
        {
            id: 100,
            name: "매스커레이드 호텔",
            image_url: bookExImg1,
            description: `히가시노 게이고의 작가 생활 25주년을 기념하는 특별한 작품이다. 히가시노 게이고는 1985년 '방과 후'로 제31회 에도가와 란포상을 수상하면서 데뷔한 이래 장장 25년 이상을 전업 작가로 살아왔다. 지난해 2011년 일본에서 출간된 '히가시노 게이고 공식 가이드'에 의하면 지금껏 발표한 작품 수가 무려 77편에 이른다.
            히가시노 게이고가 가장 아끼는 캐릭터는 '갈릴레오 시리즈'의 유가와 마나부 교수와 '가가 형사 시리즈'의 주인공 가가 교이치로다. 이들은 더 이상 말이 필요 없을 만큼 유명한 탐정 캐릭터이며 그의 추리 세계를 지탱하는 버팀목이나 마찬가지다. 이번 '매스커레이드 호텔'에서 새롭게 등장한 닛타 고스케 형사는 세 번째 캐릭터인 셈이다.`,
            writer: "히가시노 게이고",
            translator: "양윤옥",
            publisher: "현대문학",
            like_count: 10,
            publish_date: "2020-01-23",
            category: "소설",
            price: "16,180",
            shop_url: "www.naver.com"
        },
        {
            id: 101,
            name: "기린의 날개",
            image_url: bookExImg2,
            description: `히가시노 게이고의 작가 생활 25주년을 기념하는 특별한 작품이다. 히가시노 게이고는 1985년 '방과 후'로 제31회 에도가와 란포상을 수상하면서 데뷔한 이래 장장 25년 이상을 전업 작가로 살아왔다. 지난해 2011년 일본에서 출간된 '히가시노 게이고 공식 가이드'에 의하면 지금껏 발표한 작품 수가 무려 77편에 이른다.
            히가시노 게이고가 가장 아끼는 캐릭터는 '갈릴레오 시리즈'의 유가와 마나부 교수와 '가가 형사 시리즈'의 주인공 가가 교이치로다. 이들은 더 이상 말이 필요 없을 만큼 유명한 탐정 캐릭터이며 그의 추리 세계를 지탱하는 버팀목이나 마찬가지다. 이번 '매스커레이드 호텔'에서 새롭게 등장한 닛타 고스케 형사는 세 번째 캐릭터인 셈이다.`,
            writer: "히가시노 게이고",
            translator: "양윤옥",
            publisher: "현대문학",
            like_count: 10,
            publish_date: "2020-01-23",
            category: "소설",
            price: "16,180",
            shop_url: "www.naver.com"
        },
        {
            id: 102,
            name: "봉제인형 살인 사건",
            image_url: bookExImg1,
            description: `히가시노 게이고의 작가 생활 25주년을 기념하는 특별한 작품이다. 히가시노 게이고는 1985년 '방과 후'로 제31회 에도가와 란포상을 수상하면서 데뷔한 이래 장장 25년 이상을 전업 작가로 살아왔다. 지난해 2011년 일본에서 출간된 '히가시노 게이고 공식 가이드'에 의하면 지금껏 발표한 작품 수가 무려 77편에 이른다.
            히가시노 게이고가 가장 아끼는 캐릭터는 '갈릴레오 시리즈'의 유가와 마나부 교수와 '가가 형사 시리즈'의 주인공 가가 교이치로다. 이들은 더 이상 말이 필요 없을 만큼 유명한 탐정 캐릭터이며 그의 추리 세계를 지탱하는 버팀목이나 마찬가지다. 이번 '매스커레이드 호텔'에서 새롭게 등장한 닛타 고스케 형사는 세 번째 캐릭터인 셈이다.
            히가시노 게이고의 작가 생활 25주년을 기념하는 특별한 작품이다. 히가시노 게이고는 1985년 '방과 후'로 제31회 에도가와 란포상을 수상하면서 데뷔한 이래 장장 25년 이상을 전업 작가로 살아왔다. 지난해 2011년 일본에서 출간된 '히가시노 게이고 공식 가이드'에 의하면 지금껏 발표한 작품 수가 무려 77편에 이른다.
            히가시노 게이고가 가장 아끼는 캐릭터는 '갈릴레오 시리즈'의 유가와 마나부 교수와 '가가 형사 시리즈'의 주인공 가가 교이치로다. 이들은 더 이상 말이 필요 없을 만큼 유명한 탐정 캐릭터이며 그의 추리 세계를 지탱하는 버팀목이나 마찬가지다. 이번 '매스커레이드 호텔'에서 새롭게 등장한 닛타 고스케 형사는 세 번째 캐릭터인 셈이다.`,
            writer: "히가시노 게이고",
            translator: "양윤옥",
            publisher: "현대문학",
            like_count: 10,
            publish_date: "2020-01-23",
            category: "소설",
            price: "16,180",
            shop_url: "www.naver.com"
        },
        {
            id: 103,
            name: "용의자 x의 헌신",
            image_url: bookExImg2,
            description: `히가시노 게이고의 작가 생활 25주년을 기념하는 특별한 작품이다. 히가시노 게이고는 1985년 '방과 후'로 제31회 에도가와 란포상을 수상하면서 데뷔한 이래 장장 25년 이상을 전업 작가로 살아왔다. 지난해 2011년 일본에서 출간된 '히가시노 게이고 공식 가이드'에 의하면 지금껏 발표한 작품 수가 무려 77편에 이른다.
            히가시노 게이고가 가장 아끼는 캐릭터는 '갈릴레오 시리즈'의 유가와 마나부 교수와 '가가 형사 시리즈'의 주인공 가가 교이치로다. 이들은 더 이상 말이 필요 없을 만큼 유명한 탐정 캐릭터이며 그의 추리 세계를 지탱하는 버팀목이나 마찬가지다. 이번 '매스커레이드 호텔'에서 새롭게 등장한 닛타 고스케 형사는 세 번째 캐릭터인 셈이다.`,
            writer: "히가시노 게이고",
            translator: "양윤옥",
            publisher: "현대문학",
            like_count: 10,
            publish_date: "2020-01-23",
            category: "소설",
            price: "16,180",
            shop_url: "www.naver.com"
        },
    ]



    return (
        <>
            <SubTitle>도서 상세 조회</SubTitle>

            <Box sx={{ display: "flex", width: "100%", justifyContent: "center", pt: 5 }}>
                <Box sx={{ width: "40%", pr: 5 }}>
                    <Box sx={{display:"flex"}}>
                        <Box sx={{display:"flex", width:"50%", justifyContent:"right", pr:2}}>
                            <FavoriteIcon sx={{ fontSize: 30, pr:0.5 }} />
                            <Text2>10</Text2>
                        </Box>

                        <Box
                            component="img"
                            sx={{
                                width: 250,
                                height: 350,
                                objectFit: "cover"
                            }}
                            src={bookExImg1}
                            alt="이미지"
                        />
                    </Box>
                    
                    <Box sx={{ display: "flex", flexDirection: "column", textAlign: "right" }}>
                        <Box sx={{ pt: 3.5, height: 40 }}>
                            <Text3>저자</Text3>
                        </Box>
                        <Box sx={{ height: 40 }}>
                            <Text3>옮긴이</Text3>
                        </Box>
                        <Box sx={{ height: 40 }}>
                            <Text3>출판사</Text3>
                        </Box>
                        <Box sx={{ height: 40 }}>
                            <Text3>출간일</Text3>
                        </Box>
                        <Box sx={{ height: 40 }}>
                            <Text3>분야</Text3>
                        </Box>
                        <Box sx={{ height: 58 }}>
                            <Text3>도서 가격</Text3>
                        </Box>
                        <Box sx={{ height: 40 }}>
                            <Text3>도서 구매 링크</Text3>
                        </Box>
                    </Box>

                </Box>


                <Box sx={{ display: "flex", width: "60%" }}>
                    <Box sx={{ width: "100%" }}>
                        <Divider width="100%" sx={{ border: "solid 1px", mb: 1 }}></Divider>

                        <Box sx={{ display:"flex", height: 80 }}>
                            

                            <Box>
                                <Text2>매스커레이드 호텔</Text2>
                            </Box>
                        </Box>

                        <Divider width="100%" sx={{ border: "solid 1px", mt: 1, mb: 1 }}></Divider>

                        <Box sx={{ height: 235, overflowY: "auto" }}>
                            <MainText>히가시노 게이고의 작가 생활 25주년을 기념하는 특별한 작품이다. 히가시노 게이고는 1985년 '방과 후'로 제31회 에도가와 란포상을 수상하면서 데뷔한 이래 장장 25년 이상을 전업 작가로 살아왔다. 지난해 2011년 일본에서 출간된 '히가시노 게이고 공식 가이드'에 의하면 지금껏 발표한 작품 수가 무려 77편에 이른다.
                                히가시노 게이고가 가장 아끼는 캐릭터는 '갈릴레오 시리즈'의 유가와 마나부 교수와 '가가 형사 시리즈'의 주인공 가가 교이치로다. 이들은 더 이상 말이 필요 없을 만큼 유명한 탐정 캐릭터이며 그의 추리 세계를 지탱하는 버팀목이나 마찬가지다. 이번 '매스커레이드 호텔'에서 새롭게 등장한 닛타 고스케 형사는 세 번째 캐릭터인 셈이다.</MainText>
                        </Box>

                        <Divider width="100%" sx={{ border: "solid 1px", mt: 1, mb: 1 }}></Divider>

                        <Box sx={{ pt: 2.5, height: 40 }}>
                            <MainText>히가시노 게이고</MainText>
                        </Box>

                        <Box sx={{ height: 40 }}>
                            <MainText>양윤옥</MainText>
                        </Box>

                        <Box sx={{ height: 40 }}>
                            <MainText>현대문학</MainText>
                        </Box>

                        <Box sx={{ height: 40 }}>
                            <MainText>20.01.23</MainText>
                        </Box>

                        <Box sx={{ height: 40 }}>
                            <MainText>소설</MainText>
                        </Box>

                        <Box sx={{ height: 40 }}>
                            <MainText>16,180</MainText>
                        </Box>

                        <Divider width="100%" sx={{ border: "solid 1px", mt: 1, mb: 1 }}></Divider>

                        <Box sx={{ height: 40 }}>
                            <MainText>www.naver.com</MainText>
                        </Box>
                    </Box>
                </Box>

            </Box>
        </>)
};

export default BookDetailContainer;