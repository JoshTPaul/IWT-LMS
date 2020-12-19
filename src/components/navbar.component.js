import { Component } from "react"

export default class NavBar extends Component
{
    constructor(props)
    {
        super(props)
        this.backButton = this.backButton.bind(this)
        this.logoutButton = this.logoutButton.bind(this)
    }

    backButton(e)
    {
        e.preventDefault()
        window.history.back()
    }

    logoutButton(e)
    {
        e.preventDefault()
        window.location ='/'
    }

    render()
    {
        return(
            <header>
                <form onSubmit={this.backButton}><button type="submit"><i className="gg-arrow-left"></i></button></form>
                    IWT PROJECT
                <form onSubmit={this.logoutButton}><button onclick="window.location = '/'"style={{border: "1px solid", padding: "5px", fontSize: "0.7em"}}>Logout</button></form>
            </header>
        )
    }
    
}
 