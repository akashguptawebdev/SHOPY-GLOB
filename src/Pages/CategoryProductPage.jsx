import React from 'react'
import { useParams } from 'react-router-dom'
import FilteredProduct from '../Components/FilteredProduct'
import { useSelector } from 'react-redux'

const CategoryProductPage = () => {
    const products = useSelector((store) => store.Product.products);
    const {catName} = useParams()
    console.log("cat", products)
  return (
    <div className=''>
        {/* <FilterByCategory products={products} params={catName}/> */}
        <FilteredProduct products={products} params={catName}/>
    </div>
  )
}

export default CategoryProductPage