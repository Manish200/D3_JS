// import React, {Component} from 'react';
// import './Header.css';
// import imag from '../sand-2005066_1920.jpg';

// const mystyles={
//     'backgroundImage': `url( ${imag})`,
//     'height':'50vh',
//     'backgroundSize':'cover'
// }
// class Header extends Component {
//     constructor(props){
//         super(props)
//     }
//     render(){
//         return(
//             <header style={mystyles}>   
//                 <h1>{this.props.title}</h1>
//                 <p>MERN Stack Developer</p>
//             </header>
//         );
//         }
// }
// export default Header

import React, {Component} from 'react';
import * as d3 from "d3";
import listdata from "./data.csv";
import _ from 'lodash';


class Header extends Component {

  constructor(props) {
    super(props);
    this.state = {
      list:[],
      gg:false,
      name:[],
      // newdata:[]
    };
  }

componentDidMount(){
 

      const list = [];
      d3.csv(listdata, (dat) => {
        list.push(dat);
      });
      
      this.setState((prevState) => {
        return {
          list,
          gg: true
        };
      })
}
    drawChart = () => {
      // const data = [12, 5, 6, 6, 9, 10];
      // const h=300
      // const w=700
      console.log("manish");
      // console.log(this.state.list.Name)
      const svg = d3.select("body")
      .append("svg")
      .attr("width", 1000)
      .attr("height", 1000)
      .style("margin-left", 500);
                    
      svg.selectAll("rect")
        .data(this.state.list)
        .enter()
        .append("rect")
        .attr("width", (d) => d.Rating * 10)
        .attr("height", 48)
        .attr("y", (d, i) => i*50)
        .attr("fill", "blue");

        svg.selectAll("text")
        .data(this.state.list)
        .enter()
        .append("text")
        .attr("fill","white")
        .attr("y", (d, i) => i*50+24)
        .attr((d)=>d.Name);
    }


  hh = () => {


    
    // var field1=[];
    // var field2 = [];
    // for (let key in this.state.list) {
      // console.log(key, dat[key]);
      // if(key === "Name")
      // {
        // field1.push(this.state.list.Name);
        var j = this.state.list.Name
        console.log(j);
        // for (var title in field1) {
        //   // $(".contSelf").append("<h1 > " + title + "</h1>");
        
        //   for (var bookArr in field1[title]) {
        //     //  console.log(general[title][book]);
        //     var book = bookArr;
        //     // $(".contSelf").append("<li class='book' > " + book[0] + ' :$' + book[1] + "</li>");
        // console.log(book);
        //   }

        // }

        // for (var key in field1) {
        //   // $('body').append('<h2>' + key + '</h2>');
        //   field1[key].forEach(function(elem) {
        //     let itemTitle = elem[0];
        //     // var itemPrice = elem[1];
        //     // $('body').append(itemTitle + ': $' + itemPrice)
        //     console.log(itemTitle);
        //   })
         
        // }


      // }
    // }
    // const k = field1[0]
    // const k = field2.push(field1[0])
    // console.log("field2",(field2)); 

    }  
    
    render(){

      return <div> 
        
    
    <h1>Hello</h1>
    {this.state.gg ?
      this.hh() : console.log("manish")
    }
       </div>
    }
  }
      
  export default Header;


















  
  // componentWillMount(){
  //   var field1=[];
  //   var field2=[];
  //       // d3.csv(listdata, function(dat) { console.log(dat) });
  //       d3.csv("./FullData1.csv", (dat)=>{
  //         // console.log(dat.length)
  //         // const name = String(dat["Name"]);

  //         // for(var i = 0; i < 17588; i++) {
  //       //     let gg = []
  //       //     gg = name.split("/r\n/r")
  //       //     var kk = []
  //       //     kk = [...kk,...gg]
  //       //     // var arr1d = [].concat(...kk[0]);
  //       //     var hh = [];
  //       //      hh = kk[0].slice(0,40);
  //       //     console.log((String(dat)).slice(1,10));
  //       //     // console.log(dat[i].Age);
  //       // // }
         
  //       //   //  this.setState({list:dat,gg:true})

  //       dat.map((d)=>{
  //         field1.push(d.name);
  //         // field2.push(+d.value);
  //     })
  //     console.log("field1",field1[0]);


          
  //     }

  //       )
  //   }
//   componentDidMount() {
//     // this.drawChart();
//     // const allTextLines = this.state.list
//     // console.log(allTextLines)
//         //  const entries = allTextLines.Name.split(' ')

//     // console.log(typeof(entries.slice(1,10) ))


//    this.hh();



// }
 