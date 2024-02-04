import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { Service } from "./pages/Service";
import { Register } from "./pages/Register";
import { Login } from "./pages/Login";
import Header from "./components/Header";
import { Error } from "./pages/ErrorPage";
import Logout from "./pages/Logout";
import ClientMaster from "./layouts/ClientMaster";
import AdminMaster from "./layouts/AdminMaster";
import AdminLogin from "./pages/AdminLogin";
import AllUsers from "./pages/adminPage/AllUsers";
import ContactUs from "./pages/adminPage/ContactUs";
import UpdateUser from "./pages/adminPage/UpdateUser";
import UpdateMessages from "./pages/adminPage/UpdateMessages";

const App = () => {
  return (
    // <Router>
      <Routes>
        <Route path="/" element={<ClientMaster />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/service" element={<Service />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="*" element={<Error />} />
        </Route>
          {/* <Route path="/adminLogin" element={<AdminLogin/>}/> */}
        <Route path="/admin" element={<AdminMaster />}>
          <Route path="/admin/allUsers" element={<AllUsers/>}/>
          <Route path="/admin/user/update/:id" element={<UpdateUser/>}/>
          <Route path="/admin/messages" element={<ContactUs/>}/>
          <Route path="/admin/message/update/:id" element={<UpdateMessages/>}/>
        </Route>
      </Routes>
    // </Router>
  );
};

export default App;
