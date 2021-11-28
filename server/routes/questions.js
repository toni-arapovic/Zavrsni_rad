const express = require("express");
const router = express.Router();
const Questions = require("../models/question");
const client = require('@sendgrid/mail')
client.setApiKey(process.env.SENDGRID_API_KEY)

router.post("/", async (req, res) => {
    const question = new Questions({
      name: req.body.name,
      email: req.body.email,
      question: req.body.question,
    });

    const msg = {
        to: process.env.ADMINISTRATOR_EMAIL,
        from: 'webshop@zavrsnirad.xyz',
        subject: 'Pitanje',
        text: 'Korisnik: ' + req.body.name + " Email: " + req.body.email + " Pitanje: " + req.body.question
      }

      client
        .send(msg)
        .then(() => {
            console.log('Email sent')
        })
        .catch((error) => {
            console.error(error)
    })
  
    try {
      const newQuestion = await question.save();
      res.status(201).json(newQuestion);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  });

  module.exports = router;
