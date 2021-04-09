import { NextApiRequest, NextApiResponse } from "next";
import { sampleUserData } from "../../utils/sample-data";
import crypto from "crypto";
import { Session, withIronSession } from "next-iron-session";

const handler = async (
  req: NextApiRequest & { session: Session },
  res: NextApiResponse
) => {
  try {
    const body = JSON.parse(req.body);
    const login = String(body.login);
    const password = String(body.password);
    const passhash = crypto
      .createHash("md5")
      .update("nasekouzelneslovo" + password)
      .digest("hex");
    console.log(passhash, login);
    if (login === "vlk" && passhash === "b62b380e08439a53d02fc44aff759072") {
      req.session.set("user", {
        id: 230,
        admin: true,
      });
      await req.session.save();
      res.status(200).send("welcome");
    } else {
      res.status(401).send("go away from our village");
    }
  } catch (err) {
    console.error("login error", err);
    res.status(500).json({ statusCode: 500, message: "err.message" });
  }
};

export default withIronSession(handler, {
  password: "complex_password_at_least_32_characters_long",
  cookieName: "lemur",
  // if your localhost is served on http:// then disable the secure flag
  cookieOptions: {
    secure: process.env.NODE_ENV === "production",
  },
});
