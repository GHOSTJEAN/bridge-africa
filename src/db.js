
import firebase from 'firebase/compat/app';
import 'firebase/compat/database';

const firebaseConfig = {

    apiKey: "AIzaSyDv1JLNyokzizdXQJ7UWkomOTjRXc2uo2A",
  
    authDomain: "bridge-africa-1dc4e.firebaseapp.com",
  
    databaseURL: "https://bridge-africa-1dc4e-default-rtdb.firebaseio.com",
  
    projectId: "bridge-africa-1dc4e",
  
    storageBucket: "bridge-africa-1dc4e.appspot.com",
  
    messagingSenderId: "194486862845",
  
    appId: "1:194486862845:web:8cf8d3cd3efa114bcfcf94"
  
  };
  

export const db = firebase
  .initializeApp(firebaseConfig).database()