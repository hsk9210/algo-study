const { json } = require("body-parser");
const app = require("express")();
const passport = require("passprot")

var GoogleStrategy = require("passport-google-oauth20").Strategy;

passport.use(
	new GoogleStrategy(
		{
			clientID: GOOGLE_CLIENT_ID,
			clientSecret: GOOGLE_CLIENT_SECRET,
			callbackURL: "http://www.example.com/auth/google/callback",
		},
		function (accessToken, refreshToken, profile, cb) {
			User.findOrCreate({ googleId: profile.id }, function (err, user) {
				return cb(err, user);
			});
		}
	)
);



passport.use( new Bearer Stragtgy {

  
});



app.use(json());

app.post(
	"/login",
	passport.authenticate("googleOauth", {
		successRedirect: "/",
		failureRedirect: "/login",
	})
);


