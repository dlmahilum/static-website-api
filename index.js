import express from 'express';

const app = express();
const port = 5050;

app.get('/', (req, res) => {
    res.send('Welcome to my portfolio API!').status(200);
});

app.listen(port, () => {
    console.log(`Server API is listening to port ${port}`);
});