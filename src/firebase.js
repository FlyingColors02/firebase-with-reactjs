import * as firebase from "firebase";
let firebaseConfig = {
    apiKey: "AIzaSyBThmIKXpJJ7Add7712yM35Dd4jClAtE7g",
    authDomain: "fir-firstproject-1c695.firebaseapp.com",
    databaseURL: "https://fir-firstproject-1c695.firebaseio.com",
    projectId: "fir-firstproject-1c695",
    storageBucket: "fir-firstproject-1c695.appspot.com",
    messagingSenderId: "48913369835",
    appId: "1:48913369835:web:d646c0fad183d328fe0cae"
  };
  // Initialize Firebase
  let db= firebase.initializeApp(firebaseConfig);
  let database= firebase.database(db).ref("/users");
  export default database;