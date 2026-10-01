import express from "express";
import { createPensioner } from "../controllers/pensionerController.js";

const router = express.Router();

router.post("/", createPensioner);

export default router;