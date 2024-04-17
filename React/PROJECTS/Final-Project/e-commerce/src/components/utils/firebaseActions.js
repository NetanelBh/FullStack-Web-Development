// Import DB reference and fuction to connect the DB
import db from "../firebase";
import { collection, doc, updateDoc, deleteDoc, addDoc } from "firebase/firestore";

export const addDocument = (collectionName, data) => {
  addDoc(collection(db, collectionName), data);
};

export const updateDocument = (collectionName, docId, newData, filter) => {
  updateDoc(doc(db, collectionName, docId), newData, filter);
};

export const deleteDocument = (collectionName, docId) => {
  deleteDoc(doc(db, collectionName, docId));
};