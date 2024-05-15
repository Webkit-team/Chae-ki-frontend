import { Card } from "@mui/material";


const CustomCard = ({children, ...props}) => {
    return (<>
    
        <Card
            sx={{
                width: 400, height: 200, display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center",
                transition: "Transform 0.3s ease-in-out",
                "&:hover": {
                    transform: "scale(1.05)",
                    border: "solid"
                }, border: "solid 1px #D9D9D9"
            }}
            elevation={10}
            {...props}
        >
            {children}
        </Card>
    
    </>)
}

export default CustomCard;