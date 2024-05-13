import Layout from "../Layout/Layout";
import UserRanking from "../molecules/Main/UserRanking";
import MainContainer from "../organisms/MainContainer";


const MainPage = () => {
    return (
        <>
            <UserRanking />
            <Layout>
                <MainContainer />
            </Layout>
        </>
    );
}

export default MainPage;