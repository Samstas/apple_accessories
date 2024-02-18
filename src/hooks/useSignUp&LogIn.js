import {
  getAuth,
  updateProfile,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { useState } from "react";
import { toast } from "react-hot-toast";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { setUser } from "../redux/slices/userSlice";

export function useSignUpLogIn() {
  const { register, formState, handleSubmit } = useForm({ mode: "onBlur" });
  const [passwordVisible, setPasswordVisible] = useState(false);
  const { errors, isValid } = formState;

  function togglePasswordVisible() {
    setPasswordVisible((prev) => !prev);
  }

  const dispatch = useDispatch();
  const navigate = useNavigate();

  //=============== Handle SIGN UP Submit =============
  function handleSignUp(data) {
    const auth = getAuth();
    const { userName, email, password } = data;

    createUserWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        return updateProfile(user, { displayName: userName }).then(() => {
          dispatch(
            setUser({
              userName: user.userName,
              email: user.email,
              token: user.accessToken,
              id: user.uid,
            })
          );

          // notification toast
          toast.success(`Successfully Signed Up ${userName}`);
          // navigate to profile
          navigate("/profile");
        });
      })
      .catch(console.error);
  }

  //=============== Handle LOG IN Submit =============
  function handleLogin(data) {
    const { email, password } = data;
    const auth = getAuth();

    signInWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        dispatch(
          setUser({
            userName: user.displayName,
            email: user.email,
            token: user.accessToken,
            id: user.uid,
          })
        );

        toast.success("Successfully Logged In");
        navigate("/profile");
      })
      .catch(() => toast.error("Invalid user!"));
  }

  return {
    errors,
    isValid,
    register,
    handleSubmit,
    passwordVisible,
    onLogIn: handleLogin,
    togglePasswordVisible,
    onSignUp: handleSignUp,
  };
}
