import { useParams } from 'react-router-dom';

const dummyData = [
  { id: '1', name: '챌린지1', description: '챌린지1 설명', duration: '1주', participants: 10 },
  { id: '2', name: '챌린지2', description: '챌린지2 설명', duration: '1달', participants: 20 },
];

const ChallengeInfo = () => {
  const { id } = useParams();

  const challenge = dummyData.find(challenge => challenge.id === id);

  if (!challenge) {
    return <div>존재하지 않는 챌린지입니다.</div>;
  }

  return (
    <div>
      <h1>{challenge.name}</h1>
      <p>{challenge.description}</p>
      <p>기간: {challenge.duration}</p>
      <p>참가자 수: {challenge.participants}</p>
    </div>
  );
}

export default ChallengeInfo;