import React, { useContext, useEffect, useState } from "react";
import { RiDeleteBinFill } from "react-icons/ri";
import { MdEditSquare } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../../context/AuthContext";
const ContactUs = () => {
  const [messageData,setMessageData]=useState([])
  const navigate=useNavigate()
  const {token}=useContext(AppContext)
  useEffect(() => {
    const getAllMessage = async () => {
      try {
        const response = await fetch(
          "http://localhost:5000/api/admin/allMessages",
          {
            method: "GET",
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        if (response.ok) {
          const { data } = await response.json();
          setMessageData(data);
        }
      } catch (e) {
        console.log(e);
      }
    };

    getAllMessage();
  }, []);

  const deleteMessage = async (id) => {
    console.log(id);
    const data = {
      _id: id,
    };
    try {
      const response = await fetch(
        "http://localhost:5000/api/admin/deleteMessages",
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(data),
        }
      );
      if (response.ok) {
        const responseData = await response.json();
        console.log(responseData);
        const updateMessageData = messageData.filter((user) => {
          return user._id !== responseData.data._id;
        });
        console.log(updateMessageData);
        setMessageData(updateMessageData);
        toast.success("Delete Successful");
      }
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <h1>All Contact Messages</h1>
          <table class="table table-light table-striped">
            <thead>
              <tr>
                <th scope="col" className="fw-bold fs-3">
                  Serial No.
                </th>
                <th scope="col" className="fw-bold fs-3">
                  Username
                </th>
                <th scope="col" className="fw-bold fs-3">
                  Email
                </th>
                <th scope="col" className="fw-bold fs-3">
                  Phone No.
                </th>
                <th scope="col" className="fw-bold fs-3">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
            {messageData.length > 0 ? (
                messageData.map((message, index) => {
                  return (
                    <tr>
                      <th scope="row" className="fs-3">
                        {index + 1}
                      </th>
                      <td className="fs-3">{message.username}</td>
                      <td className="fs-3">{message.email}</td>
                      <td className="fs-3">{message.message}</td>
                      <td className="fs-3 border d-flex gap-4">
                        <div className="text-red-400 cursor-pointer">
                          <RiDeleteBinFill
                            color="red"
                            onClick={(e) => deleteMessage(message._id)}
                          />
                        </div>
                        <div className="cursor-pointer">
                          <MdEditSquare color="blue" onClick={()=>navigate(`/admin/message/update/${message._id}`)}/>
                        </div>
                      </td>
                    </tr>
                  );
                })
              ) : (
                <>
                <tr>
                  <td colSpan={5} className="text-center fs-3 fw-bold">Message Not Found</td>
                </tr>
                </>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
