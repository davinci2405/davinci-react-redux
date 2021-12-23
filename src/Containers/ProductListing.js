import axios from "axios"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { setProducts } from "../Redux/Actions/productActions"
import ProductComponent from "./ProductComponent"

const ProductListing = () => {
  const dispatch = useDispatch()

  const fetchProducts = async () => {
    const res = await axios
      .get("https://fakestoreapi.com/products")
      .catch((err) => {
        console.log(err)
      })
    dispatch(setProducts(res.data))
  }

  useEffect(() => {
    fetchProducts()
  }, [])

  return <ProductComponent />
}

export default ProductListing
