const Authentication = require('./controllers/authentication');
const passportService = require('./services/passport');
const passport = require('passport');

const requireAuth = passport.authenticate('jwt', { session: false });
const requireSignin = passport.authenticate('local', { session: false });

module.exports = function(app) {
  app.get('/profile', requireAuth, Authentication.profile);
  app.post('/login', requireSignin, Authentication.login);
  app.post('/register', Authentication.register);
}
