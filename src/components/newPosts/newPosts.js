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
    };
  }

  getData = () => {
    fetch("http://localhost:3001/spyinglist/"+localStorage.getItem('businessID')+"/"+localStorage.getItem('token'), {
      method: 'GET'
    })
      .then(res => res.json())
      .then(json => this.setState({ hits: json.media.data, isLoading: false, followers_count: json.followers_count }));
  }

  componentDidMount = (props) => {
    this.setState({ isLoading: true });
    if (localStorage.getItem('businessID') !== null) {
      this.getData();
    } else {
      this.setState({isLoading: "no token"})
    }
  }

   render() {

     const { hits, isLoading, followers_count } = this.state;

     switch(isLoading) {
      case true:
        return <p>Loading ...</p>;
        break;
      case "no token":
        return <p>No token business available</p>;
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
