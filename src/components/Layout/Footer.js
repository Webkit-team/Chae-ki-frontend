import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';

const Copyright = () => {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="http://localhost:3000">
        http://chaeki.com
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const Footer = () => {

  return (
    <Box component="footer" sx={{ bgcolor: 'grey', py: 5, width: '100%', m: 0 }}>
      <Container maxWidth="lg">
        <Typography variant="h6" align="center" gutterBottom>
          <a href="https://www.instagram.com/">
            <InstagramIcon sx={{ fontSize: 40, mx: 0.25 }}/>
          </a>
          <a href="https://www.youtube.com/">
            <YouTubeIcon sx={{ fontSize: 40, mx: 0.25}}/>
          </a>
          <a href="https://www.facebook.com/">
            <FacebookIcon sx={{ fontSize: 40, mx: 0.25 }}/>
          </a>
          <a href="https://twitter.com/">
            <XIcon sx={{ fontSize: 40, mx: 0.25 }}/>
          </a>
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
          (주)북 읽고 채키라웃 | 박성준, 최지원, 권태현, 양준석 | 사업자 등록번호 : 1234-5678
        </Typography>
        <Typography
          variant="subtitle2"
          align="center"
          color="text.secondary"
          component="p"
        >
          주소 : 금오공과대학교 DB 116호 | 유선번호 : 010-1234-5678
        </Typography>
        <Copyright />
      </Container>
    </Box>
  );
}

export default Footer;