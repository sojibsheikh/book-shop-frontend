import React from 'react'
import PropTypes from 'prop-types'

function Footer(props) {
    return (
        <React.Fragment>
            <div className="container-fluid bg-success px-0">
        
                <div className="dropdown-divider mt-3"></div>

                <div className="row mt-1 mx-0 px-0">
                    <div className="col-md-12 text-center">
                        <img src="assets/img/bookShop.png" height="50" width="100" alt="logo white footer" />
                    </div>
                </div>


                <div className="py-3 mt-3 shadow-lg" style={{backgroundColor: "131a22", fontSize: "12px"}}>
                    <div className="container">

                        <div className="row text-white">

                            <div className="col-md-3">
                                <p>Get to know us</p>
                                <a href="/" className="text-white">About</a> <br />
                                <a href="/" className="text-white">Careers</a> <br />
                                <a href="/" className="text-white">Press Release</a> <br />
                                <a href="/" className="text-white">Investment</a> <br />
                                <a href="/" className="text-white">Offers</a> <br />
                            </div>

                            <div className="col-md-3">
                                <p>Connect With Us</p>
                                <a href="/" className="text-white">Facebook</a> <br />
                                <a href="/" className="text-white">Twitter</a> <br />
                                <a href="/" className="text-white">Instagram</a> <br />
                            </div>

                            <div className="col-md-3">
                                <p>Make Money With Us</p>
                                <a href="/" className="text-white">International Marketing</a> <br />
                                <a href="/" className="text-white">Fullfilment Center</a> <br />
                                <a href="/" className="text-white">Advertise Your Product</a> <br />
                            </div>

                            <div className="col-md-3">
                                <p>Let Us Help You</p>
                                <a href="/" className="text-white">COVID 19</a> <br />
                                <a href="/" className="text-white">Your Account</a> <br />
                                <a href="/" className="text-white">Returns</a> <br />
                                <a href="/" className="text-white">Funding</a> <br />
                                <a href="/" className="text-white">Help</a> <br />
                            </div>

                        </div>


                        <div className="row my-5">
                            <div className="col-md-12 text-center text-white">
                                <p>
                                    <i className="far fa-copyright"></i> 2021, BookShop.com.BD
                                </p>
                            </div>
                        </div>

                    </div>
                </div> 

            </div>
        </React.Fragment>
    )
}

Footer.propTypes = {

}

export default Footer

