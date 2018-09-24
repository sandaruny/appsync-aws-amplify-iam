import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Amplify, { API, graphqlOperation } from "aws-amplify";

const ListPosts = `query ListPosts {
  listPosts {
    items {
      id
      title
    }
  }
}`;


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      posts: [],
    }
  }

  async componentWillMount() {
    const allPosts = await API.graphql(graphqlOperation(ListPosts));
    console.log(allPosts);
    this.setState({ posts: allPosts.data.listPosts.items });
  }

  render() {
    const { posts } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          {
            posts.map((post, idx) => <div key={idx}>{post.title}</div>)
          }
        </p>
      </div>
    );
  }
}

export default App;
