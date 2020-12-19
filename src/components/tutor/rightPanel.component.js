import StudentList from './studentList.component.js'
import MyCourses from './myCourses.component'

function rightPanel()
{
    return(
        <div className="rightPanel">
            <StudentList/>
            <MyCourses/>
        </div>
    );
}

export default rightPanel;