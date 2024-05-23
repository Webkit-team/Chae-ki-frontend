
import ChallengeCard from './ChallengeCard';
import { Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const ChallengeList = ({data}) => {
    const navigate = useNavigate();

    const handleClick = (e, id) => {
        e.stopPropagation();
        navigate(`/challenges/${id}`);
    }

    return (
        <>
            <Grid container spacing={0} >
                {data.map((challenge) => (
                    <Grid item key={challenge.no} xs={12} sm={12} md={12} >
                        <ChallengeCard
                            id={challenge.no}
                            bookNo={challenge.book.no}
                            img={challenge.book.imageUrl}
                            title={challenge.name}
                            bookname={challenge.book.name}
                            startdate={challenge.startDate}
                            enddate={challenge.endDate}
                            memberCount={challenge.memberCount}
                            category={challenge.category}
                            onClick={(e) => handleClick(e, challenge.no)}
                        />
                    </Grid>
                ))}
            </Grid>
        </>
    );
};

export default ChallengeList;