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
import axios from "axios";
import { SubTitle } from "../atoms/Text";



const EditContainer = () => {

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


    // 더미 데이터 가져오는 함수
    const fetchDummyUserData = () => {

        const dummyData = {
            username: 'gildong',
            password: 'aaaaaaaa',
            nickname: '길동이'
        };

        setPwd(dummyData.password);
        setNickname(dummyData.nickname);
    };


    //////////////////////////////

    const fetchUserData = async (uno) => {
        try {
            const response = await axios.get(`http://localhost:8080/users/${uno}`);

            if (response.status === 403) {
                // 로그인 페이지로 이동하기
                console.log("로그인이 필요함.");

                return;
            }

            const userData = response.data;
            // setId(userData.id);
            setPwd(userData.password);
            setNickname(userData.nickname);
            setImage(userData.image ? `http://localhost:8080/images/${userData.image}` : defaultImg);
        } catch (error) {
            console.error("Failed to fetch user data:", error);
        }
    }

    //////////////////////////////

    useEffect(() => {
        fetchUserData();
    }, []);

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

        const PWD_REGEX = /^[a-zA-Z0-9~!@#$%^&*()]{8,16}$/;

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

    // 회원가입 정보 보내는 post 요청 추가해야함
    const handleEdit = () => {



        // axios.put("localhost:3000/user", userData)
        //     .then(response => {
        //         console.log("회원정보수정 성공!", response.data)
        //     })
        //     .catch(error => {
        //         console.log("ERROR : ", error)
        //     });

        console.log("회원정보수정 완료!");
        console.log(id);
        console.log(pwd);
        console.log(nickname);

    }


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


            {/* 기존 비밀번호와 같은지 확인하는 로직 추가해야할까? */}
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
                    helperText="영문, 숫자, 특수문자 포함 8~16자 사용 가능"
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
                    // required
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