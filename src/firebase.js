import firebase from "firebase";

const config = {
  apiKey: "AIzaSyBqNvVfXm9fXFSppoZPDE9zRKcvLtwP48s",
  authDomain: "grantdocsdb.firebaseapp.com",
  databaseURL: "https://grantdocsdb.firebaseio.com",
  projectId: "grantdocsdb",
  storageBucket: "grantdocsdb.appspot.com",
  messagingSenderId: "568958780836"
};

firebase.initializeApp(config);

export default firebase;

export const database = firebase.database();
