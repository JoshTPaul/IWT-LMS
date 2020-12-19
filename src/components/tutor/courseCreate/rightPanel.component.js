
import Axios from 'axios';
import { Component } from 'react';
import { Link } from 'react-router-dom';

import ItemList from './itemList.component';


export default class RightPanel extends Component
{

    constructor(props)
    {
        super(props);

        this.onChangeCourseTitle = this.onChangeCourseTitle.bind(this);
        this.onChangeCourseDesc = this.onChangeCourseDesc.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            tID: 0,
            cID: 0,
            cTitle: sessionStorage.getItem('cTitle'),
            cDesc: sessionStorage.getItem('cDesc'),
            lessonArray: []
        }
    }

    componentDidMount()
    {
        
        this.setState({
            tID: 0,
            cID: sessionStorage.getItem('NewcID')
        });
    }

    onChangeCourseTitle(e)
    {
        this.setState({
        cTitle: e.target.value
        })
        sessionStorage.setItem('cTitle', e.target.value) 
    }

    onChangeCourseDesc(e)
    {
        this.setState({
        cDesc: e.target.value
        })
        sessionStorage.setItem('cDesc', e.target.value)
    }

    onSubmit(e)
    {
        e.preventDefault();

        const course = {
            tID : this.state.tID,
            cID:this.state.cID,
            cTitle:this.state.cTitle,
            cDesc:this.state.cDesc
        }

        //sessionStorage.setItem('cID', Number(course.cID)+1);
        Axios.post('http://localhost:5000/courses/add', course)
        .then( res => {
            console.log(res.data);
            Axios.put("http://localhost:5000/students/enrollCourse/1/"+course.cID)
            alert("Course added");
            
            window.location = '/tutorDash'
            
        })
        
        
    }
    render()
    {
        return(
            <div className="rightPanel">
                <form onSubmit={this.onSubmit}>
                    <section>
                        <h2>Course Title</h2>
                        <input type="text" onChange={this.onChangeCourseTitle} required value={sessionStorage.getItem('cTitle')}/>
                    </section>
                    <section>
                        <h2>Course Description</h2>
                        <textarea onChange={this.onChangeCourseDesc} required value={sessionStorage.getItem('cDesc')}></textarea>
                    </section>
                    <ItemList/>
                    <button type="submit">Submit Course</button>
                </form>
            </div>
        );
    }
    
}