import { Component } from 'react';

export default class Item extends Component
{
    render()
    {
        return(
            <div className="item">
                <h2>{this.props.aTitle}</h2>
            </div>
        );
    }
}