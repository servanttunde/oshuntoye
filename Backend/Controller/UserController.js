import asyncHandler from "../Middleware/asyncHandler.js";
import User from "../Model/UserModel.js";

//@desc auth users and get token
//@routes POST /api/user/login
//@access Public
const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  console.log(user);
  if (user && (await user.matchPassword(password))) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
    });
  } else {
    res.status(401);
    throw new Error("Invalid Email or password");
  }
});

//@desc     Register user
//@routes POST /api/user/login
//@access Public

const RegisterUser = asyncHandler(async (req, res) => {
  res.send("Register user");
});
//@desc     Logout user/ clear cookie
//@routes POST /api/user/logout
//@access Private

const LogoutUser = asyncHandler(async (req, res) => {
  res.send("Logout user");
});

//@desc     Get  user profile
//@routes POST /api/users/profile
//@access Private

const getUserProfile = asyncHandler(async (req, res) => {
  res.send("get user profile");
});

//@desc     update  user profile
//@routes PUT /api/users/profile
//@access  private /Admin

const UpdateUserProfile = asyncHandler(async (req, res) => {
  res.send("Register user");
});

//@desc  Get users
//@routes GET /api/user/
//@access Private/Admin

const GetUserById = asyncHandler(async (req, res) => {
  res.send("Get user by id");
});

//@desc  Get users by id
//@routes GET /api/users:id/
//@access Private/Admin

const GetUsers = asyncHandler(async (req, res) => {
  res.send("Get users");
});

//@desc  Delete users
//@routes Delete /api/user/:id
//@access Private/Admin

const DeleteUser = asyncHandler(async (req, res) => {
  res.send("delete users");
});

//@desc  update users
//@routes PUT /api/user/:id
//@access Private/Admin

const UpdateUser = asyncHandler(async (req, res) => {
  res.send("update  users");
});

export {
  authUser,
  RegisterUser,
  GetUsers,
  getUserProfile,
  GetUserById,
  DeleteUser,
  UpdateUser,
  UpdateUserProfile,
  LogoutUser,
};
