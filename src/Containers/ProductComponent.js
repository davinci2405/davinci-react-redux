import { useSelector } from "react-redux"
import { Link } from "react-router-dom"

const ProductComponent = () => {
  const products = useSelector((state) => state?.allProducts?.products)

  const renderList = products.map((product) => {
    const { id, image, title, price } = product
    return (
      <Link to={`/product/${id}`} key={id}>
        <div className="bg-white shadow-lg rounded-sm overflow-hidden p-4 h-[350px]">
          <div className="w-full flex justify-center bg-cover">
            <img src={image} alt="" className="h-[180px]" />
          </div>
          <div className="w-full p-4">
            <div className="text-gray-900 font-bold text-2xl min-h-[84px]">
              {title}
            </div>
            <div className="flex items-end justify-between mt-3 ">
              <h1 className="text-gray-700 font-bold text-xl">${price}</h1>
              <button className="px-3 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded">
                Add to Card
              </button>
            </div>
          </div>
        </div>
      </Link>
    )
  })

  return (
    <div className="w-full px-12 pt-4">
      <div className="pb-4">ProductComponent</div>
      <div className="grid grid-cols-3 gap-2">{renderList}</div>
    </div>
  )
}

export default ProductComponent
