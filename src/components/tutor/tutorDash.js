import Axios from 'axios';
import { Component } from 'react';
import LeftCard from '../leftCard.component';
import RightPanel from './rightPanel.component';

export default class TutorDash extends Component
{
  constructor(props)
  {
    super(props);

    this.state={
      tName: '',
      tDesc: ''
    }
  }
  componentDidMount()
  {
    Axios.get('http://localhost:5000/tutors/findByUsername/'+sessionStorage.getItem('username'))
  .then(res => {
    this.setState({ tName: res.data[0].tName });
  })
  sessionStorage.setItem('cTitle', '')
  sessionStorage.setItem('cDesc', '')
  }
  
  render()
  {
    return(
      <main>
        <LeftCard icon={"gg-user"} name={this.state.tName} desc={"Welcome to the Tutor Dashboard. Here you can create and manage your courses, as well as other features that will be added soon."}></LeftCard>
        <RightPanel/>
      </main>
    );
  }
    
}
