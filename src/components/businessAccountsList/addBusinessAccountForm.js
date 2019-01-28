import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './../../App.css';

class AddBusinessAccountForm extends Component {

  createAccount = (e) => {
    e.preventDefault();
    let account = this.refs.accountName.value;
    if(typeof account === 'string' && account.length > 0) {
      this.props.addBusinessAccount(account);
      this.refs.accountForm.reset();
    }
  };

   render() {

     return (
       <form className="" ref="accountForm" onSubmit={this.createAccount}>
       <div className="">
         <label for="fruitItem">
           Account Name
           <input type="text" id="AccountItem" placeholder="" ref="accountName" className="" />
         </label>
       </div>
       <button type="submit" className="">Add account</button>
      </form>
     );
   }
}

export default AddBusinessAccountForm;
