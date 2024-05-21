import { Box, Divider } from "@mui/material";
import FavoriteIcon from '@mui/icons-material/Favorite';
import { SubTitle, MainText, Text2, Text3, Text5 } from "../atoms/Text";

import bookExImg1 from "../../assets/book1.png"
import bookExImg2 from "../../assets/book2.png"
import { Link, useParams } from "react-router-dom";

const bookDetailList = [
    {
        id: "100",
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
        shop_url: "https://www.aladin.co.kr/shop/wproduct.aspx?ItemId=18491101"
    },
    {
        id: "101",
        name: "기린의 날개",
        image_url: bookExImg2,
        description: `히가시노 게이고 소설. '가가 형사 시리즈' 아홉 번째 작품이다. 일본에서는 영화로 만들어져 공전의 히트를 기록했다. 가족애를 그린 감동적인 휴먼스토리에 수많은 일본인들이 눈물을 흘리며 환호했다. 작가 자신도 가족애를 그린 이 작품을 '가가 형사 시리즈' 중 최고의 걸작으로 꼽는다고 밝힌 바 있다.
        어느 늦가을 밤, 도쿄 한복판에 있는 니혼바시 다리에서 중년의 남자가 가슴을 칼에 찔린 채 경찰에게 발견된다. 사건 현장은 다리에서 한 블록 떨어진 지하도. 그곳에서 칼에 찔린 남자는 피를 흘리며 혼신의 힘으로 다리까지 걸어와 다리 중앙에 있는 기린 조각상을 향해 기도하는 자세로 쓰러진 것. 그는 병원으로 후송되지만 이내 숨지고 만다.
        그로부터 두 시간 후, 사건 현장 인근 공원에서 한 청년이 경찰의 불심 검문을 피해 달아나다 트럭에 치여 의식불명이 된다. 청년의 소지품에서 사망한 남자의 운전면허증과 지갑 등이 발견되고, 경찰은 청년을 살인 사건의 용의자로 지목한다.`,
        writer: "히가시노 게이고",
        translator: "김난주",
        publisher: "재인",
        like_count: 5,
        publish_date: "2025-01-25",
        category: "소설",
        price: "16,800",
        shop_url: "https://www.aladin.co.kr/shop/wproduct.aspx?ItemId=101477574"
    },
    {
        id: "302",
        name: "삶이 흔들릴때 뇌과학을 읽습니다",
        image_url: "https://image.aladin.co.kr/product/33853/72/cover200/8962632721_1.jpg",
        description: `‘뇌과학’이라고 하면 어떤 느낌이 드는가? 비밀에 둘러싸인 뇌에 대한 궁금증이 생기기도 하지만 동시에 어렵고 거부감이 들기도 할 것이다. 그런데 이 뇌 이야기로 일본을 비롯한 아시아 전역에 뇌과학 열풍을 일으킨 사람이 있다. 바로 전세계가 주목하는 젊은 뇌과학자이자 도쿄대 교수인 이케가야 유지.
        그가 쓴 이 책 『삶이 흔들릴 때 뇌과학을 읽습니다』는 "뇌과학을 알려주는 책은 많지만 이토록 실용적인 책은 처음이다"라는 평가를 받으며 일본은 물론이고 한국, 중국 등 주요 서점에서 몇 달간 종합 베스트셀러 1위를 차지하며 큰 반향을 일으켰다. 그렇다면 그가 말하는 뇌과학은 무엇이 다른 걸까. 이케가야 유지는 뇌를 설명하기 위해 ‘마음’에서부터 이야기를 시작한다.`,
        writer: "이케가야 유지",
        translator: "김준기",
        publisher: "힉스",
        like_count: 7,
        publish_date: "2022-02-22",
        category: "인문학",
        price: "18,000",
        shop_url: "https://www.aladin.co.kr/shop/wproduct.aspx?ItemId=336868391"
    },
    {
        id: "1",
        name: "나를 소모하지 않는 현명한 태도에 관하여",
        image_url: "https://image.aladin.co.kr/product/33562/77/cover200/k882939888_1.jpg",
        description: `더 성공해야 하고, 더 노력해야 하고, 더 욕망해야 하고, 더 보여줘야 한다는 강박이 난무하는 시대다. 그러나 모두가 자기를 내세우고 드러내느라 시끄러운 세상에서는 역설적으로 절제된 말과 행동, 고요함과 평온함이 더 절실히 그리워지고, 더 강력하게 다가오기 마련이다.
        『나를 소모하지 않는 현명한 태도에 관하여』는 모든 것이 과하게 요구되고, 요란하게 소비되는 시대에 ‘더 현명한 삶의 방식’은 무엇인지를 통찰한 책이다. 독일의 언론인이자 베스트셀러 작가이며 문학과 커뮤니케이션 과학, 심리학 등을 두루 공부한 마티아스 뇔케 박사는 특유의 재치와 명쾌함이 돋이는 글쓰기로 ‘보여주기 위해 극대화하는 삶이 아닌 조용히 나를 지키는 삶’으로 독자들을 안내한다.`,
        writer: "마티아스 뇔케",
        translator: "이미옥",
        publisher: "퍼스트펭귄",
        like_count: 57,
        publish_date: "2011-01-11",
        category: "인문학",
        price: "17,800",
        shop_url: "https://www.aladin.co.kr/shop/wproduct.aspx?ItemId=335627754"
    },
]
const BookDetailContainer = () => {

    const { id } = useParams();

    const bookDetail = bookDetailList.find(bookDetail => bookDetail.id === id);

    if (!bookDetail) {
        return <div>존재하지 않는 도서입니다.</div>
    }


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
                            src={bookDetail.image_url}
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
                            <Text2>{bookDetail.name}</Text2>
                        </Box>

                        <Divider width="100%" sx={{ border: "solid 1px", mt: 1, mb: 1 }}></Divider>

                        <Box sx={{ height: 235, overflowY: "auto" }}>
                            <MainText>{bookDetail.description}</MainText>
                        </Box>

                        <Divider width="100%" sx={{ border: "solid 1px", mt: 1, mb: 1 }}></Divider>

                        <Box sx={{ pt: 2.5, height: 40 }}>
                            <MainText>{bookDetail.writer}</MainText>
                        </Box>

                        <Box sx={{ height: 40 }}>
                            <MainText>{bookDetail.translator}</MainText>
                        </Box>

                        <Box sx={{ height: 40 }}>
                            <MainText>{bookDetail.publisher}</MainText>
                        </Box>

                        <Box sx={{ height: 40 }}>
                            <MainText>{bookDetail.publish_date}</MainText>
                        </Box>

                        <Box sx={{ height: 40 }}>
                            <MainText>{bookDetail.category}</MainText>
                        </Box>

                        <Box sx={{ height: 40 }}>
                            <MainText>{bookDetail.price}</MainText>
                        </Box>

                        <Divider width="100%" sx={{ border: "solid 1px", mt: 1, mb: 1 }}></Divider>

                        <Box sx={{ pt:0.5, height: 40 }}>
                            <Link to={bookDetail.shop_url}><Text5>바로가기(알라딘)</Text5></Link>
                        </Box>
                    </Box>
                </Box>

            </Box>
        </>)
};

export default BookDetailContainer;