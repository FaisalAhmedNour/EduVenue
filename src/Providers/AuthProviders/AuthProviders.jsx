import {
    createContext,
    useEffect,
    useState
} from "react";
import {
    GithubAuthProvider,
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile,
} from "firebase/auth";
import { app } from "../../firebase/firebase.config";


export const AuthContext = createContext(null);

const auth = getAuth(app);
const AuthProvider = ({ children }) => {

    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const createUserWithPass = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signInUserWithPass = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const googleLogin = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider);
    }

    const githubLogin = () => {
        setLoading(true)
        return signInWithPopup(auth, githubProvider)
    }

    const updateUser = (name) => {
        return updateProfile(auth.currentUser, {
            displayName: `${name}`
        })
    }

    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            // axios.get(`https://camp-sportopia-server-faisalahmednour.vercel.app/users/${currentUser?.email}`)
            //     .then(res => {
            //         // console.log(res.data?.role)
            //         res.data?.role === 'admin' ? setIsAdmin(true) : res.data?.role === 'instructor' ? setIsInstructor(true) : '';
            //         setLoading(false)
            //         // console.log('ok');
            //     })
            // console.log(currentUser);
            // if (currentUser) {
            //     axios('https://camp-sportopia-server-faisalahmednour.vercel.app/jwt', { email: currentUser.email })
            //         .then(data => {
            //             console.log(data.data.token)
            //             localStorage.setItem("access-token", data.data.token)
            //         })
            // }
            // else {
            //     localStorage.removeItem("access-token")
            // }
            setLoading(false)
        })
        return () => {
            return unsubscribe();
        }
    }, [user])

    const authInfo = {
        user,
        loading,
        setLoading,
        createUserWithPass,
        signInUserWithPass,
        googleLogin,
        githubLogin,
        logOut,
        updateUser
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;