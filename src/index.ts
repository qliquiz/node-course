import express from 'express';
import {usersRouter, usersListRouter} from './routes/userRoutes';


const app = express();

app.use('/users', usersRouter);
app.use('/users_list', usersListRouter);

const PORT = process.env.PORT;

app.listen(PORT, () => console.log(`The server is listening on port ${PORT}\n`));