import express from 'express';
import ShoesRouter from './src/routes/shoes.router.js'
const app = express();
const port =  4005;

app.use(express.json());
app.use(ShoesRouter)

app.listen(port, () => {
    console.log(`server is running ${port}`)
})


