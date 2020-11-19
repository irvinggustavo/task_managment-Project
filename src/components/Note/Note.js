import React, { Component } from 'react';
import './Note.css';

class Note extends Component {
    state = {
      visibility : ''
    }

    toggle = () => {
      this.setState(
        {
          visibility : !this.state.visibility
        }
      )
    };

    render () {
      return (
        <div className = 'note'>
          <p onClick = {this.toggle}>{this.props.title}</p>
          <p className = {this.state.visibility? 'visible' : 'hidden'}  > {this.props.text} </p>
          <p className = {this.state.visibility? 'visible' : 'hidden'}> {new Date().toLocaleTimeString()}</p>
        </div>
      )
    }
  }

  export default Note