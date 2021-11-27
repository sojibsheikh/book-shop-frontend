import React from 'react'

function NavbarView(props) {
    return (
        <React.Fragment>
            <nav className="navbar navbar-expand-md navbar-dark bg-success">
                
                <button className="btn btn-outline-light" data-toggle="drawer" data-target="#amazonDrawer">
                <i className="fas fa-sliders-h"></i>
                </button>

                <div className="drawer drawer-left slide" tabIndex="-1" role="dialog" aria-labelledby="drawer-demo-title"
                aria-hidden="true" id="amazonDrawer">
                <div className="drawer-content drawer-content-scrollable" role="document">
                    <div className="drawer-header bg-dark text-white">
                    <h4 className="drawer-title mx-auto" id="drawer-demo-title">
                        <i className="fas fa-user-circle"></i>
                        Hello, Sign In
                    </h4>
                    </div>
                    <div className="drawer-body">
                    <h6 className="text-muted text-uppercase">Help & Settings</h6>
                    <a href="/" className="btn btn-outline-success my-2 btn-sm">Your Account</a>
                    <a href="/" className="btn btn-warning my-2  btn-sm">Sign in</a>
                    </div>
                    <div className="drawer-footer">
                    <button type="button" className="btn btn-outline-danger btn-sm" data-dismiss="drawer" aria-label="Close">
                        <i className="fas fa-2x fa-times"></i>
                    </button>
                    </div>
                </div>
                </div> 

                <a className="navbar-brand pl-2" href="/">
                <img src="assets/img/bookShop.png" style={{backgroundColor:"",color:"white",borderRadius:"10px"}} height="50" width="100" alt="Book shop logo white" />
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                
                    <form className="form-inline px-lg-5" novalidate method="get">
                        <div className="input-group">
                            <div className="input-group-prepend">
                                    <button className="btn btn-secondary " name="btnCategory" type="button"
                                        id="btnCategory" data-toggle="collapse" aria-haspopup="true" aria-expanded="false">
                                        Search
                                    </button>
                                {/* <div className="dropdown">
                                    <button className="btn btn-secondary dropdown-toggle" name="btnCategory" type="button"
                                        id="btnCategoryDropdownMenu" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        Search
                                    </button>
                                    <div className="dropdown-menu" aria-labelledby="btnCategoryDropdownMenu">
                                        <a className="dropdown-item" href="#">All Books</a>
                                        <a className="dropdown-item" href="#">Our Collection</a>
                                        <a className="dropdown-item" href="#">User Collection</a>
                                    </div>
                                </div> */}
                            </div>
                            <input type="text" className="form-control" size="50" name="query" id="query" />
                            <input type="text" name="category" id="category" value="book" hidden />
                            <div className="input-group-append">
                                <button type="submit" className="btn btn-secondary">
                                <i className="fas fa-search"></i>
                                </button>
                            </div>
                        </div>
                    </form > 
                    <ul className="navbar-nav">  
                        {/* <li className="nav-item dropdown px-2">
                        <a className="nav-link" href="#" id="prefLanguageDropdown" role="button" data-toggle="dropdown"
                            aria-haspopup="true" aria-expanded="false">
                            <i className="fas fa-2x fa-language"></i>
                        </a>
                        <div className="dropdown-menu" aria-labelledby="prefLanguageDropdown">
                            <form className="p-3">
                            <div className="dropdown-divider"></div>
                            <div className="custom-control custom-radio mb-2">
                                <input className="custom-control-input" type="radio" name="prefLang" id="englishLang" value="english"
                                checked />
                                <label className="custom-control-label" htmlFor="englishLang">
                                <img src="img/flag/english.svg" alt="uk flag" width="50" height="30" />
                                </label>
                            </div>
                            <div className="dropdown-divider"></div>
                            <div className="custom-control custom-radio mb-2">
                                <input className="custom-control-input" type="radio" name="prefLang" id="hindiLang" value="hindi" checked />
                                <label className="custom-control-label" htmlFor="hindiLang">
                                <img src="img/flag/hindi.svg" alt="uk flag" width="50" height="30" />
                                </label>
                            </div>
                            <div className="dropdown-divider"></div>
                            <div className="custom-control custom-radio mb-2">
                                <input className="custom-control-input" type="radio" name="prefLang" id="urduLang" value="urdu" checked />
                                <label className="custom-control-label" htmlFor="urduLang">
                                <img src="img/flag/urdu.svg" alt="uk flag" width="50" height="30" />
                                </label>
                            </div>
                            <div className="dropdown-divider"></div>
                            <div className="custom-control custom-radio">
                                <input className="custom-control-input" type="radio" name="prefLang" id="banglaLang" value="bangla" checked />
                                <label className="custom-control-label" htmlFor="banglaLang">
                                <img src="img/flag/bangla.svg" alt="uk flag" width="50" height="30" />
                                </label>
                            </div>
                            <div className="dropdown-divider"></div>
                            </form>
                        </div>
                        </li>  */}
                        
                        <li className="nav-item dropdown px-2">
                        <a className="nav-link" href="login.html" id="userAccount" role="button" data-toggle="dropdown"
                            aria-haspopup="true" aria-expanded="false">
                            <i className="fas fa-2x fa-user-circle"></i>
                        </a>
                        <div className="dropdown-menu px-3" aria-labelledby="userAccount">
                            <div className="d-flex flex-column justify-content-center">
                            <a href="/" className="btn btn-warning w-75 btn-sm font-weight-bold">Signin</a>
                            <small>New customer?<a href="/"> Start here.</a></small>
                            </div>
                        </div>
                        </li> 
                        <li className="nav-item px-2">
                        <a className="nav-link" href="/"  ariaDisabled=" true">
                            <i className="fas fa-2x text-light fa-cart-arrow-down" />
                            <span className="badge badge-warning badge-pill">0</span>
                        </a>
                        </li > 
                    </ul>
                </div>
            </nav >
        </React.Fragment>
    );
 }

export default NavbarView ;
