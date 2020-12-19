import Axios from "axios";
import { Component } from "react";
import ReactHtmlParser from 'react-html-parser';

export default class lessonView extends Component
{
    constructor(props)
    {
        super(props);
        this.state={
            lesson: Object
        }
    }
    componentDidMount()
    {
        Axios.get("http://localhost:5000/lessons/findByCID/"+sessionStorage.getItem('cID')+"/findByLID/"+sessionStorage.getItem('lID'))
        .then( res=>
            {
                this.setState({
                    lesson: res.data
                })
            })
    }
    render()
    {
        return(
            <div className="lessonMain">
                <h1 style={{textAlign: "center", marginBottom: "1em", fontSize: "3.5em"}}>{this.state.lesson.lTitle}</h1>
                <br/>
                {ReactHtmlParser(this.state.lesson.lContent)}
            </div>
        )
    }
}