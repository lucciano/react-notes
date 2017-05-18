import React, { Component } from 'react';
import './App.css';

import uuid from 'uuid';
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
  addNote = () => {
	   this.setState({
		 notes: this.state.notes.concat([{
			 id: uuid.v4(),
			 task: 'New task'
		 }])
	    });
  }
  
   deleteNote = (id, e) => {
	e.stopPropagation();
	this.setState({
		notes: this.state.notes.filter(note => note.id !== id)
	});
    }

    activateNoteEdit = (id) => {
	this.setState({
		notes: this.state.notes.map(note => {
			if(note.id === id) {
				note.editing = true;
			}
			return note;
		})
	});
     }
    editNote = (id, task) => {
	this.setState({
		notes: this.state.notes.map(note => {
			if(note.id === id) {
				note.editing = false;
				note.task = task;
			}
			return note;
		})
	});
    }

  render() {
    const {notes} = this.state;
    return (
      <div className="App">
      <button className="add-note" onClick={this.addNote}>+</button>
        <Notes
		notes={notes}
		onNoteClick={this.activateNoteEdit}
		onEdit={this.editNote}
		onDelete={this.deleteNote}
	/>
      </div>
    );
  }
}

export default App;
