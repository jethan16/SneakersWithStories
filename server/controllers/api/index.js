const apiControllers = require('express').Router();

apiControllers.use('/users', require('./usersController'));
apiControllers.use('/stories', require('./storiesController'));
apiControllers.use('/secrets', require('./secretsController'));

module.exports = apiControllers;
