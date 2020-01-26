import React, {Component} from 'react';
import * as d3 from "d3";
import listdata from "./FullData1.csv";
import _ from 'lodash';


class Header extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data:[]
    };
  }

  componentDidMount(){
        const data = [];
        d3.csv(listdata, (dat) => {
          data.push(dat);
        }).then(() => {
          this.setState({ data });
        });   
  }

  render() {

    if ( this.state.data.length > 0) {
      const name = _.chain(this.state.data).map('Name').take(10).value();
      console.log(name);
    }
    return (
      <div>Hello</div>
    );
  }
}  
export default Header;