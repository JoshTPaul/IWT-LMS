import { Component } from "react";
import { Link } from 'react-router-dom'
 
export default class courseCard extends Component
{
    constructor(props)
    {
        super(props);
        this.onClick = this.onClick.bind(this)
    }

    onClick(e)
    {
        e.preventDefault();

        sessionStorage.setItem('cID', this.props.cID);
        window.location = '/courseView';
    }

    render()
    {
        return(
            <form onSubmit={this.onClick}>
                <button type='submit' className="courseCard" >
                    <div className="courseImg" style={{backgroundColor: this.props.bg}}></div>
                    <h2>{this.props.courseTitle}</h2>
                </button>
            </form>
        )
    }
}