// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase,  ref, set, onValue, update, remove  } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyBgXqZEAhflwhX_uPTdZxWBOw1H742I05g",
  authDomain: "codelark1.firebaseapp.com",
  projectId: "codelark1",
  storageBucket: "codelark1.appspot.com",
  messagingSenderId: "1071514534271",
  appId: "1:1071514534271:web:cc16ab2cadec5ab0921a4a",
  measurementId: "G-500XGHG11S"
};

const app = initializeApp(firebaseConfig);
 
const database = getDatabase(app);
const db = getDatabase();
export {db, ref, set, onValue, update, remove  }