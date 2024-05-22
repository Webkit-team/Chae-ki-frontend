import * as React from 'react';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import chaeki from '../../assets/logo.png';
import './css/Header.css';
import { styled } from '@mui/system';
import { Link } from 'react-router-dom';
import { useCookies } from 'react-cookie';

const AnimatedLink = styled(Link)(({ theme }) => ({
    position: 'relative',
    display: 'inline-block',
    fontSize: '18px',
    textDecoration: 'none',
    color: 'inherit',
    '&::after': {
        content: '""',
        position: 'absolute',
        width: '0',
        height: '3px',
        bottom: '-8px',
        left: '0',
        backgroundColor: 'currentColor',
        transition: 'width .3s',
    },
    '&:hover': {
        color: 'grey',
    },
    '&:hover::after': {
        width: '100%',
        left: '0',
    },
}));

const Header = () => {
    const [cookies, removeCookie] = useCookies(["user"]);

    const user = cookies.user ? cookies.user.uno : null;

    const handleLogOut = () => {
        removeCookie('user', { path: '/' });
        alert("로그아웃되었습니다!");
    }

    return (
        <React.Fragment>
            <Toolbar sx={{ position: 'fiexed', borderBottom: 'solid 0.5px', borderBottomColor: '#CECECE', minHeight: '60px', backgroundColor: 'white', width: '100%', display: 'flex', justifyContent: 'space-between', px: 0 }}>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <img className="header_img" src={chaeki} alt="채키" />
                    <Typography
                        color="inherit"
                        align="left"
                        noWrap

                        sx={{ flex: 1, fontFamily: 'NanumBarunGothic', fontWeight: 900, fontSize: '25px', color: '#000000', px: 2, display: 'inline', maxWidth: '50px' }}
                    ><Link to="/">
                            채키
                        </Link>
                    </Typography>
                </div>
                <Toolbar
                    component="nav"
                    variant="dense"
                    sx={{ overflowX: 'auto', overflowY: 'hidden', minHeight: '50px', width: 'auto', display: 'flex', alignItems: 'center' }}
                >
                    <AnimatedLink
                        to="/Intro"
                        color="inherit"
                        variant="body2"
                        sx={{
                            ml: 4,
                            textDecoration: 'none',
                            fontFamily: 'NanumBarunGothic',
                            fontWeight: '900',
                            cursor: 'pointer',
                        }}
                    >
                        채키 소개
                    </AnimatedLink>
                    <AnimatedLink
                        to="/challenges"
                        color="inherit"
                        variant="body2"
                        sx={{
                            ml: 8,
                            textDecoration: 'none',
                            fontFamily: 'NanumBarunGothic',
                            fontWeight: '900',
                            cursor: 'pointer',
                        }}
                    >
                        챌린지
                    </AnimatedLink>
                    <AnimatedLink
                        to="/review"
                        color="inherit"
                        variant="body2"
                        sx={{
                            ml: 8,
                            textDecoration: 'none',
                            fontFamily: 'NanumBarunGothic',
                            fontWeight: '900',
                            cursor: 'pointer',
                        }}
                    >
                        도서후기
                    </AnimatedLink>
                </Toolbar>


                <div className="login">
                    {user ? (
                        <>
                            <Link to="/my" className="my_page_link">마이페이지</Link>
                            <Link to="/" className="logout_link" onClick={(handleLogOut)}>로그아웃</Link>
                        </>
                    ) : (
                        <>
                            <Link to="/login" className="login_link">로그인</Link>
                            <Link to="/signup" className="signup_link">회원가입</Link>
                        </>
                    )}
                </div>
            </Toolbar>
        </React.Fragment>
    );
};

export default Header;
