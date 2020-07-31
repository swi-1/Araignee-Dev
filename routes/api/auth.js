const express = require("express");
const router = express.Router();
const bcrypt = require('bcrypt')
const auth = require("../../middleware/auth")
const jwt = require('jsonwebtoken')
const config = require('config')
const{check,validationResult} = require('express-validator/check')

const User = require('../../models/User')
// api/auth

router.get("/",auth,async (req, res) => {
    try{
        const user = await User.findById(req.user.id).select('-password');
        res.json(user)
    }catch(err){
        console.error(err.message);
        res.status(500).send("erreur serveur")

    }
});

router.post(
  "/",
  [
    check("name", "Le nom est requis").not().isEmpty(),
    check("email", "Merci d'ajouter un email").isEmail(),
    check(
      "mot de passe",
      "entrer un mot de passe avec 6 caractere minimum"
    ).exists(),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;

    try {
      let user = await User.findOne({ email: email });

      if (!user) {
        return res.status(400).json({ errors: [{ msg: "identifiant Invalide" }] });
      }
      
      const isMatch = await bcrypt.compare(password,user.password)
      
      if(!isMatch){
        return res
          .status(400)
          .json({ errors: [{ msg: "identifiant Invalide " }] });
      }
      //regarder si un utilisateur est auth
      //gravatar
      //crypter le pass
      const payload = {
        user: {
          id: user.id,
        },
      };

      jwt.sign(
        payload,
        config.get("jwtSecret"),
        { expiresIn: 360000 },
        (err, token) => {
          if (err) throw err;
          res.json({ token });
        }
      );
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Erreur Serveur");
    }
  }
);


module.exports = router;
