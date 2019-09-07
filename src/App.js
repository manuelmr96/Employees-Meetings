import React, { Component } from 'react';
import './App.css';

import { BrowserRouter as Router, Route } from "react-router-dom";

import Navigation from './components/Navigation/Index'; 
import Meetings from './components/Meetings/Index'; 
import Employees from './components/Employees/Index'; 
import TimeAvailable from './components/TimeAvailable/Index';
import AvailableEmployeesTime from './data/AvailableEmployeesTime';
import EmployeesMeetings from './data/EmployeesMeetings';

import { meetings } from './meetings.json';
import { employees } from './employees.json'; 

class App extends Component{

  constructor(){
    super();
    this.state  ={
      meetings,
      employees
    }
    this.handleCounter      = this.handleCounter.bind( this );
    this.navigationElement  = React.createRef();
  }

  handleCounter( state ){
    this.setState(
      { 
        meetings: state.meetings,
        employees: state.employees
      },
      ()  =>  { this.navigationElement.current.refresh( this.state ); } 
    );
  }

  render() {
    return (
        <Router>
            <Navigation ref={this.navigationElement}  meetings={this.state.meetings} employees={this.state.employees}/>
            <Route exact path="/"     render={() => <Meetings meetings  = { this.state.meetings } employees  = { this.state.employees } onUpdateCounters={ this.handleCounter }/>} />
            <Route path="/employees"   render={() => <Employees meetings  = { this.state.meetings } employees  = { this.state.employees } onUpdateCounters={ this.handleCounter } />}  />
            <Route path="/avilable-time" render={  ()  => <TimeAvailable  meetings  = { this.state.meetings } employees  = { this.state.employees }/> }/>
            <Route path="/data-available-employees-time" render={  ()  => <AvailableEmployeesTime  meetings  = { this.state.meetings } employees  = { this.state.employees }/> }/>
            <Route path="/data-employees-meetings" render={  ()  => <EmployeesMeetings  meetings  = { this.state.meetings } employees  = { this.state.employees }/> }/>
        </Router>
    );
  }

}

export default App;