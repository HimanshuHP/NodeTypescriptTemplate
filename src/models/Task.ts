import mongoose from "mongoose";
const SCHEMA = mongoose.Schema;

const TaskSchema = new SCHEMA({
    name: {
      type: String,
      Required: "Kindly enter the name of the task"
    },
    Created_date: {
      type: Date,
      default: Date.now
    },
    status: {
      type: [{
        type: String,
        enum: ["pending", "ongoing", "completed"]
      }],
      default: ["pending"]
    }
});

const Task = mongoose.model("Tasks", TaskSchema);
export default Task;