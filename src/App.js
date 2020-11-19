import React, { Component } from "react";
import NoteList from "./components/NoteList/NoteList";
import Form from "./components/Form/Form";
import "./App.css";

class App extends Component {
  state = {
    note: {
      title: "",
      text: "",
    },
    noteslist: [
      {
        title: "Note 1",
        text: "Get some stuff from the store",
      },
      {
        title: "Note 2",
        text: "Get some stuff from the store",
      },
      {
        title: "Note 3",
        text: "Get some stuff from the store",
      },
    ],

    disabled: true,
  };

  handleSubmit = (event) => {
    event.preventDefault();
    let sameNote = this.state.noteslist.find(
      (note) => note.title === event.target.note_title.value
    );

    // console.log(sameNote)
    if (sameNote === undefined) {
      this.setState({
        noteslist: this.state.noteslist.concat({
          title: event.target.note_title.value,
          text: event.target.note_text.value, 
        }),
        disabled: true,
      });
    } else {
      let updatedNote = this.state.noteslist.indexOf(sameNote);
      let NotesListCopy = this.state.noteslist.slice();

      NotesListCopy[updatedNote] = {
        title: event.target.note_title.value,
        text: event.target.note_text.value,
      };

      this.setState({
        noteslist: NotesListCopy,
        disabled: true
      });
    };
    event.target.note_title.value = "";
    event.target.note_text.value = "";

  };

  onChange = () => {
    if (!this.state.note.title && !this.state.note.text) {
      this.setState({
        disabled: false,
      });
    }
  };

  handleKeypress = (e) => {
    if (e.keyCode === 13) {
      this.handleSubmit()
    }
  }

  render() {
    return (
      <div className="App">
        <div className="container">
          <div>
            <h1>React Notes</h1>
          </div>

          <div className="row">
            <div className="col-4">
              <div>
                <h2>Notes</h2>

                <NoteList notes={this.state.noteslist} />
              </div>
            </div>
            <div className="col-8">
              <div>
                <Form
                  onKeypress = {this.handleKeypress}
                  onSubmit={this.handleSubmit}
                  onChange={this.onChange}
                  disabled={this.state.disabled}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
