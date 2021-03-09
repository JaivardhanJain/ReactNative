import firebase from 'firebase';
require("@firebase/firestore");
  var firebaseConfig = {
    apiKey: "AIzaSyAXBEUU979VwcUZhWIL4h4yGd75RITIUzM",
    authDomain: "booksanta-ba4f1.firebaseapp.com",
    projectId: "booksanta-ba4f1",
    storageBucket: "booksanta-ba4f1.appspot.com",
    messagingSenderId: "336041575543",
    appId: "1:336041575543:web:4f2a0bcac12896528ff272"
  };
  firebase.initializeApp(firebaseConfig);
  export default firebase.firestore();