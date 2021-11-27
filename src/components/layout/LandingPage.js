import React from 'react';
import NavbarContainer from './Navbar/NavbarContainer';
import ImageSlider from './ImageSlider';
import HomePageProductContainer from '../HomePageProduct.js/HomePageProductContainer';
import Footer from './Footer';

function LandingPage() {
    return (
       <React.Fragment>
           <NavbarContainer />
               <div className="container-fluid px-0">
                    <ImageSlider />
                    <HomePageProductContainer/>
               </div>
            <Footer />
       </React.Fragment>
    )
}

export default LandingPage;


