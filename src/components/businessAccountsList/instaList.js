import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import BusinessAccountList from './businessAccountList.js';
import AddBusinessAccountForm from './addBusinessAccountForm.js';

import './../../App.css';

class InstaList extends Component {

  constructor(props) {
    super(props);

    this.state = {
      list: [],
      isLoading: false,
    };
  }

  getData = () => {
    fetch("http://localhost:3001/spyinglist/172321")
      .then(res => res.json())
      .then(json => {
        const newState = this.state.list;
        json.map((index) => {
          const x = {businessAccount: index.name}
          newState.push(x);
        })
        this.setState({list: newState, isLoading: false});
      })
  }

  componentDidMount = (props) => {
    this.setState({ isLoading: true });
    this.getData();
    console.log(this.state.list);
  }

  addBusinessAccount = (businessAccount) => {
    const newState = this.state.list;
    const item = {businessAccount};
    newState.push(item);
    this.setState({list: newState});
    console.log(this.state.list);
  }

   render() {

     const { isLoading } = this.state;

     if (isLoading) {
       return <p>Loading ...</p>;
     }

     return (
       <div className="">
          <AddBusinessAccountForm addBusinessAccount={this.addBusinessAccount} />
          <BusinessAccountList list={this.state.list} />
       </div>
     );
   }
}

export default InstaList;
