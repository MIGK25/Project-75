import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyACf3gHzvFa0LqVm2gbmCYMc9qXAJ-U-0w",
  authDomain: "e-ride-845cf.firebaseapp.com",
  projectId: "e-ride-845cf",
  storageBucket: "e-ride-845cf.appspot.com",
  messagingSenderId: "500655175671",
  appId: "1:500655175671:web:1ca309329cbafe6781e0f2"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
