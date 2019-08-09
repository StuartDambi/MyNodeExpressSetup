import express from 'express';
import mentorController from '../controller/mentor';

const router = express.Router();

// Change user to mentor
router.get('/mentors', mentorController.viewMentors);

export default router;
