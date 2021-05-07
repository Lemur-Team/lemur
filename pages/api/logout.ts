import { NextApiRequest, NextApiResponse } from "next";
import { Session, withIronSession } from "next-iron-session";

const handler = async (
  req: NextApiRequest & { session: Session },
  res: NextApiResponse
) => {
  req.session.destroy();
  await req.session.save();
  res.status(200).send("prijdte zas");
};

export default withIronSession(handler, {
  password: "complex_password_at_least_32_characters_long",
  cookieName: "lemur",
  // if your localhost is served on http:// then disable the secure flag
  cookieOptions: {
    secure: process.env.NODE_ENV === "production",
  },
});
