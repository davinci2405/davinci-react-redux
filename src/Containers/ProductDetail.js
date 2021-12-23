import axios from "axios"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import {
  selectedProduct,
  removeSelectedProduct,
} from "../Redux/Actions/productActions"
import Loading from "../Components/Loading"

const ProductDetail = () => {
  const product = useSelector((state) => state.product)
  const { productId } = useParams()
  const dispatch = useDispatch()
  const { image, title, price, category, description } = product
  const [isLoading, setIsLoading] = useState(false)

  const fetchProductDetail = async () => {
    setIsLoading(true)
    const res = await axios
      .get(`https://fakestoreapi.com/products/${productId}`)
      .catch((err) => {
        console.log(err)
        setIsLoading(false)
      })
    dispatch(selectedProduct(res.data))
    setIsLoading(false)
  }

  useEffect(() => {
    if (productId) fetchProductDetail()
    return () => {
      dispatch(removeSelectedProduct())
    }
  }, [productId])

  return (
    <div className="w-full max-w-[1024px] mx-auto pt-6 p-4">
      {isLoading ? (
        <Loading />
      ) : (
        <div class="flex flex-1 bg-white shadow-lg rounded-sm overflow-hidden p-4">
          <div class="w-1/2 flex justify-center">
            <img src={image} alt="" className="w-[300px]" />
          </div>
          <div class="w-2/3 space-y-4">
            <div>
              <span className="bg-blue-200 min-w-max px-2 py-1.5">
                {category}
              </span>
            </div>
            <div class="text-gray-900 font-bold text-3xl">{title}</div>
            <div class="text-gray-700 font-bold text-2xl">${price}</div>
            <div>{description}</div>
            <button class="px-3 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded">
              Add to Card
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default ProductDetail
