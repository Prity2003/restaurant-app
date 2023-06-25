import { User } from "../../models";
import passport from "passport";
import jwt from "jsonwebtoken";
import config from "config";

async function authenticateUser(req, res, next) {
  return new Promise((resolve, reject) => {
    passport.authenticate(
      req.params + "-local",
      {
        session: false,
      },
      (err, user, info) => {
        if (err) {
          reject("authentication failed.");
        }
        if (!user) {
          reject(info.message);
        } else {
          req.login(
            user,
            {
              session: false,
            },
            (err) => {
              if (err) {
                reject("authentication failed.");
              } else {
                // user = user.toJSON();
                let userInfo = {
                  id: user._id,
                  name: user.name,
                  email: user.email,
                  role: user.role
                };
                const token = jwt.sign(
                  {
                    id: userInfo.id,
                    role: userInfo.role,
                  },
                  config.get("jwtSecret")
                );
                userInfo.token = token;
                resolve(userInfo);
              }
            }
          );
        }
      }
    )(req, res, next);
  });
}

async function checkIfUseEmailExist(document) {
  const findQuery = {
    email: document.email,
    role: "user"
  };
  let userExists = await User.findOne(findQuery);
  if (userExists) {
    return userExists;
  } else return false;
}


async function getUserById(id) {
  const user = await User.findById(id);
  if (!user) {
    throw "No user Found";
  }
  return user;
}

export {
  authenticateUser,
  checkIfUseEmailExist,
  getUserById
};
