import mongoose from "mongoose";

const projectSchema = new mongoose.Schema({
    name: {
        type: String,
        lowercase: true,
        trim: true,
        unique: true,
    },

    users:[
        {
            type: mongoose.Schema.Types.ObjectId,
            ref:'user'
        }
    ]
})


const ProjectModal = mongoose.model('project', projectSchema)

export default ProjectModal;