import { useDispatch } from "react-redux";
import { Navigate } from "react-router-dom";
import { removeUser } from "../../redux/slices/userSlice";

import { useAuth } from "../../hooks/useAuth";

function ProfilePage() {
  const dispatch = useDispatch();
  const { isAuth, userName,  email } = useAuth();
  console.log(userName);

  return isAuth ? (
    <section className="text-center">
      <h1>Welcome </h1>
      <p className="text-2xl">Name: {userName}</p>
      <p>{ email}</p>
      <hr />
      <button
        onClick={() => dispatch(removeUser())}
        className="border p-2 hover:bg-violet-600"
      >
        Log out
      </button>
    </section>
  ) : (
    <Navigate to="/login" />
  );
}

export default ProfilePage;
