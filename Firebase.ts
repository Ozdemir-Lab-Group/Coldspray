// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

require("dotenv").config();

const firebaseConfig = {
  apiKey: process.env.API_KEY,

  authDomain: process.env.API_KEY,

  projectId: process.env.PROJECT_ID,

  storageBucket: process.env.STORAGE_BUCKET,

  messagingSenderId: process.env.MESSAGING_ID,

  appId: process.env.APP_ID,

  measurementId: process.env.MEASUREMENT_ID,
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export default app;
