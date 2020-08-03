const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validateExperienceInput(data) {
  let errors = {};

  data.school = !isEmpty(data.school) ? data.school : '';
  data.degree = !isEmpty(data.degree) ? data.degree : '';
  data.fieldofstudy = !isEmpty(data.fieldofstudy) ? data.fieldofstudy : '';
  data.from = !isEmpty(data.from) ? data.from : '';

  if (Validator.isEmpty(data.school)) {
    errors.school = "le champ du nom des écoles est obligatoire";
  }

  if (Validator.isEmpty(data.degree)) {
    errors.degree = 'le champ du niveau scolaire est requis';
  }

  if (Validator.isEmpty(data.fieldofstudy)) {
    errors.fieldofstudy = "le champ des études est requis ";
  }

  if (Validator.isEmpty(data.from)) {
    errors.from = 'la date inital est requise';
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
