import UserModel from "../models/userModel.js";

export const getAllUsers = async (req, res) => {
    try {
      const user = await UserModel.find({ role: 0 });
      res.status(200).send({
        success: true,
        totalCount: user.length,
        message: "All User Fatched Successfully",
        user,
      });
    } catch (error) {
      console.log(error);
    }
  };
  
  export const deleteUser = async (req, res) => {
    try {
      const user = await UserModel.findByIdAndDelete(req.params.id);
      res.status(200).send({
        success: true,
        message: "User deleted successfully",
        user,
      });
    } catch (error) {
      console.log(error);
      res.status(404).send({
        success: false,
        message: "Error while deleting user",
        error,
      });
    }
  };