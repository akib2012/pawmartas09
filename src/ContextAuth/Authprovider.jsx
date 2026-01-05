import React, { useEffect, useState } from "react";
import { Authcontext } from "./Authcontext";
import { auth } from "../Firebase/Firebase";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";

const Authprovider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // console.log(loading);

  const provider = new GoogleAuthProvider();

  const userregester = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const usersinupwhithgoogle = () => {
    return signInWithPopup(auth, provider);
  };

  const login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
    
  };


  /* logout perform here */

  const logout = () =>{
    return signOut(auth)
    
  }


  /* updatev profile */

 const updateprofile = (updatedata) =>{
  return updateProfile(auth.currentUser, updatedata)
 }

 /* forget passwrd mail */

 const reaserpassword = (email) => {
  return sendPasswordResetEmail(auth, email)
 }


  /* on change auth claricfy */

  useEffect(() => {
    const unsubcribe = onAuthStateChanged(auth, (currentuser) => {

        // console.log("show the cuuren user:",currentuser);
        setUser(currentuser)
        setLoading(false)


        return () =>{
            unsubcribe();
        }
        

    });
  }, []);




  const authinfo = {
    userregester,
    usersinupwhithgoogle,
    login,
    logout,
    updateprofile,
    user,
    setUser,
    loading,
    setLoading,
    reaserpassword,
    
  

  };

  return (
    <Authcontext.Provider value={authinfo}>{children}</Authcontext.Provider>
  );
};

export default Authprovider;
