import express from 'express';

const app = express();
const port = 5050;

app.get('/', (req, res) => {
    res.send('hello world').status(200);
});

app.listen(port, () => {
    console.log(`Server API is listening to port ${port}`);
});