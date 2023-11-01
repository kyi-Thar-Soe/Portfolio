import Navbar from "../Component/NavBar";
import {Outlet} from "react-router-dom";

export default function DefaultLayout() {
    return (
        <>
        <Navbar/>
        <Outlet/>
        </>
    )
}