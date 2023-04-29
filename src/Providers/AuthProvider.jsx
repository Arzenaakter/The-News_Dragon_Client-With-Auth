import React, { useState } from 'react';

import { createContext } from 'react';
import app from '../firebase/firebase.config';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { useEffect } from 'react';

export const authContext = createContext(null)
const auth = getAuth(app)

const AuthProvider = ({children}) => {


    const  [user, setUser] = useState(null)
    const  [loading, setLoading] = useState(true)
    

    const createUser =(email,password)=>{
        setLoading(true)
      return  createUserWithEmailAndPassword(auth,email,password)
       
    }

    const loginUser = (email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }


    const logOut = ()=>{
        setLoading(true)
        signOut(auth)
    }
   

    useEffect(()=>{
      const unsubscribe =  onAuthStateChanged(auth,loggedUser =>{
            console.log('logged in user inside auth state',loggedUser);
            setUser(loggedUser)
            setLoading(false)
            
        })
        return ()=>{
            unsubscribe();

        } 
    },[])

   

    const authInfo={
        user,
        loading,
        createUser,
        loginUser,
        logOut

    }

    return (
        <authContext.Provider value={authInfo}>
            {children}
        </authContext.Provider>
    );
};

export default AuthProvider;