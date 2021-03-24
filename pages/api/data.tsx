import firebase from "firebase";
import { NextApiRequest, NextApiResponse } from "next";

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
  // DB connection
  if (!firebase.apps.length) {
    firebase.initializeApp(clientCredentials);
  }
  //we need to parse our response
  var user = JSON.parse(req.body);
  //the response is being devided into variables
  var email = user.email;
  var password = user.password;
  //workaround for ids
  var username = email.substring(0, email.lastIndexOf("@"));

  const database = firebase.database();
  const userDatebaseRef = database.ref(username);

  // SET DATA TO DB
  userDatebaseRef.set({
    email,
    password,
  });
  // READ DATA FROM DB
  //const value = await(await userDatebaseRef.once("value")).val();

  res.status(200).json({
    user,
  });
};
