import "dotenv/config";
import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = firebase.initializeApp({
  apiKey: process.env.apiKey,
  authDomain: process.env.authDomain,
  databaseUrl: process.env.databaseUrl,
  projectId: process.env.projectId,
  storageBucket: process.env.storageBucket,
  messagingSenderId: process.env.messagingSenderId,
  appId: process.env.appId,
});

export { firebaseConfig as firebase };
