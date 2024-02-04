import { Outlet, useNavigate } from "react-router-dom";
import AdminHeader from "../components/AdminHeader";
import AdminFooter from "../components/AdminFooter";
import { useContext } from "react";
import { AppContext } from "../context/AuthContext";
// import Footer from "./Footer";
// import Header from "./Header";

export default function AdminMaster() {
const navigator=useNavigate()
  const { user } = useContext(AppContext);
  console.log(user);
  if(!user || !user.isadmin){
    navigator("/login")
  }
  return (
    <>
      <div className="container-fluid">
        <div className="row flex-nowrap">
          <AdminHeader />
          <div className="col py-3">
           
          <Outlet />
        </div>
        </div>
      </div>
    </>
  );
}
