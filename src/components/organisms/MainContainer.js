import ChallengeRanking from '../molecules/Main/ChallengeRanking';
import BookRanking from '../molecules/Main/BookRanking';
import ChaekiToday from '../molecules/Main/ChaekiToday';

const MainContainer = () => {
    return (
        <>
            <ChallengeRanking />
            <BookRanking />
            <ChaekiToday />
        </>
    );
}

export default MainContainer;