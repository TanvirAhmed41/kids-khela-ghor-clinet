import { createContext, useEffect, useState } from "react";
import { getAuth, createUserWithEmailAndPassword ,signInWithEmailAndPassword, signInWithPopup, signOut, onAuthStateChanged} from "firebase/auth";
import app from "../firebase/firebase.config";

export  const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user,setUser] = useState(null);
    const [loading,setLoading] = useState(true)

    const handleSignUp =(email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const handleLogin = (email,password)=>{
        setLoading(true)
        return  signInWithEmailAndPassword(auth,email,password)
    }

    const logOut = ()=>{
        return signOut(auth) ;
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
          setUser(currentUser);
          setLoading(false);
        });
        return () => {
          return unSubscribe;
        };
      }, []);

    const authInfo ={
        handleLogin,
        handleSignUp,
        logOut,
        user,
        loading
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {
                children
            }
        </AuthContext.Provider>
    );
};

export default AuthProvider;