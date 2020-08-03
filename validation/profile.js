const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validateProfileInput(data) {
  let errors = {};

  data.handle = !isEmpty(data.handle) ? data.handle : '';
  data.status = !isEmpty(data.status) ? data.status : '';
  data.niveau = !isEmpty(data.niveau) ? data.niveau : '';

  if (!Validator.isLength(data.handle, { min: 2, max: 40 })) {
    errors.handle = 'validation doit contenir entre 2 et 4 caractères';
  }

  if (Validator.isEmpty(data.handle)) {
    errors.handle = 'Une sécurite de profil est requise';
  }

  if (Validator.isEmpty(data.status)) {
    errors.status = 'staus est requis';
  }

  if (Validator.isEmpty(data.niveau)) {
    errors.niveau = 'le niveau est requis';
  }

  if (!isEmpty(data.website)) {
    if (!Validator.isURL(data.website)) {
      errors.website = "l'url n'est pas requis";
    }
  }

  if (!isEmpty(data.youtube)) {
    if (!Validator.isURL(data.youtube)) {
      errors.youtube = "L'url n'est pas valide pour youtube";
    }
  }

  if (!isEmpty(data.twitter)) {
    if (!Validator.isURL(data.twitter)) {
      errors.twitter = "l'url n'est pas valide pour twitter";
    }
  }

  if (!isEmpty(data.facebook)) {
    if (!Validator.isURL(data.facebook)) {
      errors.facebook = "l'url n'est pas valide pour facebook";
    }
  }

  if (!isEmpty(data.linkedin)) {
    if (!Validator.isURL(data.linkedin)) {
      errors.linkedin = "l'url n'est pas valide pour linkedin";
    }
  }

  if (!isEmpty(data.instagram)) {
    if (!Validator.isURL(data.instagram)) {
      errors.instagram = "l'url n'est pas valide pour instagram";
    }
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
