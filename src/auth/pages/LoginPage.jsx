import { Link } from 'react-router-dom'

import LoginForm from '../../components/authForms/LoginForm'

function LoginPage() {
  return (
    <section className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-700">
          Log in to your account
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        {/* Login FORM */}
        <LoginForm />

        <p className="mt-10 text-center text-sm text-gray-500">
          Do you want to register?
          <Link
            to="/signup"
            className="ml-1 font-semibold leading-6 text-orange-400 transition ease-in  hover:text-orange-600 hover:underline"
          >
            Sign Up
          </Link>
        </p>
      </div>
    </section>
  )
}

export default LoginPage
