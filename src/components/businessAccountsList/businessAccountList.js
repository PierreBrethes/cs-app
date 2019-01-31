import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './../../App.css';

class BusinessAccountList extends Component {

   render() {
     console.log(this.props.list);
     const list = this.props.list.map((index) => {
       return <li className="">{index.businessAccount}</li>
     });

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
