import Footer from "./Footer";
import Header from "./Header";
import './css/Layout.css';

const Layout = (props) => {
    return (
        <div className="layout">
            <Header />

            <main>
                {props.children}
            </main>

            <Footer />
        </div>
    );
}

export default Layout;