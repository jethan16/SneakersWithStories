const storiesController = require('express').Router();
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

module.exports = storiesController;