import * as React from 'react';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import chaeki from '../../assets/logo.png';
import './css/Header.css';
import { styled } from '@mui/system';
import { Link } from 'react-router-dom';

const AnimatedLink = styled(Link)(({ theme }) => ({
    position: 'relative',
    display: 'inline-block',
    fontSize: '18px',
    '&::after': {
        content: '""',
        position: 'absolute',
        width: '0',
        height: '2px',
        bottom: '-2px',
        left: '0',
        backgroundColor: 'currentColor',
        transition: 'width .3s',
    },
    '&:hover::after': {
        width: '100%',
        left: '0',
    },
}));

const Header = () => {

    return (
        <React.Fragment>
            <header>
                <Toolbar sx={{ minHeight: '60px', backgroundColor: 'white', width: '100%', display: 'flex', justifyContent: 'space-between', px: 0, margin: 'auto', maxWidth: '1450px' }}>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <img className="header_img" src={chaeki} alt="채키" />
                        <Typography
                            component="h1"
                            variant="h5"
                            color="inherit"
                            align="left"
                            noWrap
                            sx={{ flex: 1, fontFamily: 'NanumBarunGothicLight', fontWeight: 900, fontSize: '25px', color: '#000000', px: 2, display: 'inline', maxWidth: '50px' }}
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
                                ml: 8,
                                textDecoration: 'none',
                                fontFamily: 'NanumBarunGothicLight',
                                fontWeight: '900',
                                cursor: 'pointer',
                            }}
                        >
                            서비스 소개
                        </AnimatedLink>
                        <AnimatedLink
                            to="/challenge"
                            color="inherit"
                            variant="body2"
                            sx={{
                                ml: 8,
                                textDecoration: 'none',
                                fontFamily: 'NanumBarunGothicLight',
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
                                fontFamily: 'NanumBarunGothicLight',
                                fontWeight: '900',
                                cursor: 'pointer',
                            }}
                        >
                            도서후기
                        </AnimatedLink>
                    </Toolbar>
                    <div className="login">
                        <Link to="/login" className="login_link">로그인</Link>
                        <Link to="/signup" className="signup_link">회원가입</Link>
                    </div>
                </Toolbar>
            </header>
        </React.Fragment>
    );
};

export default Header;
