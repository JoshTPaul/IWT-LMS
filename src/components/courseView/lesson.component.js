
import { Component } from 'react';

export default class Lesson extends Component 
{
    constructor(props)
    {
        super(props);
        this.onSubmit = this.onSubmit.bind(this)
    }


    onSubmit(e)
    {
        e.preventDefault();
        console.log(this.props.lID);
        sessionStorage.setItem('lID', this.props.lID)
        window.location = '/lessonView'
    }
    render(){
        return (
            <form onSubmit={this.onSubmit}>
                <button type="submit" className="lesson">
                    <h1>Lesson {this.props.index}: {this.props.lTitle}</h1>
                </button>
            </form>
        )
    }
}