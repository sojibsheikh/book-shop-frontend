import React, { Component } from 'react'
import PropTypes from 'prop-types'
import NavbarView from './NavbarView'

export class NavbarContainer extends Component {
    constructor(props){
        super(props)

        this.state = {
            
        }
    }

    render() {
        return (
            <div>
               <NavbarView name="Book Shop"/> 
            </div>
        )
    }
}

export default NavbarContainer
