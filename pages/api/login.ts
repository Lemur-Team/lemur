import { NextApiRequest, NextApiResponse } from "next";
import { Session, withIronSession } from "next-iron-session";
import firebase from "firebase";
import { clientCredentials } from "../../utils/database";
import { encode } from "../../utils/emailEncoder";
import { getPasshash } from "../../utils/password";

const handler = async (
  req: NextApiRequest & { session: Session },
  res: NextApiResponse
) => {
  const body = JSON.parse(req.body);
  const login = String(body.login);
  const password = String(body.password);
  const passhash = getPasshash(password);
  console.log(passhash, login);
  try {
    if (!firebase.apps.length) {
      firebase.initializeApp(clientCredentials);
    }

    const database = firebase.database();
    const userDatebaseRef = database.ref(`users/${encode(login)}`);

    const record = await (await userDatebaseRef.once("value")).val();
    console.log(record, passhash);
    if (!!record && record.passhash === passhash) {
      req.session.set("user", {
        login,
      });
      await req.session.save();
      res.status(200).send("welcome");
      return;
    }

    res.status(401).send("go away from our village");
  } catch (err) {
    console.error("DB Error", err);
    res.status(500).send("DB Error");
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
