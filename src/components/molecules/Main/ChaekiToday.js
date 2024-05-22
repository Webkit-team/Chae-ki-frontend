import { Box } from '@mui/material';
import Carousel from 'react-material-ui-carousel';
import image1 from '../../../assets/backgroundimage/image1.jpg';
import image2 from '../../../assets/backgroundimage/image2.jpg';
import image3 from '../../../assets/backgroundimage/image3.jpg';
import image4 from '../../../assets/backgroundimage/image4.jpg';
import image5 from '../../../assets/backgroundimage/image5.jpg';
import image6 from '../../../assets/backgroundimage/image6.jpg';
import { useEffect, useState } from 'react';
import axios from 'axios';


const ChaekiToday = (props) => {
    const imgList = [
        image1,
        image2,
        image3,
        image4,
        image5,
        image6,
    ]

    const [challengeData, setChallengeData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://ec2-13-209-50-125.ap-northeast-2.compute.amazonaws.com:8080/today/list');
                setChallengeData(response.data);
            } catch (error) {
                console.error('Error fetching data: ', error);
            }
        };

        fetchData();
    }, []);

    return (
        <>
            <Box sx={{ my:5 ,width: '700px', height: '400px'}}>
                <Carousel autoPlay interval={3000} sx={{width: '100vw', position: 'absolute', top: '1400px', left:0 }}>
                    {
                        challengeData.map((item, i) => (
                            <Item key={i} item={item} imgList={imgList} index={i} />
                        ))
                    }
                </Carousel>
            </Box>

        </>
    )

}

const Item = (props) => {
    const backgroundImageUrl = props.imgList[props.index];
    return (
        <Box sx={{
            position: 'relative',
            px: 10, py: 5, color: '#000000', fontFamily: 'MaruBuri-Light',
            '&::before': {
                content: '""',
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundImage: `url(${backgroundImageUrl})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                opacity: 0.5,
                zIndex: 1,
            }
        }}>
            <div style={{ position: 'relative', zIndex: 2 }}>
                <h1 style={{ fontFamily: 'MaruBuri-Bold', marginBottom: '3px' }}>이주의 채키투데이</h1><hr />
                <h2>"{props.item.content}"</h2>
                <span style={{ fontSize: '18px' }}>{props.item.bookName}</span>
                <h4>{props.item.nickName}</h4>
            </div>
        </Box>
    )
}


export default ChaekiToday;
