import {default as Task} from "../models/Task";
import { Request, Response } from "express";
export let listAllTasks = (req: Request, res: Response) => {
  Task.find({}, function(err, task) {
    if (err) {
      return res.send(err);
    }
    res.json(task);
  });
};

export let createTask = (req: Request, res: Response) => {
  const newTask = new Task(req.body);
  newTask.save(function(err, task) {
    if (err) {
      return res.send(err);
    }
    res.json(task);
  });
};

export let readTask = (req: Request, res: Response) => {
  Task.findById(req.params.taskId, function(err, task) {
    if (err) {
      return res.send(err);
    }
    res.json(task);
  });
};

export let updateTask = (req: Request, res: Response) => {
  Task.findOneAndUpdate({_id:req.params.taskId}, req.body, {new: true}, function(err, task) {
    if (err) {
      return res.send(err);
    }
    res.json(task);
  });
};
// Task.remove({}).exec(function(){});
export let deleteTask = (req: Request, res: Response) => {
  Task.remove({
    _id: req.params.taskId
  }, function(err) {
    if (err) {
      return res.send(err);
    }
    res.json({ message: "Task successfully deleted" });
  });
};