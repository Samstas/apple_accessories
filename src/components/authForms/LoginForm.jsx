import { BsEyeSlash, BsEye } from "react-icons/bs";
import { useSignUpLogIn } from "../../hooks/useSignUp&LogIn";

function LoginForm() {
  const {
    errors,
    isValid,
    onLogIn,
    register,
    handleSubmit,
    passwordVisible,
    togglePasswordVisible,
  } = useSignUpLogIn();

  return (
    <form onSubmit={handleSubmit(onLogIn)}>
      {/*============ E-MAIL Input =============  */}
      <input
        id="email"
        type="email"
        autoComplete="true"
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
        placeholder="Email"
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

        <div className="mb-4 relative">
          <input
            id="password"
            type={passwordVisible ? "text" : "password"}
            {...register("password", {
              required: {
                value: true,
                message: "Password is required",
              },
            })}
            className="block w-full rounded-md border-0 py-1.5 px-3 text-zinc-800 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset  sm:text-sm sm:leading-6"
            placeholder="Password"
          />
          {/* Eye Icon for toggle Password Visible  */}
          {!passwordVisible ? (
            <BsEyeSlash
              onClick={togglePasswordVisible}
              className="text-zinc-400 absolute top-[11px] right-3 cursor-pointer"
            />
          ) : (
            <BsEye
              onClick={togglePasswordVisible}
              className="text-zinc-400 absolute top-[11px] right-3 cursor-pointer"
            />
          )}
          {/* Message if Errors */}
          {errors.password && (
            <p className="text-red-600 text-sm px-2 py-1">
              {errors.password.message}
            </p>
          )}
        </div>
      </div>

      {/*============ SUBMIT Button =============  */}
      <button
        type="submit"
        className="flex w-full justify-center rounded-md bg-orange-400 px-3 py-1.5 text-sm font-semibold leading-6 text-zinc-700 shadow-sm hover:bg-orange-500  transition ease-in"
        disabled={!isValid}
      >
        Log In
      </button>
    </form>
  );
}

export default LoginForm;
