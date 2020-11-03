import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
apiKey: "AIzaSyBsYb_HGOBtfsQofgnStAR85t5IgcviCKo",
  authDomain: "clone-65279.firebaseapp.com",
  databaseURL: "https://clone-65279.firebaseio.com",
  projectId: "clone-65279",
  storageBucket: "clone-65279.appspot.com",
  messagingSenderId: "679123259666",
  appId: "1:679123259666:web:e6f4bc5a5cc2c55b8f63cb",
  measurementId: "G-E9X8T3D5KW"
});

const auth = firebase.auth();

export { auth};