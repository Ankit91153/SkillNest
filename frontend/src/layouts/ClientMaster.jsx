import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
// import Footer from "./Footer";
// import Header from "./Header";

export default function ClientMaster(){
    return(
        <>
            <Header/>
            <Outlet/>
            <Footer/>
        </>
    )
}