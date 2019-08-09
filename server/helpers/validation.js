import Joi from '@hapi/joi';

function validateUser(rawData) {
  const schema = Joi.object().keys({
    first_name: Joi.string().alphanum().min(3).max(30)
      .required(),
    last_name: Joi.string().alphanum().min(3).max(30)
      .required(),
    email: Joi.string().email()
      .required(),
    password: Joi.string().regex(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/)
      .required(),
    address: Joi.string().alphanum().min(3).max(30)
      .required(),
    bio: Joi.string().alphanum().min(3).max(30)
      .required(),
    occupation: Joi.string().alphanum().min(3).max(30)
      .required(),
    expertise: Joi.string().alphanum().min(3).max(30)
      .required(),
    isAdmin: Joi.boolean()
      .required(),
  });
  // Validate the data that has been entered by user
  const results = Joi.validate(rawData, schema);
  return results;
}

function validateLogin(rawData) {
  const schema = Joi.object().keys({
    email: Joi.string().email()
      .required(),
    password: Joi.string().regex(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/)
      .required(),
  });
  const results = Joi.validate(rawData, schema);
  return results;
}

function validateMentorChange(rawData) {
  const schema = Joi.object().keys({
    mentorId: Joi.number()
      .required(),
  });
  const results = Joi.validate(rawData, schema);
  return results;
}
module.exports = {
  validateUser,
  validateLogin,
  validateMentorChange,
};
