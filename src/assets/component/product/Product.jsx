import React from 'react'
import datas from '../data/datas.json'
import { Link } from 'react-router-dom'

const Product = () => {
  return (
    <div className='row'>
      {datas.map(data => (
        <Link className="collection-products" key={data.id} to="/product/ao-phong">
          <div className="content-product-list">
            <div className="product-box">
              <div className="product-block">
                <div className="product-img">
                  <div className="product-discount">
                    <span>
                      {data.sale}
                    </span>
                  </div>
                  <div className='ao-thun'>
                    <img
                      src={data.image}
                    />
                  </div>
                </div>
                <div className="product-detail">
                  <div className="box-pro-detail">
                    <h3 className='pro-name'>
                      <a href="">
                        {data.name}
                      </a>
                    </h3>
                    <ul className='list-variants-img'>
                      {data?.listimg?.map(item => (
                        <li li key={item.id} >
                          <a href="">
                            <img src={item.url} />
                          </a>
                        </li>
                      ))}

                      <li>
                        <a href="">
                          <img src="//product.hstatic.net/200000201725/product/_nik5150_0f5318485c0347f7858008044516cb6b_icon.jpg" alt="" />
                        </a>
                      </li>
                      <li>
                        <a href="">
                          <img src="//product.hstatic.net/200000201725/product/_nik5147_ad0a0ddae4454444b71df948b1abeb58_icon.jpg" alt="" />
                        </a>
                      </li>
                      <li>
                        <a href="">
                          <img src="//product.hstatic.net/200000201725/product/_nik5145_acc7107a582443cc8d955d015e4a0c37_icon.jpg" alt="" />
                        </a>
                      </li>
                      <li>
                        <a href="">
                          <img src="//product.hstatic.net/200000201725/product/_nik5147_ad0a0ddae4454444b71df948b1abeb58_icon.jpg" alt="" />
                        </a>
                      </li>
                    </ul>
                    <div className="box-pro-price">
                      <p className='pro-price highlight'>
                        <span>230,000đ</span>
                        <span className='pro-price-del'>
                          <del className='compare-price'>329,000đ</del>
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Link>
      ))
      }
    </div >
  )
}

export default Product