import React, {Component} from 'react';
import Note from '../Note/Note';
import { v4 as uuidv4 } from 'uuid';

class NoteList extends Component {  
    render () {
        
      return (
        <div>
          {this.props.notes.map ( (item) => {
        return (
            <Note 
                title = {item.title}
                text = {item.text}
                key = {uuidv4()}/>
        )
    })}
        </div>
      )
    }
  }


  export default NoteList