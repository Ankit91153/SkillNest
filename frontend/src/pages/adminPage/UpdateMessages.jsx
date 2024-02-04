import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AppContext } from '../../context/AuthContext';

const UpdateMessages = () => {

  const currentURL = window.location.href;
  const userId=currentURL.split('/').pop()
  const navigator=useNavigate()
  const {token}=useContext(AppContext)

  const [data,setData]=useState({
    username:"",
    email:"",
    message:"",
})

useEffect(() => {
  const getMessageData = async () => {
    try {
      const response = await fetch(
        "http://localhost:5000/api/admin/singleMessages",
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
          username:data.username,email:data.email,message:data.message
      })
      }
    } catch (e) {
      console.log(e);
    }
  };

  getMessageData();
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
    message:data.message
  }
  try {
    const response = await fetch("http://localhost:5000/api/admin/updateMessages", {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(userData),
    });
console.log(response);
    // alert(response);

    if (response.ok) {
      toast.success("Message Update Successfully")
      navigator("/admin/messages")

    } else {
      console.error("API Error:", response.status, response.statusText);
    }
  } catch (error) {
    console.error(error);
  }
}
  return (
    <section className="section-contact">
    <div className="contact-content container">
      <h1 className="main-heading">Update Message</h1>
    </div>
    {/* contact page main  */}
    <div className="container grid">

      {/* contact form content actual  */}
      <section className="section-form">
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="username">username</label>
            <input
              type="text"
              name="username"
              id="username"
              autoComplete="off"
              value={data.username}
              onChange={handleInput}
              required
            />
          </div>

          <div>
            <label htmlFor="email">email</label>
            <input
              type="email"
              name="email"
              id="email"
              autoComplete="off"
              value={data.email}
              onChange={handleInput}
              required
            />
          </div>

          <div>
            <label htmlFor="message">message</label>
            <textarea
              name="message"
              id="message"
              autoComplete="off"
              value={data.message}
              onChange={handleInput}
              required
              cols="30"
              rows="6"
            ></textarea>
          </div>

          <div>
            <button type="submit">Update Message</button>
          </div>
        </form>
      </section>
    </div>

  
  </section>
  )
}

export default UpdateMessages
