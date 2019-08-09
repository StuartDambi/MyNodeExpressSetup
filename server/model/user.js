export default class UserModel {
  constructor() {
    this.users = [{
      id: 1,
      first_name: 'Stuart',
      last_name: 'Dambi',
      email: 'stuartdambi@gmail.com',
      password: 'Mbulambago1.',
      address: 'Kampala',
      bio: 'Male',
      occupation: 'Programmer',
      expertise: 'Javascript',
      isAdmin: true,
    },
    {
      id: 2,
      first_name: 'Musoke',
      last_name: 'Dan',
      email: 'danmusoke@gmail.com',
      password: 'kasibante7389.',
      address: 'Mukono',
      bio: 'Male',
      occupation: 'Farmer',
      expertise: 'Piggery',
      isAdmin: false,
    },
    ];
  }

  addUser(rawData) {
    this.users.push(rawData);
  }

  userExists(rawData) {
    return this.users.find(user => user.email === rawData.email);
  }

  updateUsers() {
    return this.users.length;
  }

  deleteId() {
    delete this.users.id;
  }

  addMentorId(rawData) {
    this.users.mentorId = rawData;
  }
}
