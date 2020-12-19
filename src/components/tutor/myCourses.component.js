import Axios from 'axios';
import { Component } from 'react';
import { Link } from 'react-router-dom';
import CourseCard from '../courseCard.component';

export default class MyCourses extends Component
{
    constructor(props)
    {
        super(props);
        
        this.state={
            coursesArray: []
        }
    }

    componentDidMount()
    {
        Axios.get('http://localhost:5000/courses/')
        .then( res =>
            {
                if(res.data.length>0)
                {
                    sessionStorage.setItem('NewcID', res.data[res.data.length-1].cID+1);
                }
                else
                {
                    sessionStorage.setItem('NewcID', 1);
                }
            })
        Axios.get('http://localhost:5000/courses/findBytID/'+sessionStorage.getItem('tID'))
        .then( res =>
            {
                if(res.data.length>0)
                {
                    this.setState({
                        coursesArray: res.data
                    })
                }
                
            })
    }

    render()
    {
        if(this.state.coursesArray.length === 0){
            return(
                <section>
                    <div style={{display: "flex", justifyContent: "space-between"}}>
                        <h1>My Courses</h1>
                        <Link to="/tutorDash/courseCreate"><h1>+ Create Course</h1></Link>
                    </div>
                    <div className="deep">
                    <h2 style={{textAlign:"center"}}>You have not made any courses</h2>
                    <p style={{textAlign:"center"}}>Create a course by clicking the <em>Create</em> button</p>
                    
                    </div>
                </section>
            )
        }
        else{
            let bgColor= null;
            return(<section>
                <div style={{display: "flex", justifyContent: "space-between"}}>
                    <h1>My Courses</h1>
                    <Link to="/tutorDash/courseCreate"><h1>+ Create</h1></Link>
                </div>
                <div className="deep" style={{display: "flex"}}>
                {
                    this.state.coursesArray.map( function(obj){
                    return <CourseCard courseTitle={obj.cTitle} bg={ bgColor } cID={obj.cID}/>
                    })
                }
                </div>
        </section>)
            
        }
        
    }
}
