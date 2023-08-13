import {initializeApp} from "firebase/app"
import {getFirestore} from "firebase/firestore"
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyB8ToF44FKopLJ9uN8md3ccITx3Jpsacdg",
    authDomain: "kino-3951f.firebaseapp.com",
    projectId: "kino-3951f",
    storageBucket: "kino-3951f.appspot.com",
    messagingSenderId: "285097232309",
    appId: "1:285097232309:web:38e8598e3f0aa8da6ebbfc",
    measurementId: "G-5STJ3TWDZ9"
  };

  const app = initializeApp(firebaseConfig)
  const db = getFirestore(app)

  export {db}