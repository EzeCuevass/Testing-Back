import { Router } from "express";
import mockController from "../controllers/mock.controller.js";
const router = Router();

router.get('/mockingusers',mockController.getMocks)
router.post('/generateData',mockController.createMock)

export default router