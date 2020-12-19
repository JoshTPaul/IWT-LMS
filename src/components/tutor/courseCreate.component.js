import React, { Component } from 'react'
import Axios from 'axios';
import LeftCard from './courseCreate/leftCard.component';
import RightPanel from './courseCreate/rightPanel.component'

export default class CourseCreate extends Component
{
    componentDidMount()
    {
        Axios.get('http://localhost:5000/lessons/findByCID/'+sessionStorage.getItem('NewcID'))
        .then( res =>
            {
                if(res.data.length>0)
                {
                    sessionStorage.setItem('lID', res.data[res.data.length-1].lID + 1);
                }
                else
                {
                    sessionStorage.setItem('lID', 1);
                }
            })
    }

    render()
    {
        return(
            <main>
                <LeftCard/>
                <RightPanel/>
            </main>
        );
    }
}
