/** 
   * @author: Mukesh Sharma
  */
import React, { Component } from 'react';
import axios from 'axios';

//https://www.reddit.com/r/space.json
class Apicall extends Component {

   //every time Component load
  componentWillMount(){ 
    this.getRiddit();
  }

  //An entirely client-side javascript wrapper for the Reddit API
  getRiddit(){
    axios.get(`https://www.reddit.com/r/${this.state.subreddit}.json`)
    .then( res =>{
      const posts = [];
      const lis = res.data.data.children.map(obj => obj.data);
      for (var i=0; i<10; i++) {
          posts.push(lis[i]);
      }
      this.setState({posts});
    });
  }

  constructor(props){
    super(props);
    this.state = {
      posts: [],
      subreddit: 'space'
    };
    this.getRiddit = this.getRiddit.bind(this);
  }
  render() {
    return (
      <div className="container">
        <h1>Top 10 Crypto News</h1>
        <ol className="list-group">
          {this.state.posts.map(post =>
            <li className="list-group-item text-left" key={post.id}>
            <a href={post.url} target="_blank">{post.title}</a></li>
          )}
        </ol>
      </div>
    );
  }
}

export default Apicall;
