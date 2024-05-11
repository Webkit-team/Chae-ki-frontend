// import * as React from 'react';
import { Button, TextField, Link, Grid, Box, Container, Typography, IconButton } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import KeyIcon from '@mui/icons-material/Key';

import { useState } from 'react';
import axios from 'axios';
import { Navigate } from 'react-router-dom';

// 로그인 어떻게 성공하는지는 백에서 처리?
// 로그인 성공했다는 응답이 오고난 뒤, 로그인 상태 관리 하는거는 우리가 하는거?
// 로그인 상태면 <마이페이지, 로그아웃> / 로그인 상태 아니면 회원가입, 로그인 띄워야하니까
const LoginContainer = () => {

    const [isLogin, setIsLogin] = useState(false);

    // 로그인 성공시 메인페이지로 이동해야함. loginSuccess는 이때 필요함
    // 로그인 실패시 알림창 띄워야함.
    const handleSubmit = async (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);

        const loginData = {
            username: data.get("id"),
            password: data.get("password")
        };


        // try {
        //     const ax = await axios.post("/login", loginData);

        //     // 얘만 나중에 실제 응답으로 변경
        //     if (ax.status === 200) {
        //         console.log("로그인 성공", response.data);
        //         setIsLogin(true);
        //         // 홈으로 이동 추가
        //     } else {
        //         console.error("ERROR : ", error);
        //     }
        // } catch (error) {
        //     console.log("ㅇㅇ", error);
        // }
        

        console.log({
            id: data.get('id'),
            password: data.get('password'),
        });

        setIsLogin(true);
    };

    return (<>
        {isLogin && <Navigate to="/" />}

        <Container component="main" maxWidth="xs">
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >

                {/* <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar> */}

                <h2 className="mid-header" style={{ fontSize: "30px" }}>로그인</h2>

                <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                    <TextField
                        autoFocus
                        margin="normal"
                        required
                        InputProps={{ startAdornment: (<IconButton tabIndex={-1}><PersonIcon /></IconButton>) }}
                        fullWidth
                        label="ID"
                        name="id"
                        id="id"
                    />

                    <TextField
                        margin="normal"
                        required
                        InputProps={{ startAdornment: (<IconButton tabIndex={-1}><KeyIcon /></IconButton>) }}
                        fullWidth
                        label="Password"
                        type="password"
                        name="password"
                        id="password"
                    />

                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                    >
                        로그인
                    </Button>

                    <Grid container>
                        <Grid item>
                            <Link href="signup" variant="body2">
                                {"아직 회원이 아니신가요?"}
                            </Link>
                        </Grid>

{/* 삭제 예정 */}
                        <Grid item>
                            <Link href="user" variant="body2">
                                {"회원정보수정으로"}
                            </Link>
                        </Grid>

                        <Grid item>
                            <Link href="my" variant="body2">
                                {"마이페이지로"}
                            </Link>
                        </Grid>
                    </Grid>

                </Box>
            </Box>

        </Container>

    </>);
}

export default LoginContainer;