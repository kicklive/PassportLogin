var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var Account = require('../models/account');

module.exports = function (app, express) {
//	app.use(passport.initialize());
//	app.use(passport.session());
	passport.use(new LocalStrategy(Account.authenticate()));
	passport.serializeUser(Account.serializeUser());
	passport.deserializeUser(Account.deserializeUser());


};