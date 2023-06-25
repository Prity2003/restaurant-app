import { Router } from "express";
import passwordHash from "password-hash";
import {
  authMiddware,
  sessionMiddleware,
} from "../../../middleware/auth-guard.middleware";
import {
  createUser,
  getUserById
} from "../../../services/user/user.service";
import { checkIfUseEmailExist } from "../../../services/common/auth.service";

const router = Router();
// @route api/users
router.post("/register", registerUser);
router.get("/", [authMiddware, sessionMiddleware], getCurrentUserDetail);


async function registerUser(req, res) {
  const document = {
    email: req.body.email,
    role: "user",
  };

  try {
    const userExists = await checkIfUseEmailExist(document);
    if (userExists) {
      return res.boom.badRequest("You are already registered with us!");
    }

    const payload = {
      ...document,
      name: req.body.name,
      password: passwordHash.generate(req.body.password)
    };

    await createUser(payload);

    return res
      .status(200)
      .json({
        message:
          "You have registered successfully!",
      })
      .end();
  } catch (e) {
    return res.boom.badRequest(e.message);
  }
}

async function getCurrentUserDetail(req, res) {
  try {
    const userId = req.session.userInfo ? req.session.userInfo.id : "";
    console.log(userId);
    const response = await getUserById(userId);
    return res.status(200).json(response).end();
  } catch (e) {
    return res.boom.unauthorized(e.toString());
  }
}

export default router;
