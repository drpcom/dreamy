import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCWSzDycgpmkOz4JWl7tzk6AWk5IjvgA9U",
    authDomain: "dreamy-d3553.firebaseapp.com",
    projectId: "dreamy-d3553",
    storageBucket: "dreamy-d3553.appspot.com",
    messagingSenderId: "201933833590",
    appId: "1:201933833590:web:6f1c344da5669e691b2657"
  };

  firebase.initializeApp(firebaseConfig);

  const db = firebase.firestore();

  export { db };