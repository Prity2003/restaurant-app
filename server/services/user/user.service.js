import { User } from "../../models";
async function createUser(user) {
  const userInfo = await User.create(user);
  return userInfo;
}

async function getUserById(id) {
  const user = await User.findById(id).lean();
  if (!user) {
    throw "No user Found";
  }
  return user;
}

export {
  createUser,
  getUserById
};
