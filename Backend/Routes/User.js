import express from "express";
const router = express.Router();
import {
  authUser,
  GetUsers,
  UpdateUser,
  RegisterUser,
  getUserProfile,
  GetUserById,
  DeleteUser,
  UpdateUserProfile,
  LogoutUser,
} from "../Controller/UserController.js";

router.route("/").post(RegisterUser).get(GetUsers);
router.post("/logout", LogoutUser);
router.post("/login", authUser);
router.route("/profile").get(getUserProfile).put(UpdateUserProfile);
router.route("/:id").delete(DeleteUser).get(GetUserById).put(UpdateUser);
export default router;
