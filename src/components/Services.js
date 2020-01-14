import React, {Component} from 'react';
import './Services.css';

class Services extends Component {
constructor(props){
    super(props)
}

render(){

    return(
        <div className="services">
            <h3>services</h3>
            <h2>what we offer</h2>
            <div className="row">
                <div>
                    <span>A</span>
                    <h4>hh</h4>
                    <p>llll</p>
                </div>
                <div>
                    <span>A</span>
                    <h4>yy</h4>
                    <p>jjj</p>
                </div>
                <div>
                    <span>A</span>
                    <h4>uu</h4>
                    <p>ttt</p>
                </div>
                <div>   
                    <span>A</span>
                    <h4>aa</h4>
                    <p>mmm</p>
                </div>
            </div>

        </div>
    )
}
}


export default Services;