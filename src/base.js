import Rebase from "re-base"
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/database';

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCkz8XSQS9mJlguVfKNFFBucbZuRIAAi0U",
  authDomain: "klopa-kao-kod-kuce.firebaseapp.com",
  databaseURL: "https://klopa-kao-kod-kuce-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "klopa-kao-kod-kuce",
  storageBucket: "klopa-kao-kod-kuce.appspot.com",
  messagingSenderId: "574972224631",
  appId: "1:574972224631:web:858f417708c1bacada1272",
  measurementId: "G-WCHH2GGFLF"
});
// export const fireAnalytics = firebase.analytics(firebaseApp);
const base = Rebase.createClass(firebaseApp.database());

// This is a named export
export { firebaseApp };

// this is a default export
export default base;