// import { GiHeartMinus } from "react-icons/gi";
import { Link } from "react-router-dom";

import { useWishList } from "../../hooks/useWishList";

import EmptyWishlist from "./EmptyWishlist";

function WishList() {
  const { wishList, onRemoveItemFromWishList } = useWishList();

  console.log(wishList);
  return (
    <section className="text-gray-400 body-font">
      {wishList?.length === 0 ? (
        <EmptyWishlist />
      ) : (
        <>
          <h1 className="text-center text-xl font-bold mt-4">Your Wishlist</h1>
          {/* Products List Block  */}
          <div className="container px-5 py-10 mx-auto">
            <ul className="flex flex-wrap -m-4">
              {wishList?.map(({ id, image, title, price }) => (
                <li
                  key={id}
                  className="lg:w-1/4 md:w-1/2 p-3 w-full text-center hover:scale-[1.01] cursor-pointer hover:transition-all ease-in hover:ease-in rounded-md hover:duration-200 duration-200 "
                >
                  <Link
                    to={`/accessories/${id}`}
                    className="flex flex-col bg-white relative rounded-xl py-5 px-1 h-full shadow hover:shadow-md "
                  >
                    <div className="w-full overflow-hidden bg-gray-200">
                      <img
                        src={image}
                        alt=""
                        className="h-full w-full object-cover object-center group-hover:opacity-75"
                      />
                    </div>
                    <div className="mt-4 flex flex-col justify-between h-20">
                      {/* <h3 className="text-white text-xs tracking-widest title-font mb-1 uppercase">
                {category}
              </h3> */}
                      <h2 className="text-gray-400 text-m">{title}</h2>
                      <p className="mt-1 text-zinc-500">${price}</p>
                    </div>
                  </Link>
                  <button
                    onClick={() => onRemoveItemFromWishList(id)}
                    className="px-3 py-1 mt-2  text-red-600 active:text-red-800 hover:border rounded border-red-600"
                  >
                    remove
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </>
      )}
    </section>
  );
}

export default WishList;
