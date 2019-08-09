const regData = {
  first_name: 'mukisa',
  last_name: 'ronald',
  email: 'ronaldmukisa@gmail.com',
  password: 'Root1234',
  address: 'Kampala',
  bio: 'Man',
  occupation: 'Programmer',
  expertise: 'Wordpress',
  isAdmin: true,
};
const regDataFalse = {
  first_name: 'mukisa',
  last_name: 'ronald',
  email: 'ronaldmukisa@gmail.com',
  password: 'Root1234',
  address: 'Kampala',
  bio: 'Man',
  occupation: 'Programmer',
  expertise: 'Wordpress',
  isAdmin: false,
};

const regData1 = {
  first_name: 'mukisa',
  last_name: 'ronald',
  email: 'ronaldmukisa@gmail.com',
  password: 'Root1234',
  address: 'Kampala',
  bio: 'man',
  occupation: 'Programmer',
  expertise: 'software',
  isAdmin: true,
};
const regData2 = {
  first_name: 'mukisa',
  last_name: 'ronald',
  email: 'ronaldmukisa@gmail.com',
  password: 'Root1234',
  address: 'Kampala',
  bio: 'man',
  occupation: 'Programmer',
  expertise: '',
  isAdmin: true,
};
const regData3 = {
  id: 1,
  first_name: 'mukisa',
  last_name: 'ronald',
  email: 'ronaldmukisa@gmail.com',
  password: 'Roo',
  address: 'Kampala',
  bio: 'man',
  occupation: 'Programmer',
  expertise: 'software',
  isAdmin: true,
};
const logindata = {
  email: 'ronaldmukisa@gmail.com',
  password: 'Root1234',
};
const logindataFalse = {
  email: 'ronaldmukisa@gmail.com',
  password: 'Root1234',
};
const logindata1 = {
  email: 'ronaldmukisa@gmail.com',
  password: 'Root4321',
};
const logindata2 = {
  email: 'ronaldmukisa@gmail.com',
  password: '',
};
const logindata3 = {
  email: 'johndoe@gmail.com',
  password: 'Root1234',
};

module.exports = {
  regData,
  regData1,
  regData2,
  regData3,
  logindata,
  logindata1,
  logindata2,
  logindata3,
  regDataFalse,
  logindataFalse,
};
