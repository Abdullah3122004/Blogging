import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-analytics.js";
  import { 
    getAuth,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
      } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-auth.js";
  import { 
    getStorage,
    ref,
    uploadBytes,
    getDownloadURL,  
  } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-storage.js";
  import { 
    getFirestore,
    doc,
    setDoc,
    getDoc,
    getDocs,
    collection,
    addDoc,
    updateDoc,
    arrayUnion,
    arrayRemove,
    query,
    where,
    deleteDoc
 } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-firestore.js";
 const firebaseConfig = {
    apiKey: "AIzaSyDu1cDZswl1ibtuCPz5e0l-5WIR6Kh4RvY",
    authDomain: "blogging-website-316e4.firebaseapp.com",
    projectId: "blogging-website-316e4",
    storageBucket: "blogging-website-316e4.appspot.com",
    messagingSenderId: "84890314677",
    appId: "1:84890314677:web:d84082cc9fddd395fa5bfc",
    measurementId: "G-7B43BHVN2N"
  };
   
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app)
  const db = getFirestore(app)
  const storage = getStorage(app)
  const analytics = getAnalytics(app);


 export{
  auth,
  db,
  storage,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  doc,
  setDoc,
  ref,
  uploadBytes,
  getDownloadURL,
  signOut,
  getDoc,
  collection,
  addDoc,
  getDocs,
  updateDoc,
  arrayUnion,
  arrayRemove,
  query,
  where,
  deleteDoc
};