import firebase from "firebase";
import { NextApiRequest, NextApiResponse } from "next";
import { encode } from "../../utils/emailEncoder";
import { clientCredentials } from "../../utils/database";
import { getPasshash } from "../../utils/password";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  console.log(req.body);

  //we need to parse our response
  var user = JSON.parse(req.body);
  //the response is being devided into variables
  var email = String(user.email);
  var password = String(user.password);

  if (!email) {
    res.status(400).send("Empty email");
    return;
  }

  if (password.length < 6) {
    res.status(400).send("Password too short");
    return;
  }

  if (email.indexOf("@") < 1) {
    res.status(400).send("Not valid email");
    return;
  }

  const passhash = getPasshash(password);

  try {
    if (!firebase.apps.length) {
      firebase.initializeApp(clientCredentials);
    }

    const database = firebase.database();
    const userDatebaseRef = database.ref(`users/${encode(email)}`);

    const record = await (await userDatebaseRef.once("value")).val();

    if (!!record) {
      res.status(400).send("User already exists");
      return;
    }

    userDatebaseRef.set({
      email,
      passhash,
    });

    res.send("Welcome");
  } catch (err) {
    console.error("DB Error", err);
    res.status(500).send("DB Error");
  }
};
