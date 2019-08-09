export default class MentorModel {
  constructor() {
    this.mentors = [
      {
        mentorId: 1,
        first_name: 'Stuart',
        last_name: 'Dambi',
        email: 'stuartdambi@gmail.com',
        password: 'Root1234',
        address: 'Kampala',
        bio: 'Male',
        occupation: 'Programmer',
        expertise: 'Javascript',
      },
      {
        mentorId: 2,
        first_name: 'Musoke',
        last_name: 'Dan',
        email: 'danmusoke@gmail.com',
        password: 'Musoke1995',
        address: 'Mukono',
        bio: 'Male',
        occupation: 'Farmer',
        expertise: 'Piggery',
      },
    ];
  }

  addMentor(rawData) {
    this.mentors.push(rawData);
  }

  updateMentors() {
    return this.mentors.length;
  }

  checkMentorId(mentorId) {
    return this.mentors.find(mentor => mentor.id === parseInt(mentorId, 10));
  }
}
