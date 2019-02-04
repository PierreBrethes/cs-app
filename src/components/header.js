import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Cookies from 'universal-cookie';
import Facebook from './facebook.js';
import request from '../js/fetch.js';
import arrowPng from '../img/arrow.png';
import Modal from 'react-modal';
import './../App.css';

class Header extends Component {

  constructor() {
    super();

    this.state = {
      modalIsOpen: false,
      isLoading: false,
      businessLoading: false,
      hasBusinessAccount: false
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
    this.setState({modalIsOpen: false});
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
        })
        if (this.state.hasBusinessAccount === false) {
          return <div>Vous n'avez aucun compte business.</div>
        }
        this.setState({ hits: business,  isLoading: false})
      });
  }

  componentDidMount = (props) => {
    // this.setState({ isLoading: true });
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
      <div className="header">
        <div className="title">Content Stream</div>
        <Facebook />
        <button className="settings"><a onClick={this.openModal}>Choose account</a></button>
        <Modal
            isOpen={this.state.modalIsOpen}
            onAfterOpen={this.afterOpenModal}
            onRequestClose={this.closeModal}
            style={customStyles}
          >
            <button onClick={this.closeModal}>close</button>
            <div>{hits}</div>
          </Modal>
      </div>
    );
  }
}

export default Header;
