import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import BusinessAccountList from './businessAccountList.js';
import AddBusinessAccountForm from './addBusinessAccountForm.js';

import './../../App.css';

class InstaList extends Component {

  state = {
    list: {}
  };

  addBusinessAccount = (businessAccount) => {
    var timestamp = (new Date()).getTime();
    this.state.list['account - ' + timestamp ] = businessAccount;
    this.setState({ list : this.state.list });
  }

   render() {

     return (
       <div className="">
          <AddBusinessAccountForm addBusinessAccount={this.addBusinessAccount} />
          <BusinessAccountList list={this.state.list} />
       </div>
     );
   }
}

export default InstaList;
