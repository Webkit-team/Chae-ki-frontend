import { Box, colors } from "@mui/material";
import CustomCard from "../../atoms/CustomCard"
import CustomModal from "../../atoms/CustomModal";
import { Text1, Text3, Text4, Text5 } from "../../atoms/Text"
import CustomButton from "../../atoms/CustomButton";

const MyCouponList = ({ open, handleClose }) => {

    const myCouponData = [
        {
            no: "1",
            user_id: "10",
            serial_number: "abcdefghijkl",
            discount_rate: "10%",
            expired_date: "2025-05-15"
        },
        {
            no: "2",
            user_id: "10",
            serial_number: "abcdefghijkl",
            discount_rate: "15%",
            expired_date: "2025-05-15"
        },
        {
            no: "3",
            user_id: "10",
            serial_number: "abcdefghijkl",
            discount_rate: "17%",
            expired_date: "2025-05-15"
        },
        {
            no: "4",
            user_id: "10",
            serial_number: "abcdefghijkl",
            discount_rate: "13%",
            expired_date: "2025-05-15"
        }
    ]

    const modalBody = (

        <Box sx={{ textAlign: "center"}}>
            <Box sx={{ mb: 4}}>
                <Text3>쿠폰 목록</Text3>
            </Box>
            {myCouponData.map((coupon) => (
                <Box sx={{ display:"flex", mb: 3, gap: 2}}>
                    <CustomCard key={coupon.no}
                        sx={{
                            width: 370, height: 120
                        }}>
                        <Text1>{coupon.discount_rate}</Text1>
                        <Text4>시리얼 번호: {coupon.serial_number}</Text4>
                        <Text5>만료일: {coupon.expired_date}</Text5>
                    </CustomCard>

                    <CustomButton 
                        to="https://www.aladin.co.kr/home/welcome.aspx"
                        sx={{ backgroundColor:"black", width:"20%" ,
                        '&:hover': {
                            backgroundColor: '#949494',
                            borderColor: '#000000',
                        },
                        alignSelf: 'flex-end', mt: 'auto'
                        }}
                        style={{ color: '#FFFFFF' }}
                    >
                        사용하러가기
                    </CustomButton>
                </Box>
            ))}
        </Box>

    )

    return (<>
        <CustomModal
            open={open}
            handleClose={handleClose}
            sx={{ width: 500, height: 320 }}
        >
            {modalBody}
        </CustomModal>
    </>)
}

export default MyCouponList;