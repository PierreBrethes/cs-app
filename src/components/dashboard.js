import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import request from '../js/fetch.js';
import InstaList from './businessAccountsList/instaList.js';
import Modal from 'react-modal';
import NewPosts from './newPosts/newPosts.js';
import './../App.css';

class Dashboard extends Component {

  constructor() {
    super();

    this.state = {
      modalIsOpen: false,
      businessLoading: false,
      hasBusinessAccount: false,
      refreshNewPosts: false
    };

    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }


    openModal() {
      if (this.state.businessLoading) {

      } else {
        this.getData();
        this.setState({modalIsOpen: true, businessLoading: false});
      }
    }

    afterOpenModal() {
      // references are now sync'd and can be accessed.
      // this.subtitle.style.color = '#f00';
    }

    closeModal() {
      this.setState({modalIsOpen: false});
    }

    setBusinessID(id) {
      localStorage.setItem('businessID', id);
      this.setState({modalIsOpen: false, refreshNewPosts: true});
    }

    getData = () => {
      fetch("https://graph.facebook.com/v3.2/me/accounts?fields=instagram_business_account,name&access_token="+localStorage.getItem('token'))
        .then(res => res.json())
        .then(json => {
          const business = json.data.map((index) => {

            if (index.instagram_business_account !== undefined ) {
              this.setState({hasBusinessAccount: true});
              return <button className="chooseAccount" onClick={() => { this.setBusinessID(index.instagram_business_account.id, index.name) }}>{index.name}</button>
            }
          });
          this.setState({ hits: business,  isLoading: false})
        });
    }

  render() {

    const customStyles = {
      content : {
        top                   : '50%',
        left                  : '50%',
        right                 : 'auto',
        bottom                : 'auto',
        marginRight           : '-50%',
        transform             : 'translate(-50%, -50%)'
      }
    };

    const { hits, isLoading } = this.state;

    if (isLoading) {
      return <p>Loading ...</p>;
    }

    return (
      <div className="dashboard">
        <button className="settings"><a onClick={this.openModal}>Choose account</a></button>
        <Modal
            isOpen={this.state.modalIsOpen}
            onAfterOpen={this.afterOpenModal}
            onRequestClose={this.closeModal}
            style={customStyles}
          >
            <button onClick={this.closeModal}>close</button>
            <div>
              {this.state.hasBusinessAccount ? (
                <div>{hits}</div>
              ) : (
                "Vous n'avez aucun compte business."
              )}
            </div>
        </Modal>
        <NewPosts
          refresh={this.state.refreshNewPosts}
        />
      </div>
    );
  }
}

export default Dashboard;
