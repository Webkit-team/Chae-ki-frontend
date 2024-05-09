import * as React from 'react';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import chaeki from '../../assets/logo.png';
import './css/Header.css';
import { Link } from '@mui/material';
import { styled } from '@mui/system';

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
                <Toolbar sx={{ minHeight: '60px', backgroundColor: 'white', width: '100%' }}>
                    <img className="header_img" src={chaeki} alt="채키" />
                    <Typography
                        component="h2"
                        variant="h5"
                        color="inherit"
                        align="left"
                        noWrap
                        sx={{ flex: 0.95, fontFamily: 'NanumBarunGothicLight', fontWeight: 900, fontSize: '25px', color: '#000000', px: 2 }}
                    >
                        채키
                    </Typography>
                    <Toolbar
                        component="nav"
                        variant="dense"
                        sx={{ overflowX: 'auto', overflowY: 'hidden', minHeight: '50px', width: '50%' }}
                    >
                        <AnimatedLink
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
                    <Link sx={{ textDecoration: 'none', color: 'black', border: 'none', mx: 1, fontWeight: '900', fontSize: '15px', fontFamily: 'NanumBarunGothicLight' }}>
                        로그인
                    </Link>
                    <Link sx={{ textDecoration: 'none', color: 'black', border: 'none', mx: 4, fontWeight: '900', fontSize: '15px', fontFamily: 'NanumBarunGothicLight' }}>
                        회원가입
                    </Link>
                </Toolbar>
            </header>
        </React.Fragment>
    );
};

export default Header;
