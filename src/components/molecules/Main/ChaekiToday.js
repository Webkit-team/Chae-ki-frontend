import { Box, Paper } from '@mui/material';
import Carousel from 'react-material-ui-carousel';
import image1 from '../../../assets/backgroundimage/image1.jpg';
import image2 from '../../../assets/backgroundimage/image2.jpg';
import image3 from '../../../assets/backgroundimage/image3.jpg';
import image4 from '../../../assets/backgroundimage/image4.jpg';
import image5 from '../../../assets/backgroundimage/image5.jpg';
import image6 from '../../../assets/backgroundimage/image6.jpg';


const ChaekiToday = (props) => {
    const items = [
        {
            bookname: "책 이름1",
            nickname: '양준석',
            description: "너무너무 재밌네요 특이한 등장인물들과 각색한 내용까지!",
            page: '12'
        },
        {
            bookname: "책 이름2",
            nickname: '박성준',
            description: "너무 마음에 듭니다. 제 취향인 것 같네요.",
            page: 123
        },
        {
            bookname: "책 이름3",
            nickname: '권태현',
            description: "재밌네요.",
            page: 351
        },
        {
            bookname: "책 이름4",
            nickname: '최지원',
            description: "이 책은 사용자들의 공감대를 형성하고 재미난 이야기거리를 만들어 줍니다.",
            page: 141
        },
        {
            bookname: "책 이름5",
            nickname: '우재현',
            description: "책이 아름답고 재밌어요",
            page: 24
        },
        {
            bookname: "책 이름6",
            nickname: '전승기',
            description: "너무너무 재밌는 사이트네요 굿굿",
            page: 132
        }

    ]
    const imgList = [
        image1,
        image2,
        image3,
        image4,
        image5,
        image6,
    ]

    return (
        <Box sx={{ width: '99vw', marginLeft: '-233px'}}>
            <Carousel autoPlay interval={3000} sx={{my:10}}>
                {
                    items.map((item, i) => (
                        <Item key={i} item={item} imgList={imgList} index={i} />
                    ))
                }
            </Carousel>
        </Box>
    )
}

const Item = (props) => {
    const backgroundImageUrl = props.imgList[props.index];
    return (
        <Paper sx={{
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
                <h1 style={{fontFamily:'MaruBuri-Bold', marginBottom:'3px'}}>채키 투데이</h1><hr/>
                <h2>"{props.item.description}"</h2>
                <p><span style={{fontSize:'18px'}}>{props.item.bookname}</span> - {props.item.page}쪽</p>
                <h4>{props.item.nickname}</h4>
            </div>
        </Paper>
    )
}


export default ChaekiToday;
