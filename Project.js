import mongoose from "mongoose";

const ProjectSchema = new mongoose.Schema({
    projectName: String,
    description: String,
    snapshot: String,
});

export default mongoose.model("Project", ProjectSchema);