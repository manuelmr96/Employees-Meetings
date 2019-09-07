import React, { Component } from "react";

import { NavLink,Link } from "react-router-dom";

class Navigation extends Component {

    constructor( props ){
        super();
        this.state={
            countMeetings   : props.meetings.length,
            countEmployees  : props.employees.length,
        }
        this.refresh      = this.refresh.bind( this );    
    }

    refresh( props ){
        this.setState({
            countMeetings   : props.meetings.length,
            countEmployees  : props.employees.length,
        });
    }

    render(){
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <Link className="navbar-brand" to="/">CHALLENGE</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink className="nav-link" exact to="/">Meetings <span className="badge badge-pill badge-light">{ this.state.countMeetings }</span></NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/employees">Employees <span className="badge badge-pill badge-light">{ this.state.countEmployees }</span></NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/avilable-time">Available time</NavLink>
                        </li>
                        <li className="nav-item dropdown">
                            <NavLink className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Responses
                            </NavLink>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <NavLink className="dropdown-item" to="/data-available-employees-time">Avilable time</NavLink>
                                <div className="dropdown-divider"></div>
                                <NavLink className="dropdown-item" to="/data-employees-meetings">Meetings</NavLink>
                            </div>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }

}
export default Navigation;