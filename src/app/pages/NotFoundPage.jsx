import { Link } from "react-router-dom";

function NotFoundPage() {
  return (
    <section className=" w-full h-full px-16 md:px-0  flex items-center justify-center">
      <div className="bg-white  flex flex-col items-center justify-center px-4 md:px-8 lg:px-24 py-8 rounded-lg shadow-2xl">
        <p className="text-6xl md:text-7xl lg:text-9xl font-bold tracking-wider text-zinc-300">
          404
        </p>
        <p className="text-2xl md:text-3xl lg:text-5xl font-bold tracking-wider text-zinc-500 mt-4">
          Page Not Found
        </p>
        <p className="text-zinc-500 mt-4 pb-4 border-b-2 text-center">
          Sorry, the page you are looking for could not be found.
        </p>
        <Link
          to="/"
          className="flex items-center space-x-2 bg-zinc-700 hover:bg-zinc-600 text-gray-100 px-4 py-2 mt-6 rounded transition duration-150"
          title="Return Home"
        >
          <span>&larr;</span>
          <span>Return to Store</span>
        </Link>
      </div>
    </section>
  );
}

export default NotFoundPage;
