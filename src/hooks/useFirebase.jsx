import { getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from 'firebase/auth';
import { useEffect, useState } from "react";
import app from '../firebase.init';

const auth = getAuth(app)
const googleProvider = new GoogleAuthProvider();

const useFirebase = () =>{
    const [user, setUser] = useState({});

    const signInWithGoogle = () => {
        signInWithPopup(auth, googleProvider)
        .then(result => {
            const user = result.user;
            setUser(user);
            console.log(user);
        })
    }

    const handeSignOut = ()=>{
        signOut(auth)
        .then(()=>{})
    }

    useEffect(() => {
        onAuthStateChanged(auth,user => {
            setUser(user);
        })
    }, [])

    return {
        user,
        handeSignOut,
        signInWithGoogle
    }
}
export default useFirebase;