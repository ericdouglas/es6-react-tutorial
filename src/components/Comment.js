import React, { Component } from 'react';
import Remarkable from 'remarkable';

class Comment extends Component {
  rawMarkup() {
    let md = new Remarkable();
    let rawMarkup = md.render(this.props.children.toString());

    return { __html: rawMarkup };
  }

  render() {
    return (
      <div className="comment">
        <h2 className="commentAuthor">
          { this.props.author }
        </h2>

        <span dangerouslySetInnerHTML={ this.rawMarkup() } />
      </div>
    );
  }
}

export default Comment;
