import { Box, Divider } from "@mui/material";
import { SubTitle, MainText, Text2, Text3 } from "../atoms/Text";

import bookExImg from "../../assets/book1.png"

const BookContainer = () => {
    return (<>

        <SubTitle>도서 상세 조회</SubTitle>

        <Box sx={{ display: "flex", width: "100%", justifyContent: "center", pt: 5 }}>
            <Box
                component="img"
                sx={{
                    width: 250,
                    height: 350,
                    objectFit: "cover"
                }}
                src={bookExImg}
                alt="이미지"
            />

            <Box sx={{ display: "flex",  width: "80%"}}>
                <Box sx={{display:"flex", flexDirection:"column", width: "20%", pl:4}}>
                    <Box sx={{height: 96}}>
                        <Text3>도서명</Text3>
                        {/* <Divider orientation="vertical" variant="middle" sx={{ border:"solid 1px" }}/> */}
                    </Box>
                    <Box sx={{ height: 320}}>
                        <Text3>도서설명</Text3>
                    </Box>
                    <Box sx={{ height: 40}}>
                        <Text3>저자</Text3>
                    </Box>
                    <Box sx={{ height: 40}}>
                        <Text3>옮긴이</Text3>
                    </Box>
                    <Box sx={{ height: 40}}>
                        <Text3>출판사</Text3>
                    </Box>
                    <Box sx={{height: 40}}>
                        <Text3>출간일</Text3>
                    </Box>
                    <Box sx={{ height: 40}}>
                        <Text3>분야</Text3>
                    </Box>
                    <Box sx={{height: 58}}>
                        <Text3>도서 가격</Text3>
                    </Box>
                    <Box sx={{height: 40}}>
                        <Text3>도서 구매 링크</Text3>
                    </Box>
                    
                </Box>

                <Box sx={{width: "70%"}}>
                    <Box sx={{height: 80}}>
                        <Text2>매스커레이드 호텔</Text2>
                    </Box>
                    
                    <Divider width="100%" sx={{ border: "solid 1px", mt:1, mb:1 }}></Divider>

                    <Box sx={{height: 300, overflow: "auto"}}>
                        <MainText>
                            히가시노 게이고의 작가 생활 25주년을 기념하는 특별한 작품이다. 히가시노 게이고는 1985년 '방과 후'로 제31회 에도가와 란포상을 수상하면서 데뷔한 이래 장장 25년 이상을 전업 작가로 살아왔다. 지난해 2011년 일본에서 출간된 '히가시노 게이고 공식 가이드'에 의하면 지금껏 발표한 작품 수가 무려 77편에 이른다.
                            히가시노 게이고가 가장 아끼는 캐릭터는 '갈릴레오 시리즈'의 유가와 마나부 교수와 '가가 형사 시리즈'의 주인공 가가 교이치로다. 이들은 더 이상 말이 필요 없을 만큼 유명한 탐정 캐릭터이며 그의 추리 세계를 지탱하는 버팀목이나 마찬가지다. 이번 '매스커레이드 호텔'에서 새롭게 등장한 닛타 고스케 형사는 세 번째 캐릭터인 셈이다.
                        </MainText>
                    </Box>

                    <Divider width="100%" sx={{ border: "solid 1px", mt:1, mb:1}}></Divider>

                    <Box sx={{height: 40}}>
                        <MainText>히가시노 게이고</MainText>
                    </Box>

                    <Box sx={{height: 40}}>
                        <MainText>양윤옥</MainText>
                    </Box>

                    <Box sx={{height: 40}}>
                        <MainText>현대문학</MainText> 
                    </Box>

                    <Box sx={{height: 40}}>
                        <MainText>20.01.23</MainText>
                    </Box>

                    <Box sx={{height: 40}}>
                        <MainText>소설</MainText>
                    </Box>

                    <Box sx={{height: 40}}>
                        <MainText>16,180</MainText>
                    </Box>

                    <Divider width="100%" sx={{ border: "solid 1px", mt:1, mb:1 }}></Divider>

                    <Box sx={{height: 40}}>
                        <MainText>www.naver.com</MainText>
                    </Box>


                </Box>

            </Box>

        </Box>

    </>)
}

export default BookContainer;