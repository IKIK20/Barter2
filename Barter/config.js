import firebase from 'firebase';
require('@firebase/firestore')

var firebaseConfig = {
    apiKey: "AIzaSyCjGY-BTaQbHgh2HItV9AIxZpx8a8R9LZc",
    authDomain: "barter-system-fd7f2.firebaseapp.com",
    projectId: "barter-system-fd7f2",
    storageBucket: "barter-system-fd7f2.appspot.com",
    messagingSenderId: "879286125624",
    appId: "1:879286125624:web:466ba01a7e10c2a004d2cd"
  };


// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
