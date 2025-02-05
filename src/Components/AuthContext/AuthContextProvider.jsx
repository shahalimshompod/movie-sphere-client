import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import { auth } from '../../firebase/firebase.init';


export const AuthContext = createContext(null) 

const AuthContextProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const [loginLoader, setLoginLoader] = useState(true)
    const [registerLoader, setRegisterLoader] = useState(true)

    // sign in with google
    const provider = new GoogleAuthProvider()
    const signInWithGoogle = () =>{
        setLoading(true)
        return signInWithPopup(auth, provider)
    }

    // creating user by name, email, imgUrl, password
    const createUserAccount = (email, password)=>{
        setRegisterLoader(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // login user
    const userLogin = (email, password)=>{
        setLoginLoader(true)
        return signInWithEmailAndPassword(auth, email, password);
    }

    // update user
    const updateUserData = (updatedData)=>{
        return updateProfile(auth.currentUser, updatedData)
    }

    // logout user
    const userLogout = ()=> {
        setLoading(true)
        return signOut(auth)
    }

    // observer
    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser)
            setLoading(false)
            setLoginLoader(false)
            setRegisterLoader(false)
        })
        return ()=>{
            unSubscribe();
        }
    },[])

    const authInfo = {
        user,
        loading,
        setUser,
        signInWithGoogle,
        userLogout,
        createUserAccount,
        updateUserData,
        userLogin,
        setLoading,
        loginLoader,
        setLoginLoader,
        registerLoader,
        setRegisterLoader,
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContextProvider;