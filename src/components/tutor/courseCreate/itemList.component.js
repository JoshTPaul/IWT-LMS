import Axios from "axios";
import { Component } from "react"
import Item from './item.component'
import { Link } from 'react-router-dom'

export default class ItemList extends Component
{
    constructor(props)
    {
        super(props);

        this.state = 
        {
            lessonArray: []
        }
    }

    componentDidMount()
    {
        Axios.get("http://localhost:5000/lessons/findbyCID/"+sessionStorage.getItem('NewcID'))
        .then(res => {
            if(res.data.length>0)
            {
                this.setState(
                    {
                        lessonArray: res.data.map(obj => obj.lTitle)
                    }
                )
            }
        })
    }

    render()
    {
        if(this.state.lessonArray.length > 0)
        {
            return(
                <section>
                    <div style={{display: "flex", justifyContent: "space-between"}}>
                        <h1>Lesson List</h1>
                        <Link to="/tutorDash/courseCreate/lessonCreate"><h1>+ Create Lesson</h1></Link>
                    </div>
                    <div className="deep">
                        {
                            this.state.lessonArray.map(function(lTitle){
                                return <Item aTitle={lTitle}></Item>
                            })
                        }
                    </div>
                </section>
            );
        }

        else{
            return(
                <section>
                    <div style={{display: "flex", justifyContent: "space-between"}}>
                        <h1>Lesson List</h1>
                        <Link to="/tutorDash/courseCreate/lessonCreate"><h1>+ Create Lesson</h1></Link>
                    </div>
                    <div className="deep">
                        <h2 style={{textAlign:"center"}}>You have not made any lessons</h2>
                        <p style={{textAlign:"center"}}>Create a lesson by clicking the <em>Create</em> button</p>
                    </div>
                </section>
            )
        }
        
    }
    
}
