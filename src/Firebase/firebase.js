import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAK2dPbGbesZVcukvPI84-7xA46uxNzzxc",
  authDomain: "linkedin-clone-8db59.firebaseapp.com",
  projectId: "linkedin-clone-8db59",
  storageBucket: "linkedin-clone-8db59.appspot.com",
  messagingSenderId: "14766028226",
  appId: "1:14766028226:web:0e90e8a1eb4cd4c845125b",
  measurementId: "G-0JT7HXCTDN",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
