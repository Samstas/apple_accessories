import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { setUser } from "../../redux/slices/userSlice";
import { toast } from "react-hot-toast";
import { useForm } from "react-hook-form";

function LoginForm() {
  const { register, handleSubmit, formState } = useForm();
  const { errors } = formState;
  console.log(errors);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Handle Submit
  function handleLogin(data) {
    const { email, password } = data;
    const auth = getAuth();

    signInWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        console.log(user);

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

  return (
    <form className="" onSubmit={handleSubmit(handleLogin)}>
      {/*============ EMAIL Input =============  */}
      <input
        id="email"
        type="email"
        {...register("email", {
          required: {
            value: true,
            message: "Email is required",
          },
          pattern: {
            value: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}$/,
            message: "Invalid email format",
          },
        })}
        className="block w-full rounded-md border-0 py-1.5 px-3 text-zinc-800 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset  sm:text-sm sm:leading-6"
        placeholder="Email..."
      />
      {/* Message if Errors */}
      {errors.email && (
        <p className="text-red-600 text-sm px-2 py-1">{errors.email.message}</p>
      )}

      {/*============ PASSWORD Input =============  */}
      <div className="mt-2">
        <div className="text-xs flex justify-end">
          <a
            href="#"
            className="pb-1 text-orange-500 hover:text-orange-400 hover:underline "
          >
            Forgot password?
          </a>
        </div>

        <div className="mb-4">
          <input
            id="password"
            type="password"
            {...register("password", {
              required: "Password is required",
            })}
            className="block w-full rounded-md border-0 py-1.5 px-3 text-zinc-800 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset  sm:text-sm sm:leading-6"
            placeholder="Password..."
          />
          {/* Message if Errors */}
          {errors.email && (
            <p className="text-red-600 text-sm px-2 py-1">
              {errors.password.message}
            </p>
          )}
        </div>
      </div>

      <button
        type="submit"
        className="flex w-full justify-center rounded-md bg-orange-400 px-3 py-1.5 text-sm font-semibold leading-6 text-zinc-700 shadow-sm hover:bg-orange-500  transition ease-in"
      >
        Log In
      </button>
    </form>
  );
}

export default LoginForm;
