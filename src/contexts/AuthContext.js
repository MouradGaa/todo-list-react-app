import React,{createContext,useContext,useState,useEffect} from 'react'
import {auth} from '../firebase'

const AuthContext = createContext() ;

export function useAuth(){
    return useContext(AuthContext)
}


export function AuthContextProvider(props) {
    const [currentUser,setCurrentUser] = useState(null) 

    function signup(email,password) 
    {
        return auth.createUserWithEmailAndPassword(email,password) 
    }
    function login(email,password)
    {
        return auth.signInWithEmailAndPassword(email,password) 
    }
    function logout()
    {
       auth.signOut() 
    }
    function ResetPassword(email)
    {
       return auth.sendPasswordResetEmail(email)
    }

    useEffect(()=>{
        const unsubscribe = auth.onAuthStateChanged(user=>{  // fire base function that sets the user when the createUserWithEmailAndPassword is called
            setCurrentUser(user)    // onAuthStateChanged returns a function that unsubscribe when it runs once
        }) 

        return unsubscribe
    },[])
   
    const value = {currentUser,signup,login,logout,ResetPassword}

    return (
        <AuthContext.Provider value={value}>
            {props.children}
        </AuthContext.Provider>
    )
}
