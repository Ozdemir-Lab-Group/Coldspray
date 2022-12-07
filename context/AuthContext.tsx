import { useContext, useState, useEffect, createContext } from "react";
import { ContextUser, SimpleUser } from "../Types";
import {
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  GoogleAuthProvider,
  onAuthStateChanged,
  User,
} from "firebase/auth";
import { auth } from "../Firebase";
import { useRouter } from "next/router";

const UserContext = createContext<ContextUser>(undefined);

export const useAuth = () => {
  return useContext(UserContext);
};

export function AuthContextProvider({ children }) {
  const [currentUser, setCurrentUser] = useState<User>(null);
  const [isLoading, setIsLoading] = useState(false);
  const googleProvider = new GoogleAuthProvider();
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setIsLoading(false);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const signUp = async ({ email, password }: SimpleUser) => {
    try {
      const response = await createUserWithEmailAndPassword(auth, email, password);
      const user = response.user;
      router.push("/");
      return { user };
    } catch (error) {
      return { error };
    }
  };

  const signInWithGoogle = async () => {
    try {
      const response = await signInWithPopup(auth, googleProvider);
      const user = response.user;
      router.push("/");
      return { user };
    } catch (error) {
      return { error };
    }
  };

  const logInWithEmailAndPassword = async ({ email, password }: SimpleUser) => {
    try {
      const response = await signInWithEmailAndPassword(auth, email, password);
      const user = response.user;
      return { user };
    } catch (error) {
      return { error };
    }
  };

  const sendPasswordReset = async (email: string) => {
    try {
      await sendPasswordResetEmail(auth, email);
      alert("Password reset link sent!");
    } catch (err) {
      console.error(err);
      alert(err.message);
    }
  };

  const logout = () => {
    signOut(auth);
  };

  const values = {
    user: currentUser,
    signUp,
    logInWithEmailAndPassword,
    signInWithGoogle,
    sendPasswordReset,
    logout,
  };

  return <UserContext.Provider value={values}>{children}</UserContext.Provider>;
}
