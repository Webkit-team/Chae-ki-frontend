import { Button, IconButton, TextField, Avatar, Box, Container, Typography } from "@mui/material";

import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import PersonIcon from '@mui/icons-material/Person';
import KeyIcon from '@mui/icons-material/Key';
import LockIcon from '@mui/icons-material/Lock';
import BadgeIcon from '@mui/icons-material/Badge';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';


import { useEffect, useState } from "react";
import axios from "axios";



const EditContainer = () => {

    const [image, setImage] = useState(null);
    const [id, setId] = useState("");
    const [pwd, setPwd] = useState("");     // 비밀번호
    const [confirmPwd, setConfirmPwd] = useState("");   // 비밀번호 확인
    const [nickname, setNickname] = useState("");

    const [isPwd, setIsPwd] = useState(true);      // 유효성 검사
    const [isNickname, SetIsNickname] = useState(true);

    const [showPwd, setShowPwd] = useState(false);      // 비밀번호 숨김 토글
    const [matchPwd, setMatchPwd] = useState(false);    // 비밀번호와 비밀번호 확인 값 비교


//////////////////////////////

    // 더미 데이터 가져오는 함수
    const fetchDummyUserData = () => {
        // 실제 데이터를 불러오도록 나중에 변경해야함
        const dummyData = {
            username: 'gildong',
            password: 'aaaaaaaa',
            nickname: '길동이'
        };

        setPwd(dummyData.password);
        setNickname(dummyData.nickname);
    };

    useEffect(() => {
        fetchDummyUserData();
    }, []);


    // 로컬에서 사진 불러오기
    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImage(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };


    const onChangePwd = (e) => {
        const currentPwd = e.target.value;
        setPwd(currentPwd);

        // 비밀번호와 비밀번호 확인 값이 일치하는지에 대한 여부(비밀번호 값 변경 시)
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

        // 비밀번호와 비밀번호 확인 값이 일치하는지에 대한 여부(비밀번호 확인 값 변경 시)
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

        const userData = {
            username: id,
            password: pwd,
            nickname: nickname
        };

        // axios.post("localhost:3000/signup", userData)
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
        <h2 className="mid-header">회원정보수정</h2>       {/* 2 level - 50px? */}

        <div className="container">

            <div className="profile-left">


                {Box ? (
                    <Box
                        component="img"
                        src={image}
                        alt="불러온 이미지"
                        sx={{
                            border: "1px solid",
                            borderRadius: "100%",
                            width: "200px",
                            height: "200px"
                        }}
                    />
                ) : (
                    // <image src="../../assets/none1.png" alt="기본 이미지" />
                    <Box
                        component="img"
                        src="../../assets/snake.png"
                        alt="기본 이미지"
                        sx={{
                            // borderRadius: "100%",
                            width: "200px",
                            height: "200px"
                        }}
                    />
                )}

                <Avatar
                    alt="프로필 사진"
                    src={image || "../../assets/default.png"} // 사용자가 사진을 선택하면 그 사진을, 아니면 기본 사진을 표시
                    sx={{ width: 200, height: 200, border: "1px solid", borderRadius: "50%" }}
                />


                <Button
                    component="label"
                    role={undefined}
                    variant="contained"
                    tabIndex={-1}
                    startIcon={<CloudUploadIcon />}
                    sx={{ mt: 5 }}
                >
                    사진 불러오기
                    {/* <VisuallyHiddenInput type="file" /> */}
                    <input
                        type="file"
                        accept="image/*"
                        onChange={handleFileChange}
                        style={{ display: "none" }}
                    />
                </Button>

            </div>


            {/* 기존 비밀번호와 같은지 확인하는 로직 추가해야함 */}
            <div className="profile-right">

                <TextField
                    label="비밀번호"
                    type={showPwd ? "text" : "password"}
                    // placeholder="Password"
                    variant="outlined"
                    InputProps={{
                        startAdornment: (<IconButton tabIndex={-1}><KeyIcon /></IconButton>),
                        endAdornment:
                            (<IconButton
                                tabIndex={-1}
                                onClick={handleClickShowPwd}
                            //onMouseDown={handleMouseDownPwd}                                 //** 얘 빼도 되는거 아닌가
                            >
                                {showPwd ? (
                                    <VisibilityOff />
                                ) : (
                                    <Visibility />
                                )}
                            </IconButton>)
                    }}
                    helperText="영문 대소문자 구분, 숫자, 특수문자 포함 8~16자 사용 가능"
                    value={pwd}
                    onChange={onChangePwd}
                    error={!isPwd}
                    sx={{ mt: 2, mb: 2 }}

                />


                <TextField
                    label="비밀번호 확인"
                    type="text"                     // 얘만 나중에 password 형태로 바꿔
                    placeholder="Enter Your Password Again"
                    InputProps={{ startAdornment: (<IconButton tabIndex={-1}><LockIcon /></IconButton>) }}
                    helperText={!matchPwd && confirmPwd !== "" ? "비밀번호가 일치하지 않습니다." : "비밀번호가 일치합니다."}
                    value={confirmPwd}
                    onChange={onChangeConfirmPwd}
                    error={!matchPwd && confirmPwd !== ""}
                    sx={{ mt: 2, mb: 2 }}
                />


                <TextField
                    label="닉네임"
                    // required
                    placeholder="Nickname"
                    InputProps={{ startAdornment: (<IconButton tabIndex={-1}><BadgeIcon /></IconButton>) }}
                    helperText="한글 2~6자만 사용 가능"
                    value={nickname}
                    onChange={onChangeNickname}
                    error={!isNickname}   // 유효성검사 미통과시 빨갛게
                    sx={{ mt: 2, mb: 2 }}
                />


                {/* <button type="submit">회원가입</button><br /> */}
                <Button
                    variant="contained" color="success"
                    onClick={handleEdit}
                    disabled={!isPwd || !isNickname || !matchPwd}
                    sx={{ mt: 3, mb: 2 }}
                >
                    회원정보수정
                </Button>
            </div>
            <Button
                sx={{
                    mt: 30, ml: 3, width: 80, height: 56,
                    alignItems: "center", justifyContent: "center",
                    float: "right"
                }}
            >
                중복확인
            </Button>

        </div>


    </div>)
}

export default EditContainer;