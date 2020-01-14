import React, {Component} from 'react';
import './Navigation.css';
class Navigation extends Component {
    constructor(props){
        super(props)
    }
    render(){
        const sections = ['Home','About','Portfolio','Contact']
        const navlinks = sections.map((section) =>{
            return(
                <li><a href={'#' + section}>{section}</a></li>
            )
        })
        return(
            <nav>
                <h2 className="logo">{this.props.Logotitle}</h2>
                <ul>
                   {navlinks}
                </ul>
            </nav>
        );
        }
}
export default Navigation