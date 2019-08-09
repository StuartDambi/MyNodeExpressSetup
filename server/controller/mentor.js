/* eslint-disable camelcase */
import MentorModel from '../model/mentor';

const MentorData = new MentorModel();

const mentorController = {
  viewMentors: (req, res) => {
    res.status(200).send({
      status: res.statusCode,
      data: MentorData.mentors,
    });
  },
};
module.exports = mentorController;
