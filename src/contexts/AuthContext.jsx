import React, { useContext, useState } from 'react';
import { auth } from '../firebaseConfig';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, sendEmailVerification, sendPasswordResetEmail } from 'firebase/auth';
import { useEffect } from 'react';

// import { useNavigate } from 'react-router';

const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext)
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState();
  const [Uid, setUid] = useState([]);

  const signUp = async (email, password) => {
    const res = await createUserWithEmailAndPassword(auth, email, password)
    Uid.push(res.user.uid)
    localStorage.setItem('loginID', res.user.uid)
    //console.log(Uid);

    await sendEmailVerification(auth.currentUser)
  }

  const logIn = async (email, password) => {
    const res = await signInWithEmailAndPassword(auth, email, password)

    localStorage.setItem('loginID', res.user.uid)
    //localStorage.setItem("userID", res.user.uid);
  }
  function logOut() {
    signOut(auth);
    localStorage.clear();
  }
  // sendPasswordResetEmail(auth, email)

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      localStorage.setItem('currentUser', JSON.stringify(auth.currentUser.uid));
      // setLoading(false);
    })


    return () => {
      unsub();
    }

  }, []);
  
  const loginID = localStorage.getItem('loginID')

  const value = {
    currentUser,
    signUp,
    logIn,
    logOut,
    Uid,
    loginID,
   
  }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;