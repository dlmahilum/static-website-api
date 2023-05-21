import express from 'express';
import dotenv from 'dotenv';
import db from './dbConn.js';

dotenv.config();

const app = express();
const port = process.env.PORT;

app.get('/', async (req, res) => {
    let collection = await db.collection('projects')
    let projects = await collection.find({}).toArray();
    res.send(projects).status(200);
});

app.listen(port, () => {
    console.log(`Server API is listening to port ${port}`);
});