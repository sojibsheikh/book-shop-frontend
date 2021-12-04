import React from 'react';
import NavbarContainer from './Navbar/NavbarContainer';
import ImageSlider from './ImageSlider';
import HomePageProductContainer from '../HomePageProduct/HomePageProductContainer';
import Footer from './Footer';
import Login from '../Login/LoginContainer';

function LandingPage() {
    return (
       <React.Fragment>
           <NavbarContainer />
               
               <Login/>
            <Footer />
       </React.Fragment>
    )
}

export default LandingPage;


