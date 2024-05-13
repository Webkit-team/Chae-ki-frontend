// import * as React from 'react';
import { Button, TextField, Link, Grid, Box, Container, Typography, IconButton } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import KeyIcon from '@mui/icons-material/Key';

import CustomTextField from '../atoms/CustomTextField';
import { useState } from 'react';
import axios from 'axios';
import { Navigate } from 'react-router-dom';
import { SubTitle } from "../atoms/Text";


const LoginContainer = () => {
    const [isLogin, setIsLogin] = useState(false);

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
                    justifyContent: "center"
                }}
            >

                <SubTitle>로그인</SubTitle>

                <Box component="form" onSubmit={handleSubmit} noValidate sx={{ display:'flex', flexDirection:"column",mt: "28px", alignItems: "center"}} >
                    <CustomTextField
                        autoFocus
                        margin="normal"
                        InputProps={{ startAdornment: (<IconButton tabIndex={-1}><PersonIcon /></IconButton>) }}
                        fullWidth
                        label="ID"
                        name="id"
                        id="id"
                    />

                    <CustomTextField
                        margin="normal"
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
                        sx={{ width: 300, mt: 3, mb: 2 }}
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