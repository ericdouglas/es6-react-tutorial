import React, { Component } from 'react';

class CommentForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      author: '',
      text: ''
    };

    this.handleAuthorChange = this.handleAuthorChange.bind(this);
    this.handleTextChange   = this.handleTextChange.bind(this);
    this.handleSubmit       = this.handleSubmit.bind(this);
  }

  handleAuthorChange(e) {
    this.setState({
      author: e.target.value
    });
  }

  handleTextChange(e) {
    this.setState({
      text: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();

    let author = this.state.author.trim();
    let text   = this.state.text.trim();

    if (!text || !author) {
      return;
    }

    this.props.onCommentSubmit({
      author: author,
      text: text
    });

    this.setState({
      author: '',
      text: ''
    });
  }

  render() {
    return (
      <form className="commentForm"
            onSubmit={ this.handleSubmit }>
        <input type="text"
               placeholder="Your Name"
               value={ this.state.author }
               onChange={ this.handleAuthorChange } />
        <input type="text"
               placeholder="Say something..."
               value={ this.state.text }
               onChange={ this.handleTextChange } />
        <input type="submit" value="Post" />
      </form>
    );
  }
}

export default CommentForm;
