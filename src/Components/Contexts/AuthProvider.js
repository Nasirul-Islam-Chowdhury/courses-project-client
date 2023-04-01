import React, { useEffect, useState } from 'react';
import { createContext } from 'react';
import { createUserWithEmailAndPassword, getAuth, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../../Firebase/firebase.config'

export const AuthContext = createContext();
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();
const AuthProvider = ({ children }) => {
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState(null);
    const auth = getAuth(app);

    const register = (email, password) => {
     
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const googleSignin = () => {

        return signInWithPopup(auth, googleProvider)
    }
    const userSignin = (email, password) => {
 
        return signInWithEmailAndPassword(auth, email, password)
    }
    const updateUserProfile = (profile) => {
        return updateProfile(auth.currentUser, profile)
    }
    const handleGithubSignin = () => {

        return signInWithPopup(auth, githubProvider)
    }
    const logOut = () => {
        return signOut(auth);
    }
    useEffect(() =>{
        const unSuscribed = onAuthStateChanged(auth, currentUser => {
        setUser(currentUser);
            setLoading(false);
    });

        return ()=> unSuscribed;
    }, [])
    const authInfo = {
        register,
        googleSignin,
        handleGithubSignin,
        userSignin,
        user,
        logOut,
        loading,
        updateUserProfile
     };
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    )
};
export default AuthProvider;