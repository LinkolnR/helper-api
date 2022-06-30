import express from "express";
import { ArrayController } from "../controllers/ArrayController";

const router = express.Router();
const _controller = new ArrayController();

router.get("/array", _controller.getLista);

export = router;
