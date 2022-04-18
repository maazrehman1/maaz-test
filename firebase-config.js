import { initializeApp } from "firebase/app";
import { getFirestore } from  "@firebase/firestore";
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword ,signOut } from "firebase/auth";
import { useEffect, useState } from "react";

const firebaseConfig = {
  apiKey: "AIzaSyDwL5HKS3bN8acHs2cwn8NEYYmf59QWHqQ",
  authDomain: "test-46ca1.firebaseapp.com",
  projectId: "test-46ca1",
  storageBucket: "test-46ca1.appspot.com",
  messagingSenderId: "152307723182",
  appId: "1:152307723182:web:c68afd2f4c47f08a1a363f"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();

export function logout() {
  return signOut(auth);
}

export function login() {
  return createUserWithEmailAndPassword(auth, email, password);
}

export function signup(email, password){
return signInWithEmailAndPassword(auth , email, password);
}
export const db = getFirestore(app);

export function useAuth() {
  const [currentUser, setCurrentUser] = useState(); 
  return currentUser;

  useEffect(() => {
const unsub = onAuthStateChanged(auth, user => setCurrentUser(user));
return unsub;
  }, [])
}

 