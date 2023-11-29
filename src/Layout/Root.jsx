import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../Page/Footer";


const Root = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;