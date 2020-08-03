const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validateExperienceInput(data) {
  let errors = {};

  data.title = !isEmpty(data.title) ? data.title : '';
  data.societe = !isEmpty(data.societe) ? data.societe : '';
  data.from = !isEmpty(data.from) ? data.from : '';

  if (Validator.isEmpty(data.title)) {
    errors.title = 'Le nom du travail est requis';
  }

  if (Validator.isEmpty(data.societe)) {
    errors.societe = 'le nom de la societe est requis';
  }

  if (Validator.isEmpty(data.from)) {
    errors.from = 'la date initial est requise';
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
