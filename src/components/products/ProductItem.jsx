import { Link } from 'react-router-dom'
import { formatCurrency } from '../../utils/formatCurrency'

function ProductItem({ item }) {
  const { id, title, image, price } = item

  return (
    <li className="w-1/2 cursor-pointer rounded-md p-3 px-1 text-center duration-200 ease-in hover:scale-[1.01] hover:transition-all hover:duration-200 hover:ease-in sm:px-3 md:w-1/3 lg:w-1/4 xl:w-1/4">
      <Link
        to={`${id}`}
        className="flex h-full flex-col rounded-xl bg-white px-1 pb-6 pt-5 shadow-md transition delay-75 ease-in hover:shadow-xl"
      >
        <div className="w-full overflow-hidden bg-white">
          <img
            src={image}
            alt=""
            className="h-full w-full object-cover object-center group-hover:opacity-75"
          />
        </div>
        <div className="mt-4 flex h-20 flex-col justify-between">
          {/* <h3 className="text-white text-xs tracking-widest title-font mb-1 uppercase">
            {category}
          </h3> */}
          <h2 className="text-m px-3 text-gray-400">{title}</h2>
          <p className="mt-2 text-[1.1rem] text-zinc-700">
            {formatCurrency(price)}
          </p>
        </div>
      </Link>
    </li>
  )
}

export default ProductItem
