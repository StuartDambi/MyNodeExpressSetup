import express from 'express';
import userController from '../controller/user';
import mentorController from '../controller/mentor';
import auth from '../middleware/auth';

const router = express.Router();

// User sigup
router.post('/auth/signup', userController.userSignup);

// User signin
router.post('/auth/signin', userController.userSignin);

// Get all users
router.get('/users', auth, userController.getAllUsers);

// Change user to Mentor
router.put('/users/:id', auth, userController.changeToMentor);

// Get all Mentors
router.get('/mentors', mentorController.viewMentors);

module.exports = router;
