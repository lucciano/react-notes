import React, { Component } from 'react';
import './App.css';

import Notes from './app/components/Notes';

class App extends Component {
  constructor(props) {
	  super(props);
	  this.state = { notes: [
	{
		id: '4e81fc6e-bfb6-419b-93e5-0242fb6f3f6a',
		task: 'Learn React'
	},
	{
		id: '11bbffc8-5891-4b45-b9ea-5c99aadf870f',
		task: 'Do laundry'
	}
	  ]
	  };
  }

  render() {
    const {notes} = this.state;
    return (
      <div className="App">
      <button onClick={() => console.log('add note')}>+</button>
	<Notes notes={notes}/>
      </div>
    );
  }
}

export default App;
