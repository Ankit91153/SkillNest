import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../context/AuthContext";



export const Login = () => {

  const navigate = useNavigate();
  const {storeToken}=useContext(AppContext)
  const userInfo=useContext(AppContext)
  useEffect(()=>{
    if (userInfo.user && userInfo.user.isadmin) {
      navigate("/admin");
    } else if (userInfo.user) {
      navigate("/");
    }
  
  },[userInfo.user])
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const {userAuthentication}=useContext(AppContext)




  // let handle the input field value
  const handleInput = (e) => {
    // let name = e.target.name;
    // let value = e.target.value;
    const {name,value} = e.target

    setUser({
      ...user,
      [name]: value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });

      console.log(response);

      if (response.status===200) {
        const responseData = await response.json();
        console.log("after login: ", responseData);
        // toast.success("Registration Successful");
        await storeToken(responseData.token);
        await userAuthentication();
       
        
      }
    } catch (error) {
      console.log(error);
    }
  };


  return (
    <>
      <section>
        <main>
          <div className="section-registration">
            <div className="container grid grid-two-cols">
              <div className="registration-image reg-img">
                <img
                  src="/images/register.jpg"
                  alt="a nurse with a cute look"
                  width="400"
                  height="500"
                />
              </div>
              {/* our main registration code  */}
              <div className="registration-form">
                <h1 className="main-heading mb-3">Login form</h1>
                <br />
                <form onSubmit={handleSubmit}>
                  <div>
                    <label htmlFor="email">email</label>
                    <input
                      type="text"
                      name="email"
                      value={user.email}
                      onChange={handleInput}
                      placeholder="email"
                    />
                  </div>

                  <div>
                    <label htmlFor="password">password</label>
                    <input
                      type="password"
                      name="password"
                      value={user.password}
                      onChange={handleInput}
                      placeholder="password"
                    />
                  </div>
                  <br />
                  <button type="submit" className="btn-submit">
                    Register Now
                  </button>
                </form>
              </div>
            </div>
          </div>
        </main>
      </section>
    </>
  );
};