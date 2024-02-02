import { accessories } from "../data/data-accessories";
import { Link } from "react-router-dom";

function CartItems() {
  //   const [show, setShow] = useState(false)
  const item = accessories[5];
  // title, price, category, image,

  return (
    <>
      <div className="min-h-80 max-w-4xl my-4 sm:my-8 mx-auto w-full">
        <table className="mx-auto">
          {/* Table head  */}
          <thead>
            <tr className="uppercase text-xs sm:text-sm border-b">
              <th className="font-normal text-zinc-400 px-6 py-4">Product</th>
              <th className="font-normal text-zinc-400 px-6 py-4">Name</th>
              <th className="font-normal text-zinc-400 px-6 py-4">Quantity</th>
              <th className="font-normal text-zinc-400 px-6 py-4 hidden sm:table-cell">
                Price
              </th>
              <th className="font-normal text-zinc-400 px-6 py-4">Remove</th>
            </tr>
          </thead>
          {/* Table Body  */}
          <tbody className="divide-y">
            <tr className="text-sm sm:text-base text-gray-600 text-center">
              <td className="px-4 sm:px-6 py-4 flex items-center font-medium  ">
                <img
                  src={item.image}
                  alt="img"
                  className="sm:inline-flex  w-[200px]"
                />
              </td>
              <td className="px-4 sm:px-6 py-4 items-center font-medium  ">
                <Link to="#" className="pt-1 hover:text-zinc-500">
                  {item.title}
                </Link>
              </td>
              <td className="font-medium px-4 sm:px-6 py-4">
                <input
                  type="number"
                  className="py-1 px-3 form-input border border-zinc-300 w-16 rounded-sm focus:border-zinc-700 focus:ring-zinc-400"
                  value={1}
                />
              </td>

              <td className="text-base font-light px-4 sm:px-6 py-4 hidden sm:table-cell">
                $ <span className="text-lg">90</span>
              </td>

              <td className="font-medium px-4 sm:px-6 py-4">
                <button>&times;</button>
              </td>
            </tr>
            <tr className="text-center">
              <td></td>
              <td className="text-base text-zinc-700 font-semibold uppercase px-4 sm:px-6 py-4">
                Total
              </td>
              <td className="text-lg font-medium px-4 sm:px-6 py-4">$90</td>
              <td></td>
            </tr>
          </tbody>
        </table>
        <div className="flex gap-2 items-center justify-end ">
          <Link
            to="/"
            className="border px-4 py-2 border-zinc-600 hover:bg-zinc-600 hover:text-white "
          >
            Back to products
          </Link>
          <Link className="border px-4 py-2 border-zinc-600 hover:bg-zinc-600 hover:text-white ">
            Chekout
          </Link>
        </div>
      </div>
    </>
  );
}

export default CartItems;
