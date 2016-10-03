import React, { Component } from 'react';
import axios from 'axios';

import CommentList from './CommentList';
import CommentForm from './CommentForm';

class CommentBox extends Component {
  constructor(props) {
    super(props);
    console.log(props);

    this.state = {
      data: []
    };
  }

  loadCommentsFromServer() {
    axios
      .get(this.props.url)
      .then((response) => {
        this.setState({
          data: response.data
        });
      })
      .catch((error) => {
        console.error(this.props.url, error.toString());
      });
  }

  componentDidMount() {
    this.loadCommentsFromServer();
    setInterval(() => this.loadCommentsFromServer(), this.props.pollInterval);
  }

  render() {
    return (
      <div className="comment-box">
        <h1>Comments</h1>

        <CommentList data={ this.state.data } />
        <CommentForm />
      </div>
    );
  }
}

export default CommentBox;
