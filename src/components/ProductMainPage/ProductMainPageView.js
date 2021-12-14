import React from 'react'

function ProductMainPageView() {
  return (
    <React.Fragment>

      <div className="container my-5">

        <div className="row">

          <div className="col-md-1">
            <button className="btn btn-sm bg-transparent">
              <img src="assets/img/product_images/bookshop1.jpg" alt="btn image" />
            </button>
            <button className="btn btn-sm bg-transparent">
              <img src="img/product_main/button_img02.jpg" alt="btn " />
            </button>
            <button className="btn btn-sm bg-transparent">
              <img src="assets/img/product_images/bookshop1.jpg" alt="btn image" />
            </button>
            <button className="btn btn-sm bg-transparent">
              <img src="assets/img/product_images/bookshop1.jpg" alt="btn image" />
            </button>
          </div>


          <div className="col-md-3">
            <img src="img/product_main/product_img01.jpg" className="img-fluid" alt="product image" />
          </div>


          <div className="col-md-4">
            <h6 className="font-weight-bold">Redmi 8A Dual (Sea Blue, 2GB RAM, 32GB Storage) – Dual Cameras & 5,000 mAH Battery
            </h6>
            <p>
              <i className="fas fa-star text-warning"></i>
              <i className="fas fa-star text-warning"></i>
              <i className="fas fa-star text-warning"></i>
              <i className="fas fa-star text-warning"></i>
              <i className="fas fa-star-half-alt text-warning"></i>
            </p>

            <div className="dropdown-divider mt-3"></div>
            <p className="mb-0">
              <span className="text-muted mr-2">M.R.P.:</span>
              <span className="text-danger font-weight-bold"><i className="fas fa-rupee-sign"></i> 8000/-</span>
            </p>
            <p>
              <span className="text-muted mr-2">You Save:</span>
              <span className="text-danger font-weight-bold"><i className="fas fa-rupee-sign"></i> 4000/-</span>
            </p>


            <div className="row" style="font-size: 12px; font-weight: bold;">
              <div className="col-md-3">
                <img src="assets/img/product_images/bookshop1.jpg" width="35" height="35" className="rounded" alt="" srcset="" />
                <br />
                <a href="/">No contact delivery</a>
              </div>
              <div className="col-md-3">
                <img src="assets/img/product_images/bookshop1.jpg" width="35" height="35" className="rounded" alt="" srcset="">
                  <br>
                    <a href="/">7 Day Replacement</a>
                  </div>
                  <div className="col-md-3">
                    <img src="assets/img/product_images/bookshop1.jpg" width="35" height="35" className="rounded" alt="" srcset="">
                      <br>
                        <a href="#">Amazon Delivered</a>
                      </div>
                      <div className="col-md-3">
                        <img src="assets/img/product_images/bookshop1.jpg" width="35" height="35" className="rounded" alt="" srcset="">
                          <br>
                            <a href="/">1 Year Waranty</a>
                      </div>
                      </div>

                      <div className="dropdown-divider mt-3"></div>

                      <p className="text-success font-weight-bold">In stock.</p>
                      <p>Sold by:
                        <a href="#">ABC Seller</a>
                      </p>


                      <ul className="ml-n3">
                        <li>13+2MP dual rear AI camera with PDAF | 8MP front camera</li>
                        <li>15.7988 centimeters (6.22-inch) HD+ Dot notch display with 1520 x 720 pixels resolution and 19:9 aspect
                          ratio | 2.5D curved glass</li>
                        <li>Memory, Storage & SIM: 2GB | 32GB internal memory expandable up to 512GB with dedicated memory card slot |
                          Dual SIM (nano+nano) dual-standby (4G+4G)</li>
                        <li>Android Pie v9.0 operating system with 1.95GHz Snapdragon 439 octa core processor</li>
                        <li>5000mAH lithium-polymer battery</li>
                        <li>Box also includes: Power adapter, USB cable, SIM eject tool, warranty card and user guide. The box does
                          not include earphones</li>
                      </ul>

                  </div>

                  <div className="col-md-4 text-center">


                    <div className="card shadow rounded float-md-right" >
                      <div className="card-body">
                        <div className="form-group">
                          <label for="quantity">Quantity:</label>
                          <select className="form-control form-control-sm d-inline ml-2" style="width: 50px;" id="quantity">
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                            <option>10</option>
                          </select>
                        </div>

                        <p className="mb-0">
                          <span className="text-muted mr-2">M.R.P.:</span>
                          <span className="text-danger font-weight-bold"><i className="fas fa-rupee-sign"></i> 8000/-</span>
                        </p>

                        <a href="#" className="btn btn-warning btn-sm btn-block mt-3">
                          <i className="fas fa-cart-plus float-left text-primary" style="font-size: 25px;"></i>
                          Add to cart
                        </a>

                        <div className="dropdown-divider"></div>
                        <a href="#">
                          <i className="fas fa-map-marker-alt text-dark"></i>
                          Select Delivery Location
                        </a>
                      </div>
                    </div>



                  </div>
              </div>


              <div className="row border-bottom border-top">
                <div className="col-md-12">
                  <p className="text-danger font-weight-bold">Save Extra with 5 offers</p>
                  <ul>
                    <li><span className="text-danger">No Cost EMI:</span> Avail No Cost EMI on select cards for orders above ₹3000
                    </li>
                    <li><span className="text-danger">Exchange Offer:</span> Enter your pincode to view Exchange offer</li>
                    <li><span className="text-danger">Cashback (2):</span> 5% back with Amazon Pay ICICI Bank Credit card for
                      Prime-members. 3% back for everybody else. Here's how </li>
                    <li><span className="text-danger">Bank Offer (2): </span> Get 5% up to Rs. 1500 Instant Discount on Bank of Baroda
                      Credit EMI transactions Here's how</li>
                    <li><span className="text-danger">Partner Offers (3): </span> Buy now & pay next month at 0% interest or pay in
                      EMIs with Amazon Pay Later. Instant credit upto ₹20,000. Check eligibility here! Here's how </li>
                  </ul>
                </div>
              </div>

              <div className="row border-bottom mt-3">
                <div className="col-md-12 my-3">
                  <h6 className="text-warning font-weight-bold">Product description</h6>
                  <p className="ml-3">Colour: Sea Blue | Size name:32 GB Take strikingly clear photos with the
                    13MP + 2MP AI dual camera. Capture the beauty of any scene, while the AI-powered
                    portrait mode with Beautify blurs the background to create portraits that stand out.
                    The octa-core processor takes operational
                    efficiency to the next level which results in brilliant performance.</p>
                </div>
              </div>



              <div className="row my-5">
                <div className="col-md-4">
                  <p className="text-capitalize font-weight-bold">avg. customer review</p>
                  <button className="btn btn-sm bg-transparent">
                    <i className="fas fa-star" style="color: #ffa41c;"></i>
                    <i className="fas fa-star" style="color: #ffa41c;"></i>
                    <i className="fas fa-star" style="color: #ffa41c;"></i>
                    <i className="fas fa-star" style="color: #ffa41c;"></i>
                    <i className="far fa-star" style="color: #ffa41c;"></i>
                    <span className="rating">& Up</span>
                  </button>
                  <br />
                  <button className="btn btn-sm bg-transparent">
                    <i className="fas fa-star" style="color: #ffa41c;"></i>
                    <i className="fas fa-star" style="color: #ffa41c;"></i>
                    <i className="fas fa-star" style="color: #ffa41c;"></i>
                    <i className="far fa-star" style="color: #ffa41c;"></i>
                    <i className="far fa-star" style="color: #ffa41c;"></i>
                    <span className="rating">& Up</span>
                  </button>
                  <br />
                  <button className="btn btn-sm bg-transparent">
                    <i className="fas fa-star" style="color: #ffa41c;"></i>
                    <i className="fas fa-star" style="color: #ffa41c;"></i>
                    <i className="far fa-star" style="color: #ffa41c;"></i>
                    <i className="far fa-star" style="color: #ffa41c;"></i>
                    <i className="far fa-star" style="color: #ffa41c;"></i>
                    <span className="rating">& Up</span>
                  </button>
                  <br />
                  <button className="btn btn-sm bg-transparent">
                    <i className="fas fa-star" style="color: #ffa41c;"></i>
                    <i className="far fa-star" style="color: #ffa41c;"></i>
                    <i className="far fa-star" style="color: #ffa41c;"></i>
                    <i className="far fa-star" style="color: #ffa41c;"></i>
                    <i className="far fa-star" style="color: #ffa41c;"></i>
                    <span className="rating">& Up</span>
                  </button>
                  <br />
                </div>

                <div className="col-md-8">
                  <p className="text-capitalize font-weight-bold">Top reviews from India</p>
                  <div className="row">
                    <div className="col-md-12">
                      <a href="#" className="text-dark" style="text-decoration: none;"><img src="img/empty_avatar.png" width="34"
                        height="34" className="rounded-circle mr-2"> Narendar Modi</a>
                      <p className="font-weight-bold mt-2">
                        <i className="fas fa-star" style="color: #ffa41c;"></i>
                        <i className="far fa-star" style="color: #ffa41c;"></i>
                        <i className="far fa-star" style="color: #ffa41c;"></i>
                        <i className="far fa-star" style="color: #ffa41c;"></i>
                        <i className="far fa-star mr-2" style="color: #ffa41c;"></i>
                        Learn selling from ME.
                      </p>
                      <p>
                        hjkd sahdskahdjks hkdjhsjkfhsdkjfhk jdhfjkhjkf dhfs
                        hjkd sahdskahdjks hkdjhsjkfhsdkjfhk jdhfjkhjkf dhfs
                        hjkd sahdskahdjks hkdjhsjkfhsdkjfhk jdhfjkhjkf dhfs
                        hjkd sahdskahdjks hkdjhsjkfhsdkjfhk jdhfjkhjkf dhfs
                      </p>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-12">
                      <a href="/" className="text-dark" style="text-decoration: none;"><img src="img/empty_avatar.png" width="34"
                        height="34" className="rounded-circle mr-2" /> Abir Hossain</a>
                      <p className="font-weight-bold mt-2">
                        <i className="fas fa-star" style="color: #ffa41c;"></i>
                        <i className="far fa-star" style="color: #ffa41c;"></i>
                        <i className="far fa-star" style="color: #ffa41c;"></i>
                        <i className="far fa-star" style="color: #ffa41c;"></i>
                        <i className="far fa-star mr-2" style="color: #ffa41c;"></i>
                        Learn selling from ME.
                      </p>
                      <p>
                        hjkd sahdskahdjks hkdjhsjkfhsdkjfhk jdhfjkhjkf dhfs
                        hjkd sahdskahdjks hkdjhsjkfhsdkjfhk jdhfjkhjkf dhfs
                        hjkd sahdskahdjks hkdjhsjkfhsdkjfhk jdhfjkhjkf dhfs
                        hjkd sahdskahdjks hkdjhsjkfhsdkjfhk jdhfjkhjkf dhfs
                      </p>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-12">
                      <a href="#" className="text-dark" style="text-decoration: none;"><img src="img/empty_avatar.png" width="34"
                        height="34" className="rounded-circle mr-2" /> Narendar Modi</a>
                      <p className="font-weight-bold mt-2">
                        <i className="fas fa-star" style="color: #ffa41c;"></i>
                        <i className="far fa-star" style="color: #ffa41c;"></i>
                        <i className="far fa-star" style="color: #ffa41c;"></i>
                        <i className="far fa-star" style="color: #ffa41c;"></i>
                        <i className="far fa-star mr-2" style="color: #ffa41c;"></i>
                        Learn selling from ME.
                      </p>
                      <p>
                        hjkd sahdskahdjks hkdjhsjkfhsdkjfhk jdhfjkhjkf dhfs
                        hjkd sahdskahdjks hkdjhsjkfhsdkjfhk jdhfjkhjkf dhfs
                        hjkd sahdskahdjks hkdjhsjkfhsdkjfhk jdhfjkhjkf dhfs
                        hjkd sahdskahdjks hkdjhsjkfhsdkjfhk jdhfjkhjkf dhfs
                      </p>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-12">
                      <a href="#" className="text-dark" style="text-decoration: none;"><img src="img/empty_avatar.png" width="34"
                        height="34" className="rounded-circle mr-2" /> Narendar Modi</a>
                      <p className="font-weight-bold mt-2">
                        <i className="fas fa-star" style="color: #ffa41c;"></i>
                        <i className="far fa-star" style="color: #ffa41c;"></i>
                        <i className="far fa-star" style="color: #ffa41c;"></i>
                        <i className="far fa-star" style="color: #ffa41c;"></i>
                        <i className="far fa-star mr-2" style="color: #ffa41c;"></i>
                        Learn selling from ME.
                      </p>
                      <p>
                        hjkd sahdskahdjks hkdjhsjkfhsdkjfhk jdhfjkhjkf dhfs
                        hjkd sahdskahdjks hkdjhsjkfhsdkjfhk jdhfjkhjkf dhfs
                        hjkd sahdskahdjks hkdjhsjkfhsdkjfhk jdhfjkhjkf dhfs
                        hjkd sahdskahdjks hkdjhsjkfhsdkjfhk jdhfjkhjkf dhfs
                      </p>
                    </div>
                  </div>

                  <div className="dropdown-divider mt-3"></div>
                  <a href="#" className="font-weight-bold">See all reviews <i class="fas fa-caret-right"></i></a>
                </div>
              </div>
            </div>
          </React.Fragment>

          )
}

export default ProductMainPageView
