import { useNavigate } from "react-router-dom";

function ProductItem({ item }) {
  const { id, title, image, price } = item;
  const navigate = useNavigate();

  return (
    <li
      onClick={() => navigate(`products/${id}`)}
      className="lg:w-1/4 md:w-1/2 p-4 w-full text-center hover:scale-105 cursor-pointer hover:transition-all delay-75 "
    >
      <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200">
        <img
          src={image}
          alt="Black machined steel pen with hexagonal grip and small white logo at top."
          className="h-full w-full object-cover object-center group-hover:opacity-75"
        />
      </div>
      <div className="mt-4">
        {/* <h3 className="text-white text-xs tracking-widest title-font mb-1 uppercase">
                    {category}
                  </h3> */}
        <h2 className="text-gray-400  text-m ">{title}</h2>
        <p className="mt-1 text-zinc-500">${price}</p>
      </div>
    </li>
  );
}

export default ProductItem;
