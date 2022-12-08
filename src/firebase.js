import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
    apiKey: "AIzaSyBQS17kc6S1xhaFfZuzSuQhGc-kefqcfbs",
    authDomain: "jcwd2203.firebaseapp.com",
    projectId: "jcwd2203",
    storageBucket: "jcwd2203.appspot.com",
    messagingSenderId: "812675825135",
    appId: "1:812675825135:web:e263f132116ffccd090a1a"
  };
  

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
