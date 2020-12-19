import { Component } from "react";

export default class LeftCard extends Component
{
    constructor(props)
    {
        super(props)
    }
    
    render()
    {
        return(
        <div className="leftCard">
            <div className="leftCard-img"><i className={this.props.icon}></i></div>
            <hr/>
            <h1>{this.props.name}</h1>
            <p style={{textAlign: "left"}}>{this.props.desc}</p>
        </div>
        )
    }
}
