import { useDispatch } from "react-redux";
import { Navigate } from "react-router-dom";
import { removeUser } from "../../redux/slices/userSlice";

import { useAuth } from "../../hooks/useAuth";
import WishList from "../../components/ui/WishList";

function ProfilePage() {
  const dispatch = useDispatch();
  const { isAuth, userName, email } = useAuth();

  return isAuth ? (
    <section className="text-center">
      <div className="border p-3 rounded-lg w-[80%] mx-auto my-10">
        <h1 className="text-xl mb-3">
          Welcome <span className="text-orange-400 font-bold uppercase">{userName}</span>{" "}
          :)
        </h1>

        <p>Email: {email}</p>
        <button
          onClick={() => dispatch(removeUser())}
          className="border py-2 mt-6 rounded-lg px-5 border-orange-400 transition ease-in hover:shadow  hover:bg-orange-400 text-zinc-800 font-bold"
        >
          Log out
        </button>
      </div>
      <WishList />
    </section>
  ) : (
    <Navigate to="/login" />
  );
}

export default ProfilePage;
