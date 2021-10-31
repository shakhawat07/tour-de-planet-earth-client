import { useState, useEffect } from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, sendEmailVerification, sendPasswordResetEmail, updateProfile, signOut } from "firebase/auth";
import initializeAuthentication from '../FireBase/firebase.init';

initializeAuthentication();
const auth = getAuth();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [isLogin, setIsLogin] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const googleProvider = new GoogleAuthProvider();

    // google sign in 
    const signInUsingGoogle = () => {
        setIsLoading(true);
        return signInWithPopup(auth, googleProvider)
            .finally(() => { setIsLoading(false) });
    }

    const toggleLogin = e => {
        setError('');
        setName('');
        setEmail('');
        setPassword('');
        setIsLogin(e.target.checked)
    }

    const handleNameChange = e => {
        setName(e.target.value);
    }
    const handleEmailChange = e => {
        setEmail(e.target.value);
    }

    const handlePasswordChange = e => {
        setPassword(e.target.value)
    }

    const handleRegistration = e => {
        setError('');
        e.preventDefault();
        console.log(email, password);

        // password regex validation 
        if (password.length < 6) {
            setError('Password Must be at least 6 characters long.')
            return;
        }
        if (!/(?=.*[A-Z].*[A-Z])/.test(password)) {
            setError('Password Must contain 2 upper case');
            return;
        }
        if (!/(?=.*?[0-9])/.test(password)) {
            setError('Password contain at least 1 digit');
            return;
        }
        if (!/(?=.*?[#?!@$%^&*-])/.test(password)) {
            setError('Password contain at least one special character');
            return;
        }

        // login or registration validation 
        if (!isLogin) {
            processLogin(email, password);
        }
        else {
            registerNewUser(email, password);
        }
    }
    // proceed login 
    const processLogin = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
                console.log('Logged In', user);
                setError('Successfully logged in.');
                // setIsLogin(false);
            })
            .catch(error => {
                setError(error.message);
            })
    }
    // new registration 
    const registerNewUser = (email, password) => {
        setError('');
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
                console.log('Registered', user);
                setError('Congratulations! Your Registration is Now Complete.');
                verifyEmail();
                setUserName();
                // setError('');
            })
            .catch(error => {
                setError(error.message);
            })
    }

    const setUserName = () => {
        updateProfile(auth.currentUser, { displayName: name })
            .then(result => { })
    }

    const verifyEmail = () => {
        sendEmailVerification(auth.currentUser)
            .then(result => {
                console.log(result);
            })
    }

    const handleResetPassword = () => {
        sendPasswordResetEmail(auth, email)
            .then(result => { })
    }
    const logOut = () => {
        setIsLoading(true);
        signOut(auth)
            .then(() => {
                setUser({});
            })
            .finally(() => setIsLoading(false));
    }

    // user auth state observe
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            }
            else {
                setUser({});
            }
            setIsLoading(false);
        });
        return () => unsubscribe;
    }, [])

    return {
        user,
        name,
        error,
        isLoading,
        isLogin,
        setUser,
        setError,
        handleNameChange,
        handleEmailChange,
        handlePasswordChange,
        signInUsingGoogle,
        handleRegistration,
        toggleLogin,
        handleResetPassword,
        logOut
    }
}

export default useFirebase;