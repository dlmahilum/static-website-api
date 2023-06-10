import "./dbConn.js";
import express from 'express';
import dotenv from 'dotenv';
dotenv.config();

import Project from './Project.js';

const app = express();
const port = process.env.PORT;
//it will convert JavaScript object to JSON object
const jsonParser = express.json();

//retrieve all objects from the database
app.get('/', async (req, res) => {
    let collection = await db.collection('projects')
    let projects = await collection.find({}).toArray();
    res.send(projects).status(200);
});

//creating a new object
app.post("/projects", jsonParser, async (request, response) => {
    try {
        const newProject = new Project(request.body);
        const result = await newProject.save();
        response.status(200).json(result);
    }catch (error){
        response.status(400).json({message:error.message});
    }
})

app.listen(port, () => {
    console.log(`Server API is listening to port ${port}`);
});