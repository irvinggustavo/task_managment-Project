import React, { Component } from 'react';
import Button from '../Button/Button';


class Form extends Component {
    render() {
        return(
<form onSubmit= {this.props.onSubmit} onChange= {this.props.onChange} disabled = {this.props.disable} onKeyPress = {this.props.onKeyPress}>
    <div>
        <label 
            htmlFor = 'note_title'>  Title:
        </label> 
        <input 
            type='text' 
            id='note_title' 
            name ='note_title'/>
    </div>
    <div>
        <textarea 
            id = 'note_text' 
            name = 'note_text'>
        </textarea>
    </div>
    <Button  
        disabled = {this.props.disabled} 
        text = {'Save'}
        />
</form>

        )
    }
}

export default Form