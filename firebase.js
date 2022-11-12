import { initializeApp } from './node_modules/firebase/app';
import { getFirestore, collection, getDocs, addDoc  } from './node_modules/firebase/firestore/lite';

const config = {
    apiKey: "AIzaSyC3bWBLAl7Uh_T09uOrCShr890h5iI_phw",
  authDomain: "projeto1-9bad4.firebaseapp.com",
  projectId: "projeto1-9bad4",
  storageBucket: "projeto1-9bad4.appspot.com",
  messagingSenderId: "355792309864",
  appId: "1:355792309864:web:089a21e86ef6608cc3f5dd",
  measurementId: "G-5G7D6WPG93"
};

const app = initializeApp(config);
const db = getFirestore(app);

export { db, collection, getDocs, addDoc }