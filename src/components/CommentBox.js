import React, { Component } from 'react';
import axios from 'axios';

import CommentList from './CommentList';
import CommentForm from './CommentForm';

class CommentBox extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: []
    };

    this.handleCommentSubmit = this.handleCommentSubmit.bind(this);
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
        console.error(this.props.url, error);
      });
  }

  handleCommentSubmit(comment) {
    // TODO: refresh the list
    // TODO: if can't save the comment in the server
    // save it in the browser

    axios
      .post(this.props.url, comment)
      .then((response) => {
        this.setState({ data: response.data })
      })
      .catch((error) => {
        console.error(this.props.url, error);
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
        <CommentForm onCommentSubmit={ this.handleCommentSubmit } />
      </div>
    );
  }
}

export default CommentBox;
