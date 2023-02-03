import express from "express";
import userController from "../controllers/user.controller";
import { authUser } from "../middlewares/authToken.middlewares";

const router = express.Router();

router.get("/verify/:email/:uniqueString", userController.verifyEmail);

router.get("/verified", userController.verified);

router.get("/get-user", userController.getUser);

router.post("/create-user", userController.createUser);

router.post("/login", userController.login);

router.post("/login-token", userController.loginByToken);

router.put("/update-user", authUser, userController.updateUser);

router.post("/send-email", userController.sendMail);

export default router;
