// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyBFUETxjl8HWyulpMlxb6Dt98ewfo9bLOA",

  authDomain: "coldspray-46453.firebaseapp.com",

  projectId: "coldspray-46453",

  storageBucket: "coldspray-46453.appspot.com",

  messagingSenderId: "200461085034",

  appId: "1:200461085034:web:7d01a0b37b5cfcbe9d9d13",

  measurementId: "G-EGP2NQZDV7",
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export default app;
