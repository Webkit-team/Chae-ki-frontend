import { Box, CircularProgress } from '@mui/material';
import { useParams } from 'react-router-dom';
import { Text2, Text4, Text5 } from '../../atoms/Text';
import CustomButton from '../../atoms/CustomButton';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useCookies } from 'react-cookie';

const ChallengeInfo = ({ status, setStatus }) => {
  const { id } = useParams();
  const [challenge, setChallenge] = useState({});
  const [loading, setLoading] = useState(true);
  const [cookies] = useCookies(["user"]);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await axios.get(`http://ec2-13-209-50-125.ap-northeast-2.compute.amazonaws.com:8080/challenges/${id}`);
        const challengeData = res.data;

        setChallenge(challengeData);
        setStatus(challengeData.status);

      } catch (error) {
        console.error('Error fetching data: ', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id, setStatus, status]);

  if (loading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <CircularProgress />
      </Box>
    );
  }

  if (!challenge) {
    return <div>존재하지 않는 챌린지입니다.</div>;
  }

  const handleJoin = async () => {

    const token = cookies.user ? cookies.user.jwt : null;
    const uno = cookies.user ? cookies.user.uno : null;
    if (!token) {
      alert('로그인이 필요합니다.');
      return;
    }
    try {
      console.log(token);
      const res = await axios.post(
        `http://ec2-13-209-50-125.ap-northeast-2.compute.amazonaws.com:8080/challenges/${id}/users/${uno}`,
        {},
        {
          headers: {
            'Authorization': token,
          },
        }
      );
      if (res) {
        alert('챌린지에 참가하셨습니다.');
      }
    } catch (error) {
      console.error('참가 실패:', error.response ? error.response.data : error.message);
    }
  };

  return (
    <>
      <Box sx={{ display: 'flex', flexDirection: 'column', p: 5 }}>
        <Box sx={{ display: 'flex', flexGrow: 1, height: '270px' }}>
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <img src={challenge.bookDetail.imageUrl} alt={challenge.bookDetail.name} style={{ width: '200px', height: '270px', border: 'solid 1px #CECECE' }} />
            <CustomButton to={`/books/${id}`} sx={{ ml: 0, border: 'solid black 1px', mt: 2, width: '200px' }}>도서 상세 보기</CustomButton>
          </Box>
          <Box sx={{ ml: 5, flexGrow: 1 }}>
            <Text4 sx={{ color: '#828181' }}>{challenge.name}</Text4>
            <Text2 sx={{ borderBottom: 'solid 1px grey', pb: 1 }}>{challenge.bookDetail.name}</Text2>
            <Text4 sx={{ mt: 2 }}>{challenge.description}</Text4>
            <Text5 sx={{ mt: 2, borderTop: 'solid 1px grey', pt: 1 }}>기간: {challenge.startDate} ~ {challenge.endDate}</Text5>
            <Text5>참가자 수: {challenge.memberCount} / 20</Text5>
          </Box>
        </Box>
        <CustomButton variant="outlined" sx={{
          backgroundColor: 'black',
          mt: 2,
          width: '200px',
          '&:hover': {
            backgroundColor: '#949494',
            borderColor: '#000000',
          },
          alignSelf: 'flex-end'
        }} style={{ color: '#FFFFFF' }} to={`/challenges/${id}`} onClick={handleJoin}>
          참가하기
        </CustomButton>
      </Box>
    </>
  );
};

export default ChallengeInfo;
