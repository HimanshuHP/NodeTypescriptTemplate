import express from "express";
import * as taskController from "../controllers/task";
import * as homeController from "../controllers/home";
const router = express.Router();

router.get("/",homeController.index);

router.post("/v1/tasks",taskController.createTask);
router.get("/v1/tasks", taskController.listAllTasks);

router.get("/v1/tasks/:id", taskController.readTask);
router.put("/v1/tasks/:id", taskController.updateTask);
router.delete("/v1/tasks/:id", taskController.deleteTask);

export default router;