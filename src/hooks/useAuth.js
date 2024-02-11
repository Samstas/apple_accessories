import { useSelector } from "react-redux";
import { getUser } from "../redux/slices/userSlice";

export function useAuth() {
  const { userName, email, token, id } = useSelector(getUser);
  console.log(userName);

  return {
    isAuth: !!email,
    email,
    token,
    id,
    userName,
  };
}
