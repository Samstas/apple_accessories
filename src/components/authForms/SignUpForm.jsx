import { BsEyeSlash, BsEye } from "react-icons/bs";
import { useSignUpLogIn } from "../../hooks/useSignUp&LogIn";

function SignUpForm() {
  const {
    errors,
    isValid,
    onSignUp,
    register,
    handleSubmit,
    passwordVisible,
    togglePasswordVisible,
  } = useSignUpLogIn();

  return (
    <form onSubmit={handleSubmit(onSignUp)}>
      {/*============ userName Input =============  */}
      <input
        type="text"
        {...register("userName", {
          required: {
            value: true,
            message: "Name is required!",
          },
          minLength: {
            value: 2,
            message: "Minimum 2 symbols",
          },
        })}
        className="block w-full rounded-md border-0 py-1.5 px-3 text-zinc-800 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset  sm:text-sm sm:leading-6"
        placeholder="Name"
      />
      {/* Message if Errors */}
      {errors.userName && (
        <p className="text-red-600 text-sm px-2 py-1">
          {errors.userName.message}
        </p>
      )}

      {/*============ E-MAIL Input =============  */}
      <input
        type="email"
        {...register("email", {
          required: {
            value: true,
            message: "Email is required!",
          },
          pattern: {
            value: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}$/,
            message: "Invalid email format",
          },
        })}
        className="block w-full mt-3 rounded-md border-0 py-1.5 px-3 text-zinc-800 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset  sm:text-sm sm:leading-6"
        placeholder="Email"
      />
      {/* Message if Errors */}
      {errors.email && (
        <p className="text-red-600 text-sm px-2 py-1">{errors.email.message}</p>
      )}

      {/*============ PASSWORD Input =============  */}
      <div className="relative">
        <input
          type={passwordVisible ? "text" : "password"}
          {...register("password", {
            required: {
              value: true,
              message: "Password is required",
            },
            minLength: {
              value: 5,
              message: "Minimum 5 symbols",
            },
          })}
          className="block w-full pr-10 mt-3 rounded-md border-0 py-1.5 px-3 text-zinc-800 shadow-sm ring-1 ring-inset ring-zinc-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset  sm:text-sm sm:leading-6 relative"
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
      </div>

      {/* Message if Errors */}
      {errors.password && (
        <p className="text-red-600 text-sm px-2 py-1">
          {errors.password.message}
        </p>
      )}

      {/*============ SUBMIT Button =============  */}
      <button
        type="submit"
        className="flex w-full mt-5 justify-center rounded-md bg-orange-400 px-3 py-1.5 text-sm font-semibold leading-6 text-zinc-700 shadow-sm hover:bg-orange-500  transition ease-in"
        disabled={!isValid}
      >
        Sign Up
      </button>
    </form>
  );
}

export default SignUpForm;
