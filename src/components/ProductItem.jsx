import { Link, useNavigate } from "react-router-dom";

function ProductItem({ item }) {
  const { id, title, image, price } = item;
  const navigate = useNavigate();

  return (
    <li
      onClick={() => navigate(`products/${id}`)}
      className="lg:w-1/4 md:w-1/2 p-3 w-full text-center hover:scale-[1.01] cursor-pointer hover:transition-all ease-in hover:ease-in rounded-md hover:duration-200 duration-200"
    >
      <Link className="flex flex-col bg-white rounded-xl py-5 px-1 h-full shadow hover:shadow-md ">
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
    </li>
  );
}

export default ProductItem;
