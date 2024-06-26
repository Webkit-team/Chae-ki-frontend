import { Container, Grid } from "@mui/material";
import Footer from "./Footer";
import Header from "./Header";
import './css/Layout.css';

const Layout = (props) => {
    return (
        <div className="layout">
            <Header />
            <Container maxWidth="lg">
                <Grid container spacing={3}>
                    <Grid item xs={false} sm={1}/> 
                    <Grid item xs={12} sm={10}>
                        <main>{props.children}</main>
                    </Grid>
                    <Grid item xs={false} sm={1}/> 
                </Grid>
            </Container>
            <Footer />
        </div>
    );
}

export default Layout;