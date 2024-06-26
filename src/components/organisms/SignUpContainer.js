import "./css/SignUpContainer.css";
import { Button, IconButton, Box, Container } from "@mui/material";

import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import PersonIcon from '@mui/icons-material/Person';
import KeyIcon from '@mui/icons-material/Key';
import LockIcon from '@mui/icons-material/Lock';
import BadgeIcon from '@mui/icons-material/Badge';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';


import { useState } from "react";
import { useNavigate } from 'react-router-dom';

import axios from "axios";
import CustomButton from "../atoms/CustomButton";
import CustomTextField from "../atoms/CustomTextField";
import defaultImg from "../../assets/defaultProfile.png"
import { SubTitle } from "../atoms/Text";



const SignUpContainer = () => {
    const navigate = useNavigate();

    const [image, setImage] = useState(null);
    const [imageFile, setImageFile] = useState(null);
    const [id, setId] = useState("");
    const [pwd, setPwd] = useState("");
    const [confirmPwd, setConfirmPwd] = useState("");
    const [nickname, setNickname] = useState("");

    const [isId, setIsID] = useState(true);
    const [isPwd, setIsPwd] = useState(true);
    const [isNickname, SetIsNickname] = useState(true);

    const [notduple, setNotDuple] = useState(false);

    const [showPwd, setShowPwd] = useState(false);      // 비밀번호 숨김 토글
    const [matchPwd, setMatchPwd] = useState(false);    // 비밀번호와 비밀번호 확인 값 비교


    // 로컬에서 사진 불러오기
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

    const onChangeId = (e) => {
        const currentId = e.target.value;
        setId(currentId);
        const ID_REGEX = /^[a-zA-Z0-9]{5,16}$/;

        if (!ID_REGEX.test(currentId)) {
            setIsID(false);
        } else {
            setIsID(true);
        }
    }

    const handleDupCheckId = () => {
        console.log(id);

        axios.get(`http://ec2-13-209-50-125.ap-northeast-2.compute.amazonaws.com:8080/users/duplication?username=${id}`)
            .then(response => {
                console.log(response.data);

                if(response.data.available === false) {
                    setNotDuple(true);
                    alert("사용 가능한 ID입니다!");
                }
                else if(response.data.available === true) {
                    setNotDuple(false);
                    alert("중복된 ID입니다! 다시 입력해 주세요.");
                }
                else {
                    console.log("뭔가 잘못됨.");
                }
            })
            .catch(error => {
                console.error("ERROR : ", error);
            })
    }

    const onChangePwd = (e) => {
        const currentPwd = e.target.value;
        setPwd(currentPwd);

        // 비밀번호와 비밀번호 확인 값이 일치하는지에 대한 여부(비밀번호 값 변경 시)
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

        // 비밀번호 확인 값과 비밀번호가 일치하는지에 대한 여부(비밀번호 확인 값 변경 시)
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


    const handleSignUp = () => {
        const form = new FormData()
        form.append("username", id)
        form.append("password", pwd)
        form.append("nickname", nickname)
        form.append("image", imageFile)

        axios.post("http://ec2-13-209-50-125.ap-northeast-2.compute.amazonaws.com:8080/signup", form)
            .then(response => {
                if(response.status === 200) {
                    navigate('/login');
                    console.log("회원가입 완료!");
                }
            })
            .catch(error => {
                console.log("ERROR : ", error)
            });
    }


    return (<div className="wrapper">
        <SubTitle>회원가입</SubTitle>

        <Container
            sx={{ width: 800, pt: "30px", pb: "100px", display: "flex", justifyContent: "center" }}
        >

            <div className="profile-left">
                {image ? (
                    <>
                    <Box
                        component="img"
                        src={image}
                        alt="사용자 이미지"
                        sx={{
                            border: "1px solid",
                            borderRadius: "100%",
                            width: "180px",
                            height: "180px",
                            objectFit: "fill"
                        }}
                    />
                    </>
                ) : (
                    <Box
                        component="img"
                        src={defaultImg}
                        alt="기본 이미지"
                        sx={{
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
                    sx={{ mt: 3,
                        borderRadius: 1,
                        backgroundColor: 'black',
                        '&:hover': {
                            backgroundColor: '#949494',
                            borderColor: '#000000',
                        },
                        color: '#FFFFFF !important'
                     }}
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
                    autoFocus
                    label="아이디"
                    required
                    InputProps={{ startAdornment: (<IconButton tabIndex={-1}><PersonIcon /></IconButton>) }}
                    helperText="영문, 숫자 포함 5~16자 사용 가능"
                    value={id}
                    onChange={onChangeId}
                    error={!isId}
                    variant="outlined"
                />

                <CustomTextField
                    label="비밀번호"
                    required
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
                    helperText={<span>공백을 제외한 모든 문자열과 숫자 사용 가능</span>}
                    value={pwd}
                    onChange={onChangePwd}
                    error={!isPwd}
                />

                <CustomTextField
                    label="비밀번호 확인"
                    required
                    type="text"                     // 얘만 나중에 password 형태로 바꿔
                    InputProps={{ startAdornment: (<IconButton tabIndex={-1}><LockIcon /></IconButton>) }}
                    helperText={!matchPwd && confirmPwd !== "" ? "비밀번호가 일치하지 않습니다." : "비밀번호가 일치합니다."}
                    value={confirmPwd}
                    onChange={onChangeConfirmPwd}
                    error={!matchPwd && confirmPwd !== ""}
                />

                <CustomTextField
                    label="닉네임"
                    required
                    InputProps={{ startAdornment: (<IconButton tabIndex={-1}><BadgeIcon /></IconButton>) }}
                    helperText="한글 2~6자만 사용 가능"
                    value={nickname}
                    onChange={onChangeNickname}
                    error={!isNickname}
                />
{/* disabled 고쳐야함 */}
                <Button
                    variant="outlined" 
                    onClick={handleSignUp}
                    disabled={!isId || !isPwd || !isNickname || !matchPwd || !notduple}
                    sx={{ mt: 1.5, mb: 2,
                        borderRadius: 1,
                        backgroundColor: 'black',
                        '&:hover': {
                            backgroundColor: '#949494',
                            borderColor: '#000000',
                        },
                        color: '#FFFFFF !important'
                     }}
                >
                    회원가입
                </Button>
            </div>


            <div className="dup-buttons">
                <CustomButton variant="outlined"
                    sx={{
                        mt:1.7, ml: 2, width: 50, height: 35, pt:0, pb:0, pr:0, pl:0,
                        alignItems: "center", justifyContent: "center",
                        float: "right",
                        borderRadius: 1,
                        fontSize: 11
                    }}
                    
                    onClick={handleDupCheckId}
                >
                    중복확인
                </CustomButton>
            </div>

        </Container>

    </div>)
}


export default SignUpContainer;