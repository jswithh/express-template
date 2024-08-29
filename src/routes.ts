import express from "express";
import usersRoutes from "./domain/users/user-routes";

const router = express.Router();

router.use("/users", usersRoutes);

export default router;
