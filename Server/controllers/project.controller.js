import ProjectModel from '../models/project.model';
import ProjectService from '../services/Project.service'
import { validationResult } from 'express-validator';
import User from '../models/user.model';


export const createProject = async (req,res) => {

    const errors = validationResult(req);
    
    if (!errors.isEmpty()) {
        return res.status(400).json({errors: errors.array()})
    }

    try {
        const {name} = req.body;
        const loggedInUser = await User.findOne({email})
        const userId = loggedInUser._id
    
        const newProject = await ProjectService.createProject({ name, userId })
        res.status(201).json(newProject);

    } catch (error) {
        res.status(400).send(err.message);
    }




}