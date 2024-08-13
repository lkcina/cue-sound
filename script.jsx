import React from 'react';
import ReactDOM from 'react-dom/client';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        library: [],
        events: []
        };
  }
  
    render() {
    return (
      <div>
        <h1>Hello, world!</h1>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));