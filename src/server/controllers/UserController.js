const User = require('./../schemas/UserSchema');

const UserController = {

  createUser(req, res, next) {
    const { username, password, firstName, lastName, preference } = req.body;
    User.create({ username, password, firstName, lastName, preference }, (err, user) => {
      if (err) return res.status(400).send(err);
      res.locals.db_user = user;
      next();
    });
  },

  verifyUser(req, res, next) {
    const { username, password } = req.body;
    User.findOne({ username, password }, (err, user) => {
      if (err) return res.status(400).send(err);
      if (user === null) return res.status(400).send('User Not Found');
      res.status(200);
      next();
    });
  },

};

module.exports = UserController;
