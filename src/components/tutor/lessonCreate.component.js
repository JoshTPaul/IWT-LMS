import { Component } from 'react';
import LeftCard from './lessonCreate/leftCard.component';
import RightPanel from './lessonCreate/rightPanel.component'

export default class LessonCreate extends Component
{
    render()
    {
        return(
            <main>
                <LeftCard/>
                <RightPanel/>
            </main>
        );
    }
}
