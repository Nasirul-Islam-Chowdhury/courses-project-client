import React from 'react';
import { createContext } from 'react';

export const AuthContext = createContext();
const AuthProvider = ({children}) => {
    

const info = "hi there"
    const authInfo = {info};
    return(
    <AuthContext.Provider value={authInfo}>
        {children}
    </AuthContext.Provider>
    )
};

export default AuthProvider;