const secretsController = require('express').Router();
const db = require('../../models')

const { JWTVerifier } = require('../../lib/passport');
secretsController.get('/create/', (req, res) => {
  console.log('creating ')

  db.Secret.create({})
    .then(user => res.json(user))
    .catch(err => res.json(err));
});

secretsController.get('/', JWTVerifier, (req, res) => {

  db.Secrets.find({})
    .then(results => {
      res.json(results);
    })
    .catch(error => {
      if (error) throw error
    })
});

secretsController.post('/api/stories', (req, res) => {
  db.Secret.create({})
    .then(story => res.json(story))
    .catch(err => res.json(err));
});

module.exports = secretsController;