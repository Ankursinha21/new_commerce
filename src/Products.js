import React from 'react'
import Sort from './Components/Sort'
import ProdList from './Components/ProdList'
// import { useFilterContext } from './Context/filterContext'

const Products = () => {
  // const {filter_products} = useFilterContext();
  return (
    <div id="container">
      <section className="product-sort">
        <Sort/>
      </section>
      <section className="product-list">
        <ProdList />
      </section>
    </div>
  )
}

export default Products