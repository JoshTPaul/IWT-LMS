import Axios from 'axios';
import { Component } from 'react';

import LeftCard from '../leftCard.component';
import RightPanel from './rightPanel.component';

export default class courseView extends Component 
{
    constructor(props)
    {
        super(props);

        this.state={
            course: Object
        }
    }
    componentDidMount()
    {
        Axios.get("http://localhost:5000/courses/findbycID/"+sessionStorage.getItem('cID'))
        .then(
            res =>
            {
                this.setState({
                    course: res.data[0]
                })
            }
        )
    }

    render(){
        return (
            <main>
                <LeftCard icon="gg-file-document" name={this.state.course.cTitle} desc={this.state.course.cDesc}></LeftCard>
                <RightPanel/>
            </main>
        );
    }
}