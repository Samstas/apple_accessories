import { useSelector } from "react-redux";

export function useAuth() {
  const { userName, email, token, id } = useSelector((state) => state.user);

  return {
    isAuth: !!email,
    userName,
    email,
    token,
    id,
  };
}
