import React from 'react'
import ShirtStyle from './ShirtStyle.css'
import Heading from '../heading/Heading'
import UpperContent from '../content/UpperContent'
import MenuShop from '../content/MenuShop'

const Shirt = () => {
  return (
    <div>
      <Heading />
      <MenuShop />
      <div className='product-detail-wrapper'>
        <div className="container">
          <div className="row">
            <div className="product-gallery">
              <div className="col img-container">
                <div className="sub-img">
                  <div className="sub-img-gallery">
                    <div className='product-img-gallery'>
                      <a className='product-link-gallery' href="">
                        <img src="//product.hstatic.net/200000201725/product/3_a2c8b42d66bf49f2a45b0b2b5c0b8c40_compact.jpg" alt="" />
                      </a>
                    </div>
                    <div className='product-img-gallery'>
                      <a className='product-link-gallery' href="">
                        <img src="//product.hstatic.net/200000201725/product/3_a2c8b42d66bf49f2a45b0b2b5c0b8c40_compact.jpg" alt="" />
                      </a>
                    </div>
                    <div className='product-img-gallery'>
                      <a className='product-link-gallery' href="">
                        <img src="//product.hstatic.net/200000201725/product/3_a2c8b42d66bf49f2a45b0b2b5c0b8c40_compact.jpg" alt="" />
                      </a>
                    </div>
                    <div className='product-img-gallery'>
                      <a className='product-link-gallery' href="">
                        <img src="//product.hstatic.net/200000201725/product/3_a2c8b42d66bf49f2a45b0b2b5c0b8c40_compact.jpg" alt="" />
                      </a>
                    </div>
                    <div className='product-img-gallery'>
                      <a className='product-link-gallery' href="">
                        <img src="//product.hstatic.net/200000201725/product/3_a2c8b42d66bf49f2a45b0b2b5c0b8c40_compact.jpg" alt="" />
                      </a>
                    </div>
                    <div className='product-img-gallery'>
                      <a className='product-link-gallery' href="">
                        <img src="//product.hstatic.net/200000201725/product/3_a2c8b42d66bf49f2a45b0b2b5c0b8c40_compact.jpg" alt="" />
                      </a>
                    </div>
                    <div className='product-img-gallery'>
                      <a className='product-link-gallery' href="">
                        <img src="//product.hstatic.net/200000201725/product/3_a2c8b42d66bf49f2a45b0b2b5c0b8c40_compact.jpg" alt="" />
                      </a>
                    </div>
                    <div className='product-img-gallery'>
                      <a className='product-link-gallery' href="">
                        <img src="//product.hstatic.net/200000201725/product/3_a2c8b42d66bf49f2a45b0b2b5c0b8c40_compact.jpg" alt="" />
                      </a>
                    </div>
                    <div className='product-img-gallery'>
                      <a className='product-link-gallery' href="">
                        <img src="//product.hstatic.net/200000201725/product/3_a2c8b42d66bf49f2a45b0b2b5c0b8c40_compact.jpg" alt="" />
                      </a>
                    </div>
                    <div className='product-img-gallery'>
                      <a className='product-link-gallery' href="">
                        <img src="//product.hstatic.net/200000201725/product/3_a2c8b42d66bf49f2a45b0b2b5c0b8c40_compact.jpg" alt="" />
                      </a>
                    </div>
                    <div className='product-img-gallery'>
                      <a className='product-link-gallery' href="">
                        <img src="//product.hstatic.net/200000201725/product/3_a2c8b42d66bf49f2a45b0b2b5c0b8c40_compact.jpg" alt="" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="main-img">
                  <div className="product-img">
                    <img src="//product.hstatic.net/200000201725/product/3_a2c8b42d66bf49f2a45b0b2b5c0b8c40_master.jpg" alt="" />
                  </div>
                </div>
              </div>
            </div>
            <div className="product-gallery-detail">
              <div className="col detail">
                <div className="product-title">
                  <h1>Ao Thun</h1>
                  <span className='product-code'>SKU: AT2-A1569BcS</span>
                </div>
                <div className="product-price">
                  <span className='pro-sale'>-30%</span>
                  <span className='pro-price'>230.300d</span>
                  <del>329.000d</del>
                </div>
                <form action="/add/cart" method='post' className='variants clearfix'>
                  <div className="select-swatch clearfix">
                    <div className="swatch variant-0">
                      <div className="select-swap">
                        <div className="element size">S</div>
                        <div className="element size">M</div>
                        <div className="element size">L</div>
                      </div>
                    </div>
                    <div className="swatch variant-1">
                      <div className="header">
                        <span>Black</span>
                      </div>
                      <div className="select-swap">
                        <div className=" element product-sm-img">
                          <img src="https://product.hstatic.net/200000201725/product/_nik5150_0f5318485c0347f7858008044516cb6b_small.jpg" alt="" />
                          <span>Black</span>
                        </div>
                        <div className=" element product-sm-img">
                          <img src="https://product.hstatic.net/200000201725/product/_nik5150_0f5318485c0347f7858008044516cb6b_small.jpg" alt="" />
                          <span>Grey</span>
                        </div>
                        <div className=" element product-sm-img">
                          <img src="https://product.hstatic.net/200000201725/product/_nik5150_0f5318485c0347f7858008044516cb6b_small.jpg" alt="" />
                          <span>Green</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="size-check clearfix">
                    <a href="">Checking Size</a>
                  </div>
                  <div className="selector-actions">
                    <div className="quantity-area clearfix">
                      <input type="button" className='adjustment' value='-' />
                      <input type="text" id='quantity' />
                      <input type="button" className='adjustment' value='+' />
                    </div>
                    <div className="wrap-addtocart clearfix">
                      <button className='btn dark button add-to-cart'>Add to cart</button>
                      <div className="mulinventory">
                        <a href="" className='btn dark button'>Available in 4 stores</a>
                      </div>
                    </div>
                  </div>

                </form>
                <div className="product-description">
                  <div className='title-blog'>
                    <h2>Description</h2>
                  </div>
                  <div className='description-content'>
                    <div className="description-productDetail">
                      <p>
                        <strong>KIỂU DÁNG:</strong>
                        <br />
                        Áo tôn dáng người mặc, kiểu dáng trẻ trung, dễ mặc, dễ phối đồ, thoải mái phù hợp mọi hoạt động.
                      </p>
                      <p>
                        <strong>CHẤT LIỆU: Cotton Katen ( 76% cotton & 23,3% plyester & 3,7% spandex) </strong>
                        - chất liệu nhập khẩu từ Ấn Độ.
                      </p>
                      <p>
                        H2T lựa chọn sử dụng Cotton Katen nhập khẩu từ Ấn Độ với chất lượng được chứng thực bởi những tiêu chuẩn quốc tế nghiêm ngặt, cho ra đời dòng áo thun với nhiều đặc tính ưu việt. Vải Cotton Katen được kết hợp từ 3 sợi dệt: 76% cotton và 23,3% plyester cài thêm 3,7% sợi spandex đàn hồi.
                      </p>
                      <p>
                        - Sợi cotton có đặc tính <strong> NHẸ và THẤM HÚT MỒ HÔI CỰC TỐT - MÁT VÀO MÙA HÈ</strong> tạo cảm giác thoải mái khi mặc, tránh gây bết dính mô hôi trên da.
                      </p>
                      <p>- Sợi polyester có độ bền cao, chất liệu tuy mềm nhưng đanh, dai, không bị bai xù hay chảy nhão, chống nhăn, chống bụi tốt.  Vải poly có tính cách nhiệt tốt làm tăng thêm khả năng <strong>GIỮ NHIỆT - ẤM VÀO MÙA THU ĐÔNG</strong>khi mặc phối layer  </p>
                      <p><strong>ĐẶC ĐIỂM NỔI BẬT</strong></p>
                      <p>- Mẫu áo thun “đa zi năng" mùa hè mặc mát, mùa thu đông phối layer ấm áp.</p>
                      <p>
                        - Phần tay áo thêu nổi 3D tạo hiệu ứng thị giác giúp đôi vai trông vững vàng và khoẻ khoắn. <br />
                        - Cổ áo bo thun mềm mại, đảm bảo sự thoải mái và hạn chế các vấn đề về giãn cổ, gợn sóng. <br />
                        - Phối với quần short, quần jeans,...luôn look đồ thoải mái trong những ngày hè nắng.
                      </p>


                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Shirt