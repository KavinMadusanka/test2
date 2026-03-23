import colors from 'colors';
import dotenv from 'dotenv';
import express from 'express';
import morgan from 'morgan';
import connectDB from './config/db.js';

dotenv.config();

connectDB();

const app = express();
app.use(express.json());
app.use(morgan('dev'));

app.listen(process.env.PORT , () => {
  console.log(`Server is running on port ${process.env.PORT }`.green);
});