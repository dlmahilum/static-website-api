import dotenv from 'dotenv';
dotenv.config();

import mongoose from 'mongoose';

const connectionString = process.env.ATLAS_URI || '';
mongoose.connect(connectionString);
const db = mongoose.connection;


db.on("error", (err) => {
    console.error(err);
});

db.once("connected", () => {
    console.log("Database connection established");
});
