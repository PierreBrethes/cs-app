import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './../../App.css';

class BusinessAccountList extends Component {

   render() {

     const list = Object.keys(this.props.list).map(function(key, index) {
       return <li className="">{this.props.list[key]}</li>
     }.bind(this));

     return (
       <div className="">
         <ul className="">
           {list}
         </ul>
        </div>
     );
   }
}

export default BusinessAccountList;
