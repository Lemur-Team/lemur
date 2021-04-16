import firebase from "firebase";
import { NextApiRequest, NextApiResponse } from "next";
import crypto from "crypto";

const clientCredentials = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

export default async (req: NextApiRequest, res: NextApiResponse) => {
  console.log(req.body);

  //we need to parse our response
  var user = JSON.parse(req.body);
  //the response is being devided into variables
  var email = String(user.email);
  var password = String(user.password);

  if (email.length === 0) {
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

  var pwdLength = password.length;
  console.log("Password length is " + pwdLength);

  const passhash = crypto
    .createHash("md5")
    .update("doTheMagicTrick" + password)
    .digest("hex");
  console.log(passhash);
  //workaround for ids
  var username = String(email.substring(0, email.lastIndexOf("@")));
  console.log("Username: " + username);

  try {
    res.status(200).send("user registered");
  } catch (err) {
    res.status(500).json({ statusCode: 500, message: "err.message" });
  }

  // DB connection
  if (!firebase.apps.length) {
    firebase.initializeApp(clientCredentials);
  }

  const database = firebase.database();
  const userDatebaseRef = database.ref(username);

  // SET DATA TO DB
  // Empty password validation

  userDatebaseRef.set({
    email,
    passhash,
  });

  // READ DATA FROM DB
  //const value = await(await userDatebaseRef.once("value")).val();
};
