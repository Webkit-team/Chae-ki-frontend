import { Box } from '@mui/material';
import { useParams } from 'react-router-dom';

const challengeList = [
  {
      id: '302',
      img: "https://image.aladin.co.kr/product/33686/83/cover500/k422939932_2.jpg",
      title: '봄비를 느껴보자',
      bookname: '삶이 흔들릴 때 뇌과학을 읽습니다',
      startdate: '2024-05-17',
      enddate: '2024-05-31',
      memberCount: '15',        
      category:'인문학'
  },
  {
      id: '303',
      img: "https://image.aladin.co.kr/product/33811/91/cover200/k842930585_2.jpg",
      title: '봄을 맞아 새로운 출발을',
      bookname: '나는 읽고 쓰고 버린다 - 손웅정의 말',
      startdate: '2024-05-18',
      enddate: '2024-05-31',
      memberCount: '10',
      category:'성공학'
  },
  {
      id: '304',
      img: "https://image.aladin.co.kr/product/33798/94/cover200/k852930477_2.jpg",
      title: '봄을 맞은 문학 여행',
      bookname: '나의 돈키호테',
      startdate: '2024-05-19',
      enddate: '2024-05-31',
      memberCount: '10',  
      category:'소설/시/희곡'
  },
  {
      id: '305',
      img: "https://image.aladin.co.kr/product/32852/7/cover200/k132936910_2.jpg",
      title: '투자의 비밀을 알아보자',
      bookname: '돈의 심리학',
      startdate: '2024-05-20',
      enddate: '2024-05-31',
      memberCount: '10',
      category:'경제경영'
  },
  {
      id: '306',
      img: "https://image.aladin.co.kr/product/33786/1/cover200/k132930130_2.jpg",
      title: '돌다리도 두들겨보고 건너자',
      bookname: '감으로 읽고 각으로 쓴다',
      startdate: '2024-05-20',
      enddate: '2024-05-31',
      memberCount: '15', 
      category:'인문학'
  },
  {
      id: '307',
      img: "https://image.aladin.co.kr/product/33562/77/cover200/k882939888_1.jpg",
      title: '오늘의 하루는 어땠습니까?',
      bookname: '나를 소모하지 않는 현명한 태도에 관하여',
      startdate: '2024-05-20',
      enddate: '2024-05-31',
      memberCount: '15',
      category:'인문학'
  },
]


const ChallengeInfo = () => {
  const { id } = useParams();

  const challenge = challengeList.find(challenge => challenge.id === id);

  if (!challenge) {
    return <div>존재하지 않는 챌린지입니다.</div>;
  }

  return (
    <Box>
      <h1>{challenge.title}</h1>
      <p>{challenge.description}</p>
      <p>기간: {challenge.duration}</p>
      <p>참가자 수: {challenge.participants}</p>
    </Box>
  );
}

export default ChallengeInfo;