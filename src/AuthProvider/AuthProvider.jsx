import { createContext, useState } from "react";
import { getAuth, createUserWithEmailAndPassword ,signInWithEmailAndPassword} from "firebase/auth";
import app from "../firebase/firebase.config";

const auth = getAuth(app);
export  const AuthContext = createContext(null);

const AuthProvider = ({children}) => {
 
    const [loading,setLoading] = useState(true)

    const handleSignUp =(email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const handleLogin = (email,password)=>{
        setLoading(true)
        return  signInWithEmailAndPassword(auth,email,password)
    }
    const authInfo ={
        handleLogin,
        handleSignUp,
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