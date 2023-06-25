import passport from "passport";
const authMiddware = passport.authenticate("jwt", { session: false });


async function sessionMiddleware(req, res, next) {
  if (!req.session.userInfo) {
    res.boom.unauthorized("Session is timeout.Please login");
  } else {
    next();
  }
}


export {
  authMiddware,
  sessionMiddleware
};
