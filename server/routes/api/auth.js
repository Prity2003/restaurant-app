import { Router } from "express";
import validateRequest from "../../validate";
import "../../config/passport";
import {
  authenticateUser
} from "../../services/common/auth.service";

const router = Router();

router.post("/login", login);
router.delete("/logout", logoutUser);


async function login(req, res, next) {
  const required = {
    email: req.body.email,
    password: req.body.password,
  };

  const validation = await validateRequest(req, res, required);
  if (!validation.success) {
    return res.boom.badRequest(validation.errors);
  }

  try {
    req.params = "user";
    const response = await authenticateUser(req, res, next);
    req.session.userInfo = response;
    req.session.token = response.token;
    return res.status(200).json(response).end();
  } catch (e) {
    return res.boom.badRequest(e.toString());
  }
}

async function logoutUser(req, res) {
  try {
    await req.session.destroy();
    req.session = null;
    return res
      .status(200)
      .json({
        message: "User logout successfully.",
      })
      .end();
  } catch (e) {
    return res.boom.badRequest(e.toString());
  }
}

export default router;
