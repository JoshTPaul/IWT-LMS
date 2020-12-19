import Axios from 'axios';
import { Component } from 'react';
import LeftCard from '../leftCard.component';
import RightPanel from './rightPanel.component';

export default class StudentDash extends Component
{
  constructor(props)
  {
    super(props);
  }

  
  render()
  {
    return(
      <main>
        <LeftCard icon="gg-user" name="Joshua's Dashboard" desc="Welcome to your dashboard. This page allows you to have an overview of the courses you have registered for. You can also explore new courses from here."></LeftCard>
        <RightPanel/>
      </main>
    );
  }
    
}