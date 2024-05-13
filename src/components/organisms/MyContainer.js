import ChallengeList from "../molecules/ChallengeList";
import { Box, Container, Avatar, Typography, Button, Divider } from "@mui/material";
import FlagIcon from '@mui/icons-material/Flag';
import CreateIcon from '@mui/icons-material/Create';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import FavoriteIcon from '@mui/icons-material/Favorite';
import BookmarkIcon from '@mui/icons-material/Bookmark';

import { Link } from "react-router-dom";
import { useState } from "react";
import CustomButton from "../atoms/CustomButton";
import { SubTitle } from "../atoms/Text";


const MyContainer = () => {

    const [showActivity, setShowActivity] = useState(null);

    const handleIconClick = (activity) => {
        setShowActivity(showActivity === activity ? null : activity);
    };

    const getActivityComponent = (activity) => {
        switch (activity) {
            case "challenge":
                return <ChallengeList />;
            case "today":
                return <p>채키 투데이 내용입니다.</p>
            case "readTime":
                return <p>누적 독서 시간 ~~</p>
            case "review":
                return <p>도서 후기 리스트입니다.</p>
            case "like":
                return <p>찜 도서 목록입니다.</p>
            case "scrap":
                return <p>스크랩 도서 후기 목록입니다.</p>
            default:
                return null;
        }
    }

    return(<div className="wrapper">
        <SubTitle>마이 페이지</SubTitle>

        <Container sx={{width: 1000}}>
            <Container 
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                }}
            >
                
                {/* 사용자 영역 */}
                <Box
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        maxWidth: 700,
                        pb: 3
                    }}
                >
                    <Avatar
                    alt="프로필 사진"
                    src={"../../assets/default.png"} // 사용자가 사진을 선택하면 그 사진을, 아니면 기본 사진을 표시
                    sx={{ width: 100, height: 100, border: "1px solid", borderRadius: "50%" }}
                    />

                    <Box sx={{ fontSize: "16px", width:"200px", textAlign:"center"}}>
                        <Typography sx={{ pb:3 }}>"oo"의 서재</Typography>
                        <Typography>나무 등급</Typography>
                    </Box>

                    <Box sx={{ width:"300px", textAlign:"center"}}>
                        <CustomButton variant="contained" sx={{border:"1px solid", borderRadius: 1}}>보유 쿠폰</CustomButton>
                        <CustomButton variant="contained">쿠폰 받기</CustomButton>
                    </Box>

                    
                </Box>
                
                <Divider width="100%" sx={{border:"solid 1px"}}/>

                {/* 아이콘 영역 */}
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        width: "90%",
                        pt: 3, pb: 3

                    }}
                >

                    <Box sx={{ textAlign:"center", cursor:"pointer", lineHeight:2}} onClick={() => handleIconClick("challenge")}>
                        <FlagIcon sx={{ fontSize: 50 }}/>
                        <Typography>챌린지</Typography>
                        <Typography>0</Typography>
                    </Box>

                    <Box sx={{ textAlign:"center", cursor:"pointer"}} onClick={() => handleIconClick("today")}>
                        <CreateIcon sx={{ fontSize: 50 }}/>
                        <Typography>채키 투데이</Typography>
                    </Box>

                    <Box sx={{ textAlign:"center", cursor:"pointer"}} onClick={() => handleIconClick("readTime")}>
                        <WatchLaterIcon sx={{ fontSize: 50 }}/>
                        <Typography>독서 시간</Typography>
                    </Box>

                    <Box sx={{ textAlign:"center", cursor:"pointer"}} onClick={() => handleIconClick("review")}>
                        <AutoStoriesIcon sx={{ fontSize: 50 }}/>
                        <Typography>도서 후기</Typography>
                    </Box>

                    <Box sx={{ textAlign:"center", cursor:"pointer"}} onClick={() => handleIconClick("like")}>
                        <FavoriteIcon sx={{ fontSize: 50 }}/>
                        <Typography>찜 도서</Typography>
                    </Box>

                    <Box sx={{ textAlign:"center", cursor:"pointer"}} onClick={() => handleIconClick("scrap")}>
                        <BookmarkIcon sx={{ fontSize: 50 }}/>
                        <Typography>스크랩</Typography>
                    </Box>

                </Box>
            
                <Divider width="100%" sx={{border:"solid 1px"}}/>

                {/* 활동 내역 영역 */}
                <Box
                    sx={{
                        pt: 3, pb: 3
                    }}
                >
                    {showActivity && (
                        <Box>
                            {getActivityComponent(showActivity)}
                        </Box>
                    )}


                </Box>

            </Container>

        </Container>
    
    
    </div>)
}

export default MyContainer;