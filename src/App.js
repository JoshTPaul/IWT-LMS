import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './App.css';

import TutorDash from './components/tutor/tutorDash'
import StudentDash from './components/student/studentDash'
import Navbar from './components/navbar.component'
import CourseCreate from './components/tutor/courseCreate.component'
import LessonCreate from './components/tutor/lessonCreate.component'
import { Component } from 'react';
import Axios from 'axios';
import LogIn from './components/login';
import CourseView from './components/courseView/courseView'
import LessonView from './components/lessonView/lessonView'

export default class App extends Component 
{
  
  componentDidMount()
  {
    //Save username to sessionStorage
    Axios.get("http://localhost:5000/tutors/findByUsername/Admin")
    .then(res => {
      sessionStorage.setItem("username", res.data[0].username);
      sessionStorage.setItem("tID", res.data[0].tID);
      console.log('User '+sessionStorage.getItem('username')+" logged in!")
    })
  }


  render(){
    return (
      <Router>
        <Navbar/>
        <Switch>
          <Route path="/" exact component={LogIn}/>
          <Route path="/studentDash" exact component={StudentDash}/>
          <Route path="/tutorDash" exact component={TutorDash}/>
          <Route path="/tutorDash/courseCreate" exact component={CourseCreate}/>
          <Route path="/tutorDash/courseCreate/lessonCreate" exact component={LessonCreate}/>
          <Route path='/courseView' exact component={CourseView}/>
          <Route path='/lessonView' exact component={LessonView}/>
        </Switch>
      </Router>
    );
  }
}