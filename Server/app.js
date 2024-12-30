import express from 'express';
import morgan from 'morgan';
import connectDB from './db/db.js';
import userRoutes from './routes/user.routes.js';
import cors from 'cors';
import cookieParser from 'cookie-parser';

connectDB();
const app = express();

app.use(morgan('dev'));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use(cors({ origin: 'http://localhost:3000' }));

app.use('/users', userRoutes);


app.get('/', (req, res) => {   
    res.send('Hello World!');
})


export default app;