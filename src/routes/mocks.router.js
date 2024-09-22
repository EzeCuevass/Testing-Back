import { Router } from "express";
import mockController from "../controllers/mock.controller.js";
const router = Router();

router.post('/mockingusers',mockController.createMock)

export default router