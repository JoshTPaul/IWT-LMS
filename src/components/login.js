import { Component } from 'react';
import NavBar from './navbar.component'

export default class LogIn extends Component
{
    onSubmitStudent(e)
    {
        e.preventDefault();
        window.location = '/studentDash';
    }

    onSubmitTutor(e)
    {
        e.preventDefault();
        window.location = '/tutorDash';
    }

    render()
    {
        return(
            <div className="loginContainer">
                <form onSubmit={this.onSubmitStudent} className="loginCard" style={{borderRight: "1px solid"}}>
                    <h1>Student Login</h1>
                    <label>Username:</label>
                    <input type="text"/>
                    <button type="submit">Login</button>
                </form>
                <form onSubmit={this.onSubmitTutor} className="loginCard">
                    <h1>Tutor Login</h1>
                    <label>Username:</label>
                    <input type="text"/>
                    <button type="submit">Login</button>
                </form>
            </div>
        )
    }
}