import express from 'express';
import cors from 'cors';
import "dotenv/config";
import connectdb from './config/connectdb';

const app = express();
app.use(express.json());
app.use(cors());



app.listen(process.env.PORT, async() => {
  await connectdb();
  console.log(`Server is running on port ${process.env.PORT}`);
});