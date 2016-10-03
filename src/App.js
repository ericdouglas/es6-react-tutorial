import React, { Component } from 'react';

import CommentBox from './components/CommentBox';

class App extends Component {
  render() {
    return (
      <CommentBox url="/api/comments" pollInterval={ 3000 } />
    );
  }
}

export default App;
