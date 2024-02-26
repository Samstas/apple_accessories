import { Link } from 'react-router-dom'

function NotFoundPage() {
  return (
    <section className=" flex h-full w-full items-center  justify-center px-16 md:px-0">
      <div className="flex  flex-col items-center justify-center rounded-lg bg-white px-4 py-8 shadow-2xl md:px-8 lg:px-24">
        <p className="text-6xl font-bold tracking-wider text-zinc-300 md:text-7xl lg:text-9xl">
          404
        </p>
        <p className="mt-4 text-2xl font-bold tracking-wider text-zinc-500 md:text-3xl lg:text-5xl">
          Page Not Found
        </p>
        <p className="mt-4 border-b-2 pb-4 text-center text-zinc-500">
          Sorry, the page you are looking for could not be found.
        </p>
        <Link
          to="/"
          className="mt-6 flex items-center space-x-2 rounded bg-zinc-700 px-4 py-2 text-gray-100 transition duration-150 hover:bg-zinc-600"
          title="Return Home"
        >
          <span>&larr;</span>
          <span>Return to Store</span>
        </Link>
      </div>
    </section>
  )
}

export default NotFoundPage
