import React, { Component } from 'react';
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'; 
import axios from 'axios';


export default class LessonMaker extends Component
{
  constructor(props)
  {
    super(props);

    this.onChangeLessonTitle = this.onChangeLessonTitle.bind(this);
    this.onChangeLessonContent = this.onChangeLessonContent.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      username: '',
      cID: 0,
      lID: 0,
      lTitle: '',
      lContent: '',
    }
  }

  componentDidMount()
  {
    
    this.setState({
      username: sessionStorage.getItem('username'),
      cID: sessionStorage.getItem('NewcID'),
      lID: sessionStorage.getItem('lID')
    })
  }

  onChangeLessonTitle(e)
  {
    this.setState({
      lTitle: e.target.value
    })
  }

  onChangeLessonContent(data)
  {
    this.setState({
      lContent: data
    })
  }

  onSubmit(e)
  {
    e.preventDefault();

    const lesson = {
      username : this.state.username,
      cID:this.state.cID,
      lID: this.state.lID,
      lTitle:this.state.lTitle,
      lContent:this.state.lContent
    }

    console.log(lesson);
    if(lesson.lContent==='')
    {
      console.log("No content");
    }
    else
    {
      axios.post('http://localhost:5000/lessons/add', lesson)
      .then(res => {console.log(res.data);
      alert("Lesson added");
      window.location = '/tutorDash/courseCreate';
      });
    }
    
  }

  render()
  {
    return(
      <form onSubmit={this.onSubmit}>
      <section>
        <h2>Lesson Title</h2>
        <input type="text" onChange={this.onChangeLessonTitle} required></input>
      </section>
      <section>
        <h1>Lesson Content</h1>
        <div >
          <CKEditor
            editor={ClassicEditor}
            onChange={( event, editor ) => {
              const data = editor.getData();
              console.log("Data changed" );
              this.onChangeLessonContent(data);
              }}
          />
        </div>
        <button type="submit">Submit</button>
      </section>
      </form>
    )
  }
}