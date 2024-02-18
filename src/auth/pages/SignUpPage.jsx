import { Link } from "react-router-dom";
import SignUpForm from "../../components/authForms/SignUpForm";

function SignUpPage() {
  return (
    <section className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-700">
          Sign Up Form
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        {/* Sign Up FORM  */}
        <SignUpForm />

        <p className="mt-10 text-center text-sm text-gray-500">
          Already have an account?
          <Link
            to="/login"
            className="font-semibold leading-6 text-orange-400 hover:text-orange-600 hover:underline transition  ease-in ml-1"
          >
            Log In
          </Link>
        </p>
      </div>
    </section>
  );
}

export default SignUpPage;
