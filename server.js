import express from 'express';

const app = express();
const port =  4005;

app.use(express.json());

app.listen(port, () => {
    console.log(`server is running ${port}`)
})
