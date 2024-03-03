import React, {useContext} from 'react'
import { ShopContext } from '../Context/ShopContext'
import { useParams } from 'react-router-dom'
import Breadcrumbs from '../Components/Breadcrumbs/Breadcrumbs'
import ProductDisplay from '../Components/ProductDIsplay/ProductDisplay'
import DescriptionBox from '../Components/DescriptionBox/DescriptionBox'
import RelatedProducts from '../Components/RelatedProducts/RelatedProducts'
const Product = () => {
  const {all_product}= useContext(ShopContext)
  const {productId} = useParams()
  const product = all_product.find((e) => e.id === Number(productId));
  return (
    <div>
      <Breadcrumbs product={product}/>
      <ProductDisplay product={product}/>
      <DescriptionBox/>
      <RelatedProducts/>

    </div>
  )
}

export default Product