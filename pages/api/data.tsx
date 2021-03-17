import firebase from 'firebase';
import { NextApiRequest, NextApiResponse } from 'next';

const clientCredentials = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
}

export default async (_: NextApiRequest, res: NextApiResponse) => {
// DB connection
if (!firebase.apps.length) {
  firebase.initializeApp(clientCredentials)
}

const database = firebase.database();
const userDatebaseRef = database.ref("user");

// SET DATA TO DB
userDatebaseRef.set({
  tom: {
    username: "",
    email: "",
    password: "",
  }
});
// READ DATA FROM DB
const value = await(await userDatebaseRef.once("value")).val();

  res.status(200).json({
    name: "John Doe"
  });
};


