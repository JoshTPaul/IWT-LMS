import Axios from 'axios';
import { Component } from 'react';
import CourseCard from '../courseCard.component'
export default class registeredCourses extends Component
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
        //CHANGE THE LINK THING
        let arr = [];
        let arr2 = [];
        Axios.get('http://localhost:5000/students/findbysID/1')
        .then( res =>
            {
                if(res.data.length>0)
                {
                    arr = res.data[0].regCourses;
                    for(let i=0; i< arr.length; i++)
                    {
                        Axios.get('http://localhost:5000/courses/findbycID/'+arr[i])
                        .then( res =>
                            {
                                arr2.push(res.data[0])
                                this.setState(
                                    {
                                        coursesArray: arr2
                                    }
                                )
                            }
                        )
                    }
                }
            })
    }

    render()
    {
        console.log(this.state.coursesArray);
        if(this.state.coursesArray.length === 0){
            return(
                <section>
                    <div style={{display: "flex", justifyContent: "space-between"}}>
                        <h1>Registered Courses</h1>
                    </div>
                    <div className="deep">
                        <h2 style={{textAlign:"center"}}>You have not registered for any course.</h2>
                    </div>
                </section>
            )
        }
        else{
            let bgColor= null;
            return(<section>
                <div style={{display: "flex", justifyContent: "space-between"}}>
                    <h1>Registered Courses</h1>
                </div>
                <div className="deep" style={{display: "flex"}}>
                {
                    this.state.coursesArray.map( function(obj){
                    return <CourseCard courseTitle={obj.cTitle} cID={obj.cID} bg={ bgColor }/>
                    })
                }
                </div>
        </section>)
            
        }
        
    }
}