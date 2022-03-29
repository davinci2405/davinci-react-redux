import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import {
  fetchProduct,
  removeSelectedProduct,
} from "../Redux/Actions/productActions"

const ProductDetail = () => {
  const product = useSelector((state) => state.product)
  const { productId } = useParams()
  const dispatch = useDispatch()
  const { image, title, price, category, description } = product

  useEffect(() => {
    if (productId) {
      dispatch(fetchProduct(productId))
    }
    return () => {
      dispatch(removeSelectedProduct())
    }
  }, [productId])

  return (
    <div className="w-full max-w-[1024px] mx-auto pt-6 p-4">
      <div className="flex flex-1 bg-white shadow-lg rounded-sm overflow-hidden p-4">
        <div className="w-1/2 flex justify-center">
          <img src={image} alt="" className="w-[300px]" />
        </div>
        <div className="w-2/3 space-y-4">
          <div>
            <span className="bg-blue-200 min-w-max px-2 py-1.5">
              {category}
            </span>
          </div>
          <div className="text-gray-900 font-bold text-3xl">{title}</div>
          <div className="text-gray-700 font-bold text-2xl">${price}</div>
          <div>{description}</div>
          <button className="px-3 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded">
            Add to Card
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProductDetail
