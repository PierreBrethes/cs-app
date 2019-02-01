import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './../../App.css';

class BusinessAccountList extends Component {

  deleteData = (account) => {
    console.log(account);
    fetch('http://localhost:3001/spyinglist/172321', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
            name: account
          })
    })
    .then(function(response) {
      return response.json()
    })
  }

   render() {
     console.log(this.props.list);
     const list = this.props.list.map((index) => {
       return <li className="">{index.businessAccount}<button onClick={this.deleteData(index.businessAccount)}>supprimer</button></li>
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
