import { useSelector } from "react-redux";
import { getUser } from "../redux/slices/userSlice";

export function useAuth() {
  const { userName, email, token, id } = useSelector(getUser);

  return {
    isAuth: !!email,
    email,
    token,
    id,
    userName,
  };
}
