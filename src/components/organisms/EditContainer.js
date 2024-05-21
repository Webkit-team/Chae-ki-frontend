import { Button, IconButton, Box, Container } from "@mui/material";
import CustomTextField from "../atoms/CustomTextField";


import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import KeyIcon from '@mui/icons-material/Key';
import LockIcon from '@mui/icons-material/Lock';
import BadgeIcon from '@mui/icons-material/Badge';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

import defaultImg from '../../assets/defaultProfile.png';

import { useEffect, useState } from "react";
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import { SubTitle } from "../atoms/Text";



const EditContainer = () => {
    const navigate = useNavigate();

    const [image, setImage] = useState("");
    const [imageFile, setImageFile] = useState(null);
    const [id, setId] = useState("");
    const [pwd, setPwd] = useState("");
    const [confirmPwd, setConfirmPwd] = useState("");
    const [nickname, setNickname] = useState("");

    const [isPwd, setIsPwd] = useState(true);
    const [isNickname, SetIsNickname] = useState(true);

    const [showPwd, setShowPwd] = useState(false);      // 비밀번호 숨김 토글
    const [matchPwd, setMatchPwd] = useState(false);    // 비밀번호와 비밀번호 확인 값 비교

    const [cookies] = useCookies(["user"]);

    const uno = cookies.user ? cookies.user.uno : null;
    const jwt = cookies.user ? cookies.user.jwt : null;

    
    useEffect(() => {
        if (uno) {
            fetchUserData(uno);
            console.log(uno);
        }
        else {
            console.log("등록된 회원이 아닙니다!");
        }
    }, [uno]);


    // 기존 데이터 불러오기
    const fetchUserData = async (uno) => {
        try {
            const response = await axios.get(`http://ec2-13-209-50-125.ap-northeast-2.compute.amazonaws.com:8080/users/${uno}`, {
                headers: {
                    Authorization: jwt
                }
            });

            if (response.status === 403) {
                navigate("/login");
                console.log("로그인이 필요함.");

                return;
            }

            const userData = response.data;

            console.log(userData);

            // setId(userData.id);
            setPwd(userData.password);
            setNickname(userData.nickname);
            setImage(userData.imageUrl);
        } catch (error) {
            console.error("Failed to fetch user data:", error);
            console.log("올바른 jwt를 담아주세요");
        }
    }


    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImage(reader.result);
                setImageFile(file);
            };
            reader.readAsDataURL(file);
        }
    };


    const onChangePwd = (e) => {
        const currentPwd = e.target.value;
        setPwd(currentPwd);
        setMatchPwd(currentPwd === confirmPwd);

        const PWD_REGEX = /^[^\s]+$/;

        if (!PWD_REGEX.test(currentPwd)) {
            setIsPwd(false);
        } else {
            setIsPwd(true);
        }
    }

    const onChangeConfirmPwd = (e) => {
        const currentConfirmPwd = e.target.value;
        setConfirmPwd(currentConfirmPwd);
        setMatchPwd(currentConfirmPwd === pwd);
    }

    const handleClickShowPwd = () => {
        setShowPwd(!showPwd);
    }

    const onChangeNickname = (e) => {
        const currentNickname = e.target.value;
        setNickname(currentNickname);
        const NICKNAME_REGEX = /^[가-힣]{2,6}$/;

        if (!NICKNAME_REGEX.test(currentNickname)) {
            SetIsNickname(false);
        } else {
            SetIsNickname(true);
        }
    }

    // 정보 수정
    const handleEdit = () => {

        const userData = {
            password: pwd,
            nickname: nickname,
        };

        try {
            const formData = new FormData();
            formData.append("password", pwd);
            formData.append("nickname", nickname);
            if (imageFile) {
                formData.append("image", imageFile);
            }

            const response = axios.put(`http://ec2-13-209-50-125.ap-northeast-2.compute.amazonaws.com:8080/users/${uno}`, formData, {
                headers: {
                    Authorization: jwt,
                    // 'Content-Type': 'multipart/form-data'
                }
            });
            console.log("회원정보수정 완료!", response.data);
            alert("회원정보수정이 완료되었습니다!");

            navigate("/");

        } catch(error) {
            console.error("Failed to update user data:", error);
        }
    };


    return (<div className="wrapper">
        <SubTitle>회원정보수정</SubTitle>

        <Container
            sx={{ width: 800, pt: "30px", pb: "100px", display: "flex", justifyContent: "center" }}
        >

            <div className="profile-left" style={{ padding: "50px 70px" }}>

                {image ? (
                    <Box
                        component="img"
                        src={image}
                        alt="사용자 이미지"
                        sx={{
                            border: "1px solid",
                            borderRadius: "100%",
                            width: "180px",
                            height: "180px"
                        }}
                    />
                ) : (
                    <Box
                        component="img"
                        src={defaultImg}
                        alt="기본 이미지"
                        sx={{
                            // border: "1px solid",
                            // borderRadius: "100%",
                            width: "180px",
                            height: "180px"
                        }}
                    />
                )}

                <Button
                    component="label"
                    role={undefined}
                    variant="contained"
                    tabIndex={-1}
                    startIcon={<CloudUploadIcon />}
                    sx={{ mt: 3 }}
                >
                    사진 불러오기
                    <input
                        type="file"
                        accept="image/*"
                        onChange={handleFileChange}
                        style={{ display: "none" }}
                    />
                </Button>

            </div>


            <div className="profile-right">
                <CustomTextField
                    label="비밀번호"
                    type={showPwd ? "text" : "password"}
                    variant="outlined"
                    InputProps={{
                        startAdornment: (<IconButton tabIndex={-1}><KeyIcon /></IconButton>),
                        endAdornment:
                            (<IconButton
                                tabIndex={-1}
                                onClick={handleClickShowPwd}
                            >
                                {showPwd ? (
                                    <VisibilityOff />
                                ) : (
                                    <Visibility />
                                )}
                            </IconButton>)
                    }}
                    helperText="공백을 제외한 모든 문자열과 숫자 사용 가능"
                    value={pwd}
                    onChange={onChangePwd}
                    error={!isPwd}
                    sx={{ mt: 2, mb: 2 }}
                />

                <CustomTextField
                    label="비밀번호 확인"
                    type="text"                     // 얘만 나중에 password 형태로 바꿔
                    InputProps={{ startAdornment: (<IconButton tabIndex={-1}><LockIcon /></IconButton>) }}
                    helperText={!matchPwd && confirmPwd !== "" ? "비밀번호가 일치하지 않습니다." : "비밀번호가 일치합니다."}
                    value={confirmPwd}
                    onChange={onChangeConfirmPwd}
                    error={!matchPwd && confirmPwd !== ""}
                    sx={{ mt: 2, mb: 2 }}
                />

                <CustomTextField
                    label="닉네임"
                    InputProps={{ startAdornment: (<IconButton tabIndex={-1}><BadgeIcon /></IconButton>) }}
                    helperText="한글 2~6자만 사용 가능"
                    value={nickname}
                    onChange={onChangeNickname}
                    error={!isNickname}
                    sx={{ mt: 2, mb: 2 }}
                />

                <Button
                    variant="contained" color="success"
                    onClick={handleEdit}
                    disabled={!isPwd || !isNickname || !matchPwd}
                    sx={{ mt: 3, mb: 2 }}
                >
                    회원정보수정
                </Button>
            </div>

        </Container>

    </div>)
}

export default EditContainer;