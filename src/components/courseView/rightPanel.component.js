import Axios from 'axios';
import { Component } from 'react';
import Lesson from './lesson.component'

export default class rightPanel extends Component 
{
    constructor(props)
    {
        super(props);
        this.state={
            count: Number,
            lessons: []
        }
        this.onSubmit = this.onSubmit.bind(this)
    }

    componentDidMount()
    {
        Axios.get("http://localhost:5000/lessons/findbyCID/"+sessionStorage.getItem("cID"))
        .then( res =>
            {
                this.setState(
                    {
                        count: res.data.length,
                        lessons: res.data
                    }
                )
            }
            )
    }

    onSubmit(e)
    {
        e.preventDefault();
    }
    render(){
        return (
            <div className='rightPanel'>
                    {this.state.lessons.map( function(obj, index){
                        return(
                            <Lesson index={index+1} lTitle={obj.lTitle} lID={obj.lID}/>
                        )
                    })}
            </div>
        );
    }
}