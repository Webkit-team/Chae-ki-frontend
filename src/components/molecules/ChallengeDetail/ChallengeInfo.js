import { Box, CircularProgress } from '@mui/material';
import { useParams } from 'react-router-dom';
import { Text1, Text2, Text3, Text4, Text5 } from '../../atoms/Text';
import CustomButton from '../../atoms/CustomButton';
import { PointOfSale } from '@mui/icons-material';
import { useEffect, useState } from 'react';
import axios from 'axios';

const ChallengeInfo = ({ setStatus }) => {
  const { id } = useParams();
  const [challenge, setChallenge] = useState(null);
  const [loading, setLoading] = useState(true);  // 초기 상태를 true로 설정

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);  // 데이터를 가져오기 전에 로딩 상태를 true로 설정
      try {
        const res = await axios.get(`http://ec2-13-209-50-125.ap-northeast-2.compute.amazonaws.com:8080/challenges`);
        const challengeData = res.data.content;

        const challengeId = Number(id);
        const foundChallenge = challengeData.find(challenge => challenge.no === challengeId);
        if (foundChallenge) {
          setChallenge(foundChallenge);
          setStatus(foundChallenge.status);
        }
      } catch (error) {
        console.error('Error fetching data: ', error);
      } finally {
        setLoading(false);  // 데이터 로딩이 완료된 후 로딩 상태를 false로 설정
      }
    };

    fetchData();
  }, [id, setStatus]);

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

  const handleJoin = () => {
    // 참가하기 핸들러 로직 추가
  };

  return (
    <>
      <Box sx={{ display: 'flex', flexDirection: 'column', p: 5 }}>
        <Box sx={{ display: 'flex', flexGrow: 1, height: '270px' }}>
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <img src={challenge.book.imageUrl} alt={challenge.book.name} style={{ width: '200px', height: '270px', border: 'solid 1px #CECECE' }} />
            <CustomButton to={`/books/${id}`} sx={{ ml: 0, border: 'solid black 1px', mt: 2, width: '200px' }}>도서 상세 보기</CustomButton>
          </Box>
          <Box sx={{ ml: 5, flexGrow: 1 }}>
            <Text4 sx={{ color: '#828181' }}>{challenge.name}</Text4>
            <Text2 sx={{ borderBottom: 'solid 1px grey', pb: 1 }}>{challenge.book.name}</Text2>
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
