const storiesController = require('express').Router();
const nodemailer = require('nodemailer');

const db = require('../../models')


// const { JWTVerifier } = require('../../lib/passport');

storiesController.get('/create/', (req, res) => {
  console.log('creating ')

  db.Stories.create({})
    .then(user => res.json(user))
    .catch(err => res.json(err));
});

storiesController.get('/',(req, res) => {

  db.Stories.find({})
    .then(results => {
      console.log(results)
      res.json(results);
    })
    .catch(error => {
      console.log(error)
      if (error) throw error
    })
})

storiesController.post('/email', (req, res) => {
  var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'nathan.gianelli98@gmail.com',
      pass: '347*98Ng'
    }
  });
  
  var mailOptions = {
    from: req.body.email,
    to: 'nathan.gianelli98@gmail.com',
    subject: 'Story submission',
    text: req.body.story
  };
  
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
      res.json(error);
    } else {
      res.send('Email sent: ' + info.response);
    }
  });
});

module.exports = storiesController;