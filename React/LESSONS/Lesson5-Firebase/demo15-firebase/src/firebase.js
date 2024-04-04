import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyAA8fl0IubeZZTWz9EFdWcTvHA3f4wQszc',
  authDomain: 'fullstack-4fb4c.firebaseapp.com',
  projectId: 'fullstack-4fb4c',
  storageBucket: 'fullstack-4fb4c.appspot.com',
  messagingSenderId: '644466409118',
  appId: '1:644466409118:web:c69739eb344b94a1af458f',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
