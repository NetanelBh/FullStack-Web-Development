
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAWY5fPcWU4bcvCoqAKJpKigkgZeuuMpZg",
    authDomain: "fs45ex9.firebaseapp.com",
    projectId: "fs45ex9",
    storageBucket: "fs45ex9.appspot.com",
    messagingSenderId: "342386190388",
    appId: "1:342386190388:web:166d0332f72599c6590261"
    
    
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
