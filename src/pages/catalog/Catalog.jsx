import React, { useState } from 'react'

import InfinityList from '../../components/infinityList/InfinityList'

import productData from '../../assets/fake-data/products'
import category from '../../assets/fake-data/category'

const Catalog = () => {

  const productList = productData.getAllProducts()

  const [product, setProduct] = useState(productList)
  return (
    <div className='catalog'>

      <div className="catalog__filter">
          <div className="catalog__filter__widget">
              <div className="catalog__filter__widget__title">
                Danh mục sản phẩm
              </div>

              <div className="catalog__filter__widget__content">
                  {
                    category.map( (item, index) => (
                      <div className="catalog__filter__widget__content__item" key={index}>
                        <p>{item.display}</p>
                      </div>
                    ))
                  }
              </div>
          </div>

          <div className="catalog__filter__widget">
              <div className="catalog__filter__widget__title">
                Màu sắc
              </div>

              <div className="catalog__filter__widget__content">
                  {
                    category.map( (item, index) => (
                      <div className="catalog__filter__widget__content__item" key={index}>
                        <p>{item.display}</p>
                      </div>
                    ))
                  }
              </div>
          </div>
      </div>

      <div className="catalog__content">
          <InfinityList
            data = {product}
          />
      </div>
     
    </div>
  )
}

export default Catalog
