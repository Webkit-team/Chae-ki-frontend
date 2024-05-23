import MyChallengeList from "../molecules/MyPage/MyChallengeList";
import MyChaekiTodayList from "../molecules/MyPage/MyChaekiTodayList"
import MyBookList from "../molecules/MyPage/MyBookList";
import { MainText, SubTitle, Text3, Text4, Text5 } from "../atoms/Text";
import defaultImg from "../../assets/defaultProfile.png";
import CustomButton from "../atoms/CustomButton";

import { Box, Container, Avatar, Divider, Tooltip } from "@mui/material";
import FlagIcon from '@mui/icons-material/Flag';
import CreateIcon from '@mui/icons-material/Create';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import FavoriteIcon from '@mui/icons-material/Favorite';
import BookmarkIcon from '@mui/icons-material/Bookmark';

import MyCouponList from "../molecules/MyPage/MyCouponList";

import treeImg from "../../assets/gradeImages/tree4.png";
import forestImg from "../../assets/gradeImages/forest5.png";
import sproutImg from "../../assets/gradeImages/sprout2.png";
import plantImg from "../../assets/gradeImages/plant3.png";
import seedImge from "../../assets/gradeImages/seed1.png";

import axios from "axios";
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from "react";
import { useCookies } from 'react-cookie';


const MyPageContainer = () => {
    const navigate = useNavigate();
    const [cookies, setCookie, removeCookie] = useCookies(["user"]);

    // response.data들
    const [no, setNo] = useState(null);
    const [userImage, setUserImage] = useState(defaultImg);
    const [nickname, setNickname] = useState(null);
    const [totalReadingTime, setTotalReadingTime] = useState(null);
    const [point, setPoint] = useState(null);
    const { grade, gradeImage, num } = determineGrade(point);

    // 나중에 합쳐
    // const [userActData, setUserActData] = useState({
    //     no : null,
    //     userImage : defaultImg,
    //     nickname : null,
    //     totalReadingTime : null,
    //     point : null
    // });

    // 활동 횟수
    const [challengesCount, setChallengesCount] = useState(0);
    const [chaekiTodaysCount, setChaekiTodaysCount] = useState(0);
    const [bookLikeCount, setBookLikeCount] = useState(0);

    const uno = cookies.user ? cookies.user.uno : null;
    const jwt = cookies.user ? cookies.user.jwt : null;

    const [showActivity, setShowActivity] = useState(null);
    const [open, setOpen] = useState(false);


    const handleIconClick = (activity) => {
        setShowActivity(showActivity === activity ? null : activity);
    };

    const getActivityComponent = (activity) => {
        switch (activity) {
            case "challenge":
                return <MyChallengeList uno={uno} jwt={jwt} setChallengesCount={setChallengesCount}/>;
            case "today":
                return <MyChaekiTodayList uno={uno} jwt={jwt} setChaekiTodaysCount={setChaekiTodaysCount}/>
            case "readTime":
                return <MainText>누적 독서 시간 ~~</MainText>
            case "review":
                return <MainText>도서 후기 리스트입니다.</MainText>
            case "like":
                return <MyBookList uno={uno} jwt={jwt} setBookLikeCount={setBookLikeCount}/>
            case "scrap":
                return <MainText>스크랩 도서 후기 목록입니다.</MainText>
            default:
                return null;
        }
    }

    // 포인트로 등급 결정
    function determineGrade(point) {
        let grade, gradeImage, num;
      
        if (point >= 1000) {
          num = "5";
          grade = "숲";
          gradeImage = forestImg;
        } else if (point >= 700) {
          num = "4";
          grade = "나무";
          gradeImage = treeImg;
        } else if (point >= 300) {
          num = "3";
          grade = "묘목";
          gradeImage = plantImg;
        } else if (point >= 100) {
          num = "2";
          grade = "새싹";
          gradeImage = sproutImg;
        } else if (point < 100) {
            num = "1";
            grade = "씨앗";
            gradeImage = seedImge;
        } else {
            num = null;
            grade = null;
            gradeImage = null;
        }
      
        return { grade, gradeImage, num };
    }

    const handleOpen = () => {
        setOpen(true);
    }

    const handleClose = () => {
        setOpen(false);
    }

    const handleGetCoupon = () => {
        alert("쿠폰을 받았습니다!");
    }

    // 탈퇴
    const handleExpire = (no) => {

        axios.delete(`http://ec2-13-209-50-125.ap-northeast-2.compute.amazonaws.com:8080/users/${no}`, {
            headers: {
                Authorization: jwt
            }})
            .then(response => {
                console.log(response.data);

                removeCookie("user", { path: '/' });
                alert("회원탈퇴가 완료되었습니다!");

                navigate("/");
            })
            .catch(error => {
                console.error("ERROR : ", error);
            })

    }


    useEffect(() => {
        // 회원정보 불러오기
        const fetchUserData = async() => {
            if (!uno || !jwt) {
                console.log("UNO or JWT is missing");
                alert("유저 정보를 찾을 수 없습니다!");
                navigate("/login");
                return;
              }

            try {
                const response = await axios.get(`http://ec2-13-209-50-125.ap-northeast-2.compute.amazonaws.com:8080/users/${uno}`, {
                    headers: {
                        Authorization: jwt
                    }
                });


                // 나중에 합칠거
                setNo(response.data.no);
                setUserImage(response.data.imageUrl);
                setNickname(response.data.nickname);
                setTotalReadingTime(response.data.totalReadingTime);
                setPoint(response.data.point);

                // setUserActData(response.data.no, response.data.imageUrl, )

                // 활동 횟수 미리 표시
                const responseChallenge = await axios.get(`http://ec2-13-209-50-125.ap-northeast-2.compute.amazonaws.com:8080/users/${uno}/challenges`, {
                    headers: {
                        Authorization: jwt
                    }
                });
                setChallengesCount(responseChallenge.data.length);

                const responseChakiToday = await axios.get(`http://ec2-13-209-50-125.ap-northeast-2.compute.amazonaws.com:8080/users/${uno}/chaekiTodays`, {
                    headers: {
                        Authorization: jwt
                    }
                });
                setChaekiTodaysCount(responseChakiToday.data.length);
                
                // 책 좋아요 리스트 요청 url 추가 예정
                // const responseLikeBook = await axios.get(``, {
                //     headers: {
                //         Authorization: jwt
                //     }
                // });
                // setBookLikeCount(responseLikeBook.data.length);

                

                console.log(response.data);

            } catch (error) {
                console.error("Failed to fetch user data:", error);
                console.log("올바른 jwt를 담아주세요");
            }
        };

        fetchUserData();
    }, [uno, jwt]);


    return (<Container >
        <SubTitle>마이 페이지</SubTitle>

        <Box sx={{pt:4}}>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
                
                {/* 사용자 정보 영역 */}
                <Box
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        width: "100%",
                        gap: 3,
                        pb: 3
                    }}
                >
                    <Avatar
                        alt="프로필 사진"
                        src={ userImage ? userImage : defaultImg }
                        sx={{ width: 100, height: 100, border: "1px solid", borderRadius: "50%" }}
                    />

                    <Box sx={{ display:"flex", flexDirection:"column", fontSize: "16px", width: "20%" }}>
                        <Box sx={{ display:"flex", flexDirection:"column", width:"100%", alignItems:"center", pb:1 }}>
                            <Box sx={{display:"flex", flexDirection:"row"}}>
                                <Text3>{nickname}</Text3>
                                <Text4 sx={{pt:0.5, pl:1}}>님의</Text4>
                            </Box>

                            <Text4 sx={{pt:1}}>서재</Text4>
                        </Box>
                        
                        <Box sx={{display:"flex", width: "100%", alignItems:"center"}} >
                            <Box sx={{display:"flex", width: "20%"}}>
                                <Tooltip title={`${num}단계 : ${grade} 등급`} arrow >
                                    <Box
                                        component="img"
                                        src={gradeImage}
                                        sx={{
                                            width: 35,
                                            height: 35,
                                            borderRadius: "20%",
                                        }}                                
                                    />                
                                </Tooltip>   
                            </Box>

                            <Box sx={{display:"flex", width:100, alignItems:"center", justifyContent:"center"}}>
                                <Text4 sx={{fontFamily:'NanumBarunGothicBold'}}>{point}</Text4>
                                <Text4 sx={{pl:0.5}}>점</Text4>
                            </Box>
{/* 위치 조정 해야함 */}
                            
                        </Box>
                    </Box>

                    <Box sx={{ width: "25%", textAlign: "center" }}>
                        <CustomButton variant="contained" sx={{ border: "1px solid", borderRadius: 1 }} onClick={handleOpen}>보유 쿠폰</CustomButton>
                        <CustomButton variant="contained" sx={{ border: "1px solid", borderRadius: 1 }} onClick={handleGetCoupon}>쿠폰 받기</CustomButton>

                        <MyCouponList open={open} handleClose={handleClose}></MyCouponList>
                    </Box>

                    <Box sx={{ width: "25%", display: "flex", textItems: "end", justifyContent: "end" }}>
                        <CustomButton
                            sx={{ width: 100 }}
                            // to={`/users/${cookies.user?.uno}`}
                            to={`/edit`}
                        >
                            <Text5>회원정보수정</Text5>
                        </CustomButton>

                        <Divider orientation="vertical" variant="middle" flexItem />

                        <CustomButton
                           sx={{ width: 80 }}
                            onClick={() => handleExpire(no)}
                        >
                            <Text5>회원탈퇴</Text5>
                        </CustomButton> 
                    </Box>
                </Box>

                <Divider width="100%" sx={{ border: "solid 1px" }} />

                {/* 아이콘 영역 */}
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        width: "100%",
                        pt: 3, pb: 3
                    }}
                >

                    <Box sx={{
                        textAlign: "center",
                        cursor: "pointer",
                        lineHeight: 2,
                        width: 100,
                        backgroundColor: showActivity === "challenge" ? "#D9D9D9" : "transparent",
                        transform: showActivity === "challenge" ? "scale(1.1)" : "none",
                        border: showActivity === "challenge" ? "solid 1px #d9d9d9" : "none",
                        borderRadius: showActivity === "challenge" ? "10%" : "none",
                    }} onClick={() => handleIconClick("challenge")}>
                        <FlagIcon sx={{ fontSize: 50 }} />
                        <MainText>챌린지</MainText>
                        <MainText>{challengesCount}</MainText>
                    </Box>

                    <Box sx={{
                        textAlign: "center",
                        cursor: "pointer",
                        lineHeight: 2,
                        width: 100,
                        backgroundColor: showActivity === "today" ? "#D9D9D9" : "transparent",
                        transform: showActivity === "today" ? "scale(1.1)" : "none",
                        border: showActivity === "today" ? "solid 1px #d9d9d9" : "none",
                        borderRadius: showActivity === "today" ? "10%" : "none",
                    }} onClick={() => handleIconClick("today")}>
                        <CreateIcon sx={{ fontSize: 50 }} />
                        <MainText>채키 투데이</MainText>
                        <MainText>{chaekiTodaysCount}</MainText>
                    </Box>

                    <Box sx={{
                        textAlign: "center",
                        cursor: "pointer",
                        lineHeight: 2,
                        width: 100,
                        backgroundColor: showActivity === "readTime" ? "#D9D9D9" : "transparent",
                        transform: showActivity === "readTime" ? "scale(1.1)" : "none",
                        border: showActivity === "readTime" ? "solid 1px #d9d9d9" : "none",
                        borderRadius: showActivity === "readTime" ? "10%" : "none",
                    }} onClick={() => handleIconClick("readTime")}>
                        <WatchLaterIcon sx={{ fontSize: 50 }} />
                        <MainText>독서 기록</MainText>
                    </Box>

                    <Box sx={{
                        textAlign: "center",
                        cursor: "pointer",
                        lineHeight: 2,
                        width: 100,
                        backgroundColor: showActivity === "review" ? "#D9D9D9" : "transparent",
                        transform: showActivity === "review" ? "scale(1.1)" : "none",
                        border: showActivity === "review" ? "solid 1px #d9d9d9" : "none",
                        borderRadius: showActivity === "review" ? "10%" : "none",
                    }} onClick={() => handleIconClick("review")}>
                        <AutoStoriesIcon sx={{ fontSize: 50 }} />
                        <MainText>도서 후기</MainText>
                        <MainText>2</MainText>
                    </Box>

                    <Box sx={{
                        textAlign: "center",
                        cursor: "pointer",
                        lineHeight: 2,
                        width: 100,
                        backgroundColor: showActivity === "like" ? "#D9D9D9" : "transparent",
                        transform: showActivity === "like" ? "scale(1.1)" : "none",
                        border: showActivity === "like" ? "solid 1px #d9d9d9" : "none",
                        borderRadius: showActivity === "like" ? "10%" : "none",
                    }} onClick={() => handleIconClick("like")}>
                        <FavoriteIcon sx={{ fontSize: 50 }} />
                        <MainText>찜 도서</MainText>
                        <MainText>{bookLikeCount}</MainText>
                    </Box>

                    <Box sx={{
                        textAlign: "center",
                        cursor: "pointer",
                        lineHeight: 2,
                        width: 100,
                        backgroundColor: showActivity === "scrap" ? "#D9D9D9" : "transparent",
                        transform: showActivity === "scrap" ? "scale(1.1)" : "none",
                        border: showActivity === "scrap" ? "solid 1px #d9d9d9" : "none",
                        borderRadius: showActivity === "scrap" ? "10%" : "none",
                    }} onClick={() => handleIconClick("scrap")}>
                        <BookmarkIcon sx={{ fontSize: 50 }} />
                        <MainText>스크랩</MainText>
                        <MainText>3</MainText>
                    </Box>

                </Box>

                <Divider width="100%" sx={{ border: "solid 1px" }} />

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

            </Box>

        </Box>


    </Container>)
}

export default MyPageContainer;