import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './newPosts.css';

class NewPosts extends Component {

  constructor(props) {
    super(props);

    this.state = {
      followers_count: 0,
      hits: [],
      isLoading: false,
      isChecked: false
    };
  }

  getData = () => {
    fetch("http://localhost:3001/feed/"+localStorage.getItem('businessID')+"/"+localStorage.getItem('token'), {
      method: 'GET'
    })
      .then(res => res.json())
      .then(json => {
        if (json !== undefined) {
          this.setState({ hits: json, isLoading: false, followers_count: json.followers_count })
        } else {

        }
      });
  }

  componentDidMount = (props) => {
    this.setState({ isLoading: true });
    if (localStorage.getItem('businessID') !== null) {
      this.getData();
    } else {
      this.setState({isLoading: "no token"})
    }
  }

  componentWillReceiveProps =  (props) => {
    this.setState({ isChecked: props.refresh }, () => {
      this.getData();
    }); 
  }

   render() {

     const { hits, isLoading, followers_count } = this.state;

     switch(isLoading) {
      case true:
        return <p>Loading ...</p>;
        break;
      case "no token":
        return <p>You do not have a business account available or you did not choose one. Click on "Choose account" and select it.</p>;
        break;
      default:
      return (
        <div className="newPosts">
        <h1>New Posts</h1>
          <ul>
          {hits.map(hit =>
            <li key={hit.objectID}>
              <img src={hit.media_url} />
              <div className="likes">Likes : {hit.like_count}</div>
              <div className="engagement">Engagement : {(hit.like_count*100) / followers_count}</div>
            </li>
          )}
          </ul>
        </div>
      );
    }
   }
}

export default NewPosts;
