import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { fetchProducts } from "../Redux/Actions/productActions"
import ProductComponent from "./ProductComponent"

const ProductListing = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchProducts())
  }, [])

  return <ProductComponent />
}

export default ProductListing
