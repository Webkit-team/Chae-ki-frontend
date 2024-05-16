import { Box } from '@mui/material';
import { useParams } from 'react-router-dom';
import { Text1, Text2, Text3, Text4, Text5 } from '../../atoms/Text';
import CustomButton from '../../atoms/CustomButton';
import { PointOfSale } from '@mui/icons-material';

const challengeList = [
  {
    id: '302',
    img: "https://image.aladin.co.kr/product/33686/83/cover500/k422939932_2.jpg",
    title: '봄비를 느껴보자',
    description: '봄비를 느끼며 읽기 좋은 책, ‘뇌과학’이라고 하면 어떤 느낌이 드는가? 비밀에 둘러싸인 뇌에 대한 궁금증이 생기기도 하지만 동시에 어렵고 거부감이 들기도 할 것이다. 그런데 이 뇌 이야기로 일본을 비롯한 아시아 전역에 뇌과학 열풍을 일으킨 사람이 있다. 바로 전세계가 주목하는 젊은 뇌과학자이자 도쿄대 교수인 이케가야 유지.',
    bookname: '삶이 흔들릴 때 뇌과학을 읽습니다',
    startdate: '2024-05-17',
    enddate: '2024-05-31',
    memberCount: '15',
    category: '인문학'
  },
  {
    id: '303',
    img: "https://image.aladin.co.kr/product/33811/91/cover200/k842930585_2.jpg",
    title: '봄을 맞아 새로운 출발을',
    bookname: '나는 읽고 쓰고 버린다 - 손웅정의 말',
    description: '새로운 출발을 위해 읽기 좋은 책, 대한민국의 전 축구선수, 현 축구 지도자 손웅정 감독의 『나는 읽고 쓰고 버린다』가 출간되었다. 손웅정 감독이 2010년부터 작성해온 독서 노트를 바탕으로 2023년 3월부터 2024년 3월까지 김민정 시인과 진행한 수차례의 인터뷰를 책으로 묶었다.',
    startdate: '2024-05-18',
    enddate: '2024-05-31',
    memberCount: '10',
    category: '성공학'
  },
  {
    id: '304',
    img: "https://image.aladin.co.kr/product/33798/94/cover200/k852930477_2.jpg",
    title: '봄을 맞은 문학 여행',
    bookname: '나의 돈키호테',
    description: '문학에 빠져보기 좋은 책, 150만 독자가 애독하며 수만 개의 입소문 리뷰를 탄생시킨 국민 힐링소설 『불편한 편의점』의 작가 김호연이 소설 『나의 돈키호테』로 돌아왔다. 이제는 사라진 옛날 동네 비디오 가게에서 시작되는 꿈과 모험의 여정을 담은 소설이다.',
    startdate: '2024-05-19',
    enddate: '2024-05-31',
    memberCount: '10',
    category: '소설/시/희곡'
  },
  {
    id: '305',
    img: "https://image.aladin.co.kr/product/32852/7/cover200/k132936910_2.jpg",
    title: '투자의 비밀을 알아보자',
    bookname: '돈의 심리학',
    startdate: '2024-05-20',
    enddate: '2024-05-31',
    memberCount: '10',
    category: '경제경영'
  },
  {
    id: '306',
    img: "https://image.aladin.co.kr/product/33786/1/cover200/k132930130_2.jpg",
    title: '돌다리도 두들겨보고 건너자',
    bookname: '감으로 읽고 각으로 쓴다',
    startdate: '2024-05-20',
    enddate: '2024-05-31',
    memberCount: '15',
    category: '인문학'
  },
  {
    id: '307',
    img: "https://image.aladin.co.kr/product/33562/77/cover200/k882939888_1.jpg",
    title: '오늘의 하루는 어땠습니까?',
    bookname: '나를 소모하지 않는 현명한 태도에 관하여',
    startdate: '2024-05-20',
    enddate: '2024-05-31',
    memberCount: '15',
    category: '인문학'
  },
]


const ChallengeInfo = () => {
  const { id } = useParams();

  const challenge = challengeList.find(challenge => challenge.id === id);

  if (!challenge) {
    return <div>존재하지 않는 챌린지입니다.</div>;
  }

  return (
    <>
      <Box sx={{ display: 'flex', flexDirection: 'column', p: 5 }}>
        <Box sx={{ display: 'flex', flexGrow: 1, height:'270px' }}>
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <img src={challenge.img} alt={challenge.title} style={{ width: '200px', height: '270px', border: 'solid 1px #CECECE' }} />
            <CustomButton to={`/books/${id}`} sx={{ ml:0, border: 'solid black 1px', mt: 2, width:'200px' }}>도서 상세 보기</CustomButton>
          </Box>
          <Box sx={{ ml: 5, flexGrow: 1 }}>
            <Text4 sx={{ color: '#828181' }}>{challenge.title}</Text4>
            <Text2 sx={{ borderBottom: 'solid 1px grey', pb: 1  }}>{challenge.bookname}</Text2>
            <Text4 sx={{ mt: 2 }}>{challenge.description}</Text4>
            <Text5 sx={{ mt: 2, borderTop: 'solid 1px grey', pt: 1 }}>기간: {challenge.startdate} ~ {challenge.enddate}</Text5>
            <Text5>참가자 수: {challenge.memberCount} / 20</Text5>
          </Box>
        </Box>
        <CustomButton variant="outlined" sx={{
          backgroundColor: 'black',
          mt:2,
          width: '200px',
          '&:hover': {
            backgroundColor: '#949494',
            borderColor: '#000000',
          },
          alignSelf: 'flex-end'
        }} style={{ color: '#FFFFFF' }} to={`/challenges/${id}`}>
          참가하기
        </CustomButton>
      </Box>
    </>
  );
}


export default ChallengeInfo;