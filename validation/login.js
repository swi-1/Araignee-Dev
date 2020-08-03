const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validateLoginInput(data) {
  let errors = {};

  data.email = !isEmpty(data.email) ? data.email : '';
  data.password = !isEmpty(data.password) ? data.password : '';

  if (!Validator.isEmail(data.email)) {
    errors.email = "l'email est invalide";
  }

  if (Validator.isEmpty(data.email)) {
    errors.email = 'les mails ne correspondent pas';
  }

  if (Validator.isEmpty(data.password)) {
    errors.password = 'le mot de passe est requis';
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
