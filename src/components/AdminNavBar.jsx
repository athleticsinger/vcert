import React, { useEffect, useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { doc, getDoc } from "firebase/firestore";
import { db } from '../firebaseConfig';




function AdminNavBar() {
    const [userData, setUserData] = useState([]);
    const {currentUser, loginID} = useAuth();

    useEffect(()=>{

        const getData = async ()=>{
          try{
            //console.log(currentUser?.uid);
            const docRef = doc(db, "universities", loginID || currentUser);
            const docSnap = await getDoc(docRef);
            // console.log(auth.currentUser?.uid)
            
            if (docSnap.exists()) {
              setUserData(docSnap.data())
            //   localStorage.setItem()
             
              //console.log("Document data:", docSnap.data());
            } else {
              // doc.data() will be undefined in this case
              console.log("No such document!");
            }
          }
          catch(err){
            console.log(err);
          }
        }
        getData()
      },[currentUser])
      
    return (
        <div className='AdminNav navbar  navbar-light bg-white'>
           {/* <div className='AdminNav__inner d-flex justify-content-space-between'> */}
        <p className='user'>{userData.universityName ? userData.universityName : 'University of Benin'}</p>
                <div className='d-flex justify-content-space-between'>
                    
                   <button className='btn btn-success'>Connect Wallet</button>
                </div>
           {/* </div> */}
        </div>
    );
}

export default AdminNavBar;