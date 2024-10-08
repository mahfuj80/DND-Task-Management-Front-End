"use client";
import { createContext, useEffect, useState } from "react";
import {
  GithubAuthProvider,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import useAxiosPublic from "@/Hooks/Axios/useAxiosPublic";
import { app } from "@/Firebase/firebase.config";

export const AuthContext = createContext(null);
const auth = getAuth(app);
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [uId, setUId] = useState("");
  const [boardList, setBoardList] = useState([]);
  const [getDataAgain, setGetDataAgain] = useState(false);
  const googleProvider = new GoogleAuthProvider();
  const axiosPublic = useAxiosPublic();
  const githubProvider = new GithubAuthProvider();

  //   create user with email and password
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //   sign in a user
  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // sign in with google Popup
  const googleSignIn = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  // login using github sing in popup
  const githubSignIn = () => {
    setLoading(true);
    return signInWithPopup(auth, githubProvider);
  };

  // log out a user
  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  //   update user profile
  const updateUserProfile = (name, photo) => {
    setLoading(true);
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    });
  };

  //   follow a user
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUId(currentUser?.uid);
      setUser(currentUser);
      if (currentUser) {
        // get token and store client
        // setLoading(false);
        const userInfo = { email: currentUser?.email };
        axiosPublic.post("/jwt", userInfo).then((res) => {
          if (res?.data?.token) {
            localStorage.setItem("access-token", res.data.token);
            setLoading(false);
          }
        });
      } else {
        // Done: remove token (if token stored in teh client side: Local storage, caching, in memory)
        localStorage.removeItem("access-token");
        setLoading(true);
      }
      console.log("Current User", currentUser);
      // setLoading(false);
    });
    return () => {
      return unsubscribe();
    };
  }, [axiosPublic]);

  const authInfo = {
    user,
    createUser,
    loading,
    setLoading,
    updateUserProfile,
    googleSignIn,
    signIn,
    logOut,
    githubSignIn,
    uId,
    setUId,
    boardList,
    setBoardList,
    setGetDataAgain,
    getDataAgain,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
