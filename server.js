import express from 'express';

const app = express();
const port =  4005;

app.use(express.json());

app.listen(port, () => {
    console.log(`server is running ${port}`)
})


// mongodb+srv://Davizinxx:<db_password>@cluster0.fztrgho.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
//