import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './../../App.css';

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
    fetch("http://localhost:3001/test/"+localStorage.getItem('token'))
      .then(res => res.json())
      .then(json => this.setState({ hits: json.media.data, isLoading: false, followers_count: json.followers_count }));
  }

  componentDidMount = (props) => {
    this.setState({ isLoading: true });
    this.getData();
  }

   render() {

     const { hits, isLoading, followers_count } = this.state;

     if (isLoading) {
       return <p>Loading ...</p>;
     }

     return (
       <div className="newPosts">
       <h1>New Posts</h1>
         <ul>
         {hits.map(hit =>
           <li key={hit.objectID}>
             <img src={hit.media_url} />
             Likes : {hit.like_count}
             Engagement : {(hit.like_count*100) / followers_count}
           </li>
         )}
         </ul>
       </div>
     );
   }
}

export default NewPosts;
