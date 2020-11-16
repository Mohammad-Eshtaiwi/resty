import React, { Component } from 'react'
import '../scss/header.scss';
export default class Header extends Component {
    state={appName:"RESTy"}
    render() {
        return (
            <header>
               <h1>{this.state.appName}</h1> 
            </header>
        )
    }
}
