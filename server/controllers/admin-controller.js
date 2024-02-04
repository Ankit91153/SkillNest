const UserModel = require("../models/user-model");
const ContactModel = require("../models/contact-model");

const allUsers = async (req, res) => {
  try {
    const response = await UserModel.find({ isadmin: false }).select(
      "-password"
    );

    // console.log(response);
    if (!response) {
      res.status(404).json({ msg: "No User found" });
      return;
    }
    return res.status(200).json({ msg: "All User found", data: response });
  } catch (e) {
    console.log(`error from the server ${error}`);
  }
};

const singleUser=async (req,res)=>{
  
  try {
    const response = await UserModel.findOne(req.body).select(
      "-password"
    );

    // console.log(response);
    if (!response) {
      res.status(404).json({ msg: "No User found" });
      return;
    }
    return res.status(200).json({ msg: "All User found", data: response });
  } catch (e) {
    console.log(`error from the server ${error}`);
  }
}

const deleteUser = async (req, res) => {
  console.log(req.body);
  if (!req.body || Object.keys(req.body).length === 0) {
    res.send({
      status: 400,
      message: "id not found",
    });
  } else {
    try {
      const userToDelete = await UserModel.findOne(req.body);

      if (userToDelete) {
        const response = await UserModel.deleteOne(req.body);

        if (response.deletedCount === 1) {
          res.status(200).json({ msg: "User Deleted", data: userToDelete });
        } else {
          res.status(400).json({ msg: "User not found or not deleted" });
        }
      } else {
        res.status(400).json({ msg: "Id Not Found" });
      }
    } catch (e) {
      console.log(`error from the server ${error}`);
    }
  }
};
const updateUser = async (req, res) => {
    console.log(req.body);
    
    if (!req.body || Object.keys(req.body).length === 0) {
      res.status(400).json({
        status: 400,
        message: "Request body is empty",
      });
    } else {
      try {
        const {_id}=req.body
        console.log(_id);
        const userToUpdate = await UserModel.findOne({_id});
        console.log(userToUpdate);
        if (userToUpdate) {
          // Assuming req.body contains the updated data
          const updatedUser = await UserModel.updateOne(
            { _id: userToUpdate._id },
            { $set: req.body }
          );
            console.log(updatedUser);
          if (updatedUser.acknowledged) {
            res.status(200).json({ msg: "User Updated", data: req.body });
          } else {
            res.status(400).json({ msg: "User not updated" });
          }
        } else {
          res.status(400).json({ msg: "User not found" });
        }
      } catch (error) {
        console.log(`Error from the server ${error}`);
        res.status(500).json({ msg: "Internal Server Error" });
      }
    }
  };
  


const allmessages = async (req, res) => {
  try {
    const response = await ContactModel.find();

    // console.log(response);
    if (!response) {
      res.status(404).json({ msg: "No messages found" });
      return;
    }
    return res.status(200).json({ msg: "All messagae found", data: response });
  } catch (e) {
    console.log(`error from the server ${error}`);
  }
};

const singleMessage=async (req,res)=>{
  
  try {
    const response = await ContactModel.findOne(req.body)

    console.log(response);
    if (!response) {
      res.status(404).json({ msg: "message No found" });
      return;
    }
    return res.status(200).json({ msg: "single Message found", data: response });
  } catch (e) {
    console.log(`error from the server ${error}`);
  }
}

const deleteMessages = async (req, res) => {
  console.log(req.body);
  if (!req.body || Object.keys(req.body).length === 0) {
    res.send({
      status: 400,
      message: "id not found",
    });
  } else {
    try {
      const messageToDelete = await ContactModel.findOne(req.body);

      if (messageToDelete) {
        const response = await ContactModel.deleteOne(req.body);

        if (response.deletedCount === 1) {
          res.status(200).json({ msg: "Messages Deleted", data: messageToDelete });
        } else {
          res.status(400).json({ msg: "Messages not found or not deleted" });
        }
      } else {
        res.status(400).json({ msg: "Id Not Found" });
      }
    } catch (e) {
      console.log(`error from the server ${error}`);
    }
  }
};

const updateMessages = async (req, res) => {
  console.log(req.body);
  
  if (!req.body || Object.keys(req.body).length === 0) {
    res.status(400).json({
      status: 400,
      message: "Request body is empty",
    });
  } else {
    try {
      const {_id}=req.body
      console.log(_id);
      const messageToUpdate = await ContactModel.findOne({_id});
      console.log(messageToUpdate);
      if (messageToUpdate) {
        // Assuming req.body contains the updated data
        const updatedMessages = await ContactModel.updateOne(
          { _id: messageToUpdate._id },
          { $set: req.body }
        );
          console.log(updatedMessages);
        if (updatedMessages.acknowledged) {
          res.status(200).json({ msg: "User Updated", data: req.body });
        } else {
          res.status(400).json({ msg: "User not updated" });
        }
      } else {
        res.status(400).json({ msg: "User not found" });
      }
    } catch (error) {
      console.log(`Error from the server ${error}`);
      res.status(500).json({ msg: "Internal Server Error" });
    }
  }
};
module.exports = { allUsers, allmessages, deleteUser ,updateUser,deleteMessages,updateMessages,singleUser,singleMessage};
