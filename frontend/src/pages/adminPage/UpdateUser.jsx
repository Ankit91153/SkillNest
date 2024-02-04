import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { AppContext } from '../../context/AuthContext';
const UpdateUser = () => {
    const currentURL = window.location.href;
    const userId=currentURL.split('/').pop()
    const {token}=useContext(AppContext)
    const navigator=useNavigate()
    console.log(userId);
    const [data,setData]=useState({
        username:"",
        email:"",
        phone:"",
    })


 useEffect(() => {
        const getUserData = async () => {
          try {
            const response = await fetch(
              "http://localhost:5000/api/admin/singleUser",
              {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body:JSON.stringify({_id:userId}),
              }
            );
            if (response.ok) {
              const { data } = await response.json();
            //   setMessageData(data);
            console.log(data);
            setData({
                username:data.username,email:data.email,phone:data.phone
            })
            }
          } catch (e) {
            console.log(e);
          }
        };
    
        getUserData();
      }, []);

      const handleInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setData((prev) => ({ ...prev, [name]: value }));
      };
    const handleSubmit=async(e)=>{
        e.preventDefault()
        console.log(data)
        const userData={
          _id:userId,
          username:data.username,
          email:data.email,
          phone:data.phone
        }
        try {
          const response = await fetch("http://localhost:5000/api/admin/updateUser", {
            method: "PUT",
            headers: {
              Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify(userData),
          });
    console.log(response);
          // alert(response);
    
          if (response.ok) {
            toast.success("User Update Successfully")
            navigator("/admin/allUsers")

          } else {
            console.error("API Error:", response.status, response.statusText);
          }
        } catch (error) {
          console.error(error);
        }
    }
  return (
    <section>
        <main>
          <div className="section-registration">
            <div className="container grid">
              {/* our main registration code  */}
              <div className="registration-form">
                <h1 className="main-heading mb-3">Update User</h1>
                <br />
                <form onSubmit={handleSubmit}>
                  <div>
                    <label htmlFor="username">username</label>
                    <input
                      type="text"
                      name="username"
                      value={data.username}

                      onChange={handleInput}
                      placeholder="username"
                    />
                  </div>
                  <div>
                    <label htmlFor="email">email</label>
                    <input
                      type="text"
                      name="email"
                      value={data.email}
                      onChange={handleInput}
                      placeholder="email"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone">phone</label>
                    <input
                      type="number"
                      name="phone"
                      value={data.phone}
                      onChange={handleInput}
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
  )
}

export default UpdateUser
