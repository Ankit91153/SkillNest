import React, { useContext, useEffect, useState } from "react";
import { RiDeleteBinFill } from "react-icons/ri";
import { MdEditSquare } from "react-icons/md";
import { NavLink, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { AppContext } from "../../context/AuthContext";
const AllUsers = () => {
  const [userData, setUserData] = useState([]);
  const {token}=useContext(AppContext)
  console.log(token);
  const navigate = useNavigate();
  useEffect(() => {
    const getAllUser = async () => {
      try {
        const response = await fetch(
          "http://localhost:5000/api/admin/allUsers",
          {
            method: "GET",
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        if (response.ok) {
          const { data } = await response.json();
          setUserData(data);
        }
      } catch (e) {
        console.log(e);
      }
    };

    getAllUser();
  }, []);

  console.log(userData);
  const deleteUser = async (id) => {
    console.log(id);
    const data = {
      _id: id,
    };
    try {
      const response = await fetch(
        "http://localhost:5000/api/admin/deleteUser",
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
        const updateUserData = userData.filter((user) => {
          return user._id !== responseData.data._id;
        });
        console.log(updateUserData);
        setUserData(updateUserData);
        toast.success("Delete Successful");
      }
    } catch (e) {
      console.log(e);
    }
  };
  const updateUser = async (user) => {
    console.log(user);
    const data = {
      _id: id,
    };
    try {
      const response = await fetch(
        "http://localhost:5000/api/admin/updateUser",
        {
          method: "PUT",
          headers: {
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(user),
        }
      );
      if (response.ok) {
        const responseData = await response.json();
        console.log(responseData);
        const updateUserData = userData.filter((user) => {
          return user._id !== responseData.data._id;
        });
        console.log(updateUserData);
        setUserData(updateUserData);
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
          <h1>All Users</h1>
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
              {userData.length > 0 ? (
                userData.map((user, index) => {
                  return (
                    <tr>
                      <th scope="row" className="fs-3">
                        {index + 1}
                      </th>
                      <td className="fs-3">{user.username}</td>
                      <td className="fs-3">{user.email}</td>
                      <td className="fs-3">{user.phone}</td>
                      <td className="fs-3 border d-flex gap-4">
                        <div className="text-red-400 cursor-pointer">
                          <RiDeleteBinFill
                            color="red"
                            onClick={(e) => deleteUser(user._id)}
                          />
                        </div>
                        <div className="cursor-pointer">
                          <MdEditSquare
                            color="blue"
                            onClick={() => navigate(`/admin/user/update/${user._id}`)}
                          />
                        </div>
                      </td>
                    </tr>
                  );
                })
              ) : (
                <>
                  <tr>
                    <td colSpan={5} className="text-center fs-3 fw-bold">
                      User Not Found
                    </td>
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

export default AllUsers;
