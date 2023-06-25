import passport from "passport";
import passwordHash from "password-hash";
import { Strategy as LocalStrategy } from "passport-local";
import { ExtractJwt, Strategy as JWTStrategy } from "passport-jwt";
import config from "config";
import { User } from "../models";

passport.serializeUser(function (user, cb) {
  cb(null, user);
});
passport.deserializeUser(function (obj, cb) {
  cb(null, obj);
});

/**
 * Sign in using Email and Password.
 */
passport.use(
  "user-local",
  new LocalStrategy(
    { usernameField: "email", passReqToCallback: true },
    (req, email, password, done) => {
      User.findOne({
        email: email,
        role: "user"
      }).then((user) => {
        if (!user) {
          return done(undefined, false, {
            message: `Email ${email} not found.`,
          });
        }
        if (req.body.isHashPassword) {
          if (password === user.password) {
            return done(undefined, user);
          } else {
            return done(undefined, false, { message: "Invalid password." });
          }
        } else if (passwordHash.verify(password, user.password)) {
          return done(undefined, user);
        } else {
          return done(undefined, false, { message: "Invalid password." });
        }
      });
    }
  )
);

passport.use(
  new JWTStrategy(
    {
      jwtFromRequest: ExtractJwt.fromAuthHeaderWithScheme("bearer"),
      secretOrKey: config.get("jwtSecret"),
    },
    function (jwtPayload, cb) {
      //find the user in db if needed
      return User.findOne({
        _id: jwtPayload.id,
        role: jwtPayload.role,
      })
        .then((user) => {
          return cb(null, user);
        })
        .catch((err) => {
          return cb(err);
        });
    }
  )
);

/**
 * Login Required middleware.
 */
exports.isAuthenticated = (req, res, next) => {
  if (req.isAuthenticated()) {
    return next();
  }

  res.redirect("/login");
};

/**
 * Authorization Required middleware.
 */
exports.isAuthorized = (req, res, next) => {
  const provider = req.path.split("/").slice(-1)[0];

  if (_.find(req.user.tokens, { kind: provider })) {
    next();
  } else {
    res.redirect(`/auth/${provider}`);
  }
};
