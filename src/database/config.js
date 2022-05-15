import { initializeApp } from "firebase/app";
import { getFirestore } from '@firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBGPku85jqlnpkGzCTHSc6IK6on8GZOrQU",
    authDomain: "crud-react-c8157.firebaseapp.com",
    projectId: "crud-react-c8157",
    storageBucket: "crud-react-c8157.appspot.com",
    messagingSenderId: "147580650551",
    appId: "1:147580650551:web:4ac1edb6ff87d61471abb2"
  };
  
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);


