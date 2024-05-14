import { Card, Container, Divider } from "@mui/material";
import { Text3, Text4, Text5 } from "../atoms/Text";

const ChaekiTodayList = () => {

    return (<>

        <Container sx={{ display: "grid", gridTemplateColumns: "400px 400px", justifyContent: "center", gap: 10, width: 900 }}>
            <Card
                sx={{
                    width: 400, height: 200, display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center",
                    transition: "Transform 0.5s",
                    "&:hover": {
                        transform: "rotateX(5deg) rotateY(45deg)"
                    }, border: "solid"
                }}
                elevation={10}
            >
                <Text3>좋습니다.</Text3>
                <Divider width="90%" sx={{ display: "flex", justifyContent: "center", border: "double 1px #D9D9D9" }}></Divider>
                <Text4 sx={{display:"flex", justifyContent:"right"}}>메스커레이드 호텔</Text4>
                <Text5>p.123</Text5>
            </Card>

            <Card sx={{ width: 400, 
                transition: "Transform 0.3s ease-in-out",
                "&:hover": {
                    transform: "scale(1.05)",
                    border: "solid",
                }, border: "solid 1px #D9D9D9"
             }}>
                <Text3>반전의 연속이었습니다.</Text3>
                <Divider width="100%" sx={{ border: "Highlight 1px" }}></Divider>
                <Text3>돌이킬 수 없는 약속</Text3>
                <Text5>p.456</Text5>
            </Card>
            <Card sx={{ width: 400 }}>
                <Text3>유에서 무로 돌아갑시다.</Text3>
                <Divider width="100%" sx={{ border: "Highlight 1px" }}></Divider>
                <Text3>무소유</Text3>
                <Text5>p.456</Text5>
            </Card>
        </Container>

    </>)
}

export default ChaekiTodayList;