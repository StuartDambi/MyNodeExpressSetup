import express from 'express';
import config from 'config';
import userRouter from './route/user';
import mentorRouter from './route/mentor';

require('dotenv').config();

const app = express();
app.use(express.json());
app.use('/api/v1', userRouter);
app.use('/api/v1/', mentorRouter);

console.log(`Application name: ${config.get('name')}`);
const port = process.env.PORT || 5500;
app.listen(port, () => console.log(`MentorApp is running on port ${port}`));
module.exports = app;
