// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { enableIndexedDbPersistence } from "firebase/firestore"; 

const firebaseConfig = {
    apiKey: "AIzaSyDtI_ANSYSJ_h9Wg0vu7fFV3kgJdcjoMyY",
    authDomain: "vercel-84767.firebaseapp.com",
    projectId: "vercel-84767",
    storageBucket: "vercel-84767.appspot.com",
    messagingSenderId: "609981348342",
    appId: "1:609981348342:web:bad15c426f331786566fd7",
    measurementId: "G-FM33VMZLSQ"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
enableIndexedDbPersistence(db)
  .catch((err) => {
      if (err.code === 'failed-precondition') {
        console.log("Persistence is Working")
          // Multiple tabs open, persistence can only be enabled
          // in one tab at a a time.
          // ...
      } else if (err.code === 'unimplemented') {
        console.log("Persistence is NOT Working")
          // The current browser does not support all of the
          // features required to enable persistence
          // ...
      }
  });

//export default app