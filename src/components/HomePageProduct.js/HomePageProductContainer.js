import React, { Component } from 'react'
import HomePageProductView from './HomePageProductView';

export default class HomePageProductContainer extends Component {
    constructor(props){
        super(props);

        this.state = {
            
        }
    }

    render() {
        return (
            <div>
                <HomePageProductView />
            </div>
        )
    }
}
