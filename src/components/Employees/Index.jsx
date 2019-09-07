import React, { Component } from 'react';

import logo from '../../logo.svg';

import Employee from './Card'; 
import EmployeeForm from './Form'; 


class Employees extends Component{

  constructor( props ){
    super();
    this.state  ={
      meetings      : props.meetings,
      employees     : props.employees
    }
    this.handleAddEmployee      = this.handleAddEmployee.bind( this );
    this.handleRemoveEmployee   = this.handleRemoveEmployee.bind( this );
    this.updateCounts           = this.updateCounts.bind( this );
  }

  updateCounts() {
		this.props.onUpdateCounters( this.state );
	}

  handleAddEmployee( employee ){
    this.setState(
      {
        employees: [ ...this.state.employees, employee ]
      },
      this.updateCounts );
  }

  handleRemoveEmployee( e ){
    if( window.confirm( "Do you want to Delete this Employee? (This action is going to Delete all the Meetings for this Employee)" ) ){
        this.setState({
            employees : this.state.employees.filter( employee => { return ( employee.employeeID != e.target.id ); } ),
            meetings  : this.state.meetings.filter( meeting => { return ( meeting.employeeID != e.target.id ); } ),
        },
        this.updateCounts );
    }
  }
  render() {
   const employees  = this.props.employees.map( ( employee ) => {
                        return (
                          <Employee onRemoveEmployee={this.handleRemoveEmployee} employee={employee}/>
                        );

                      } )
    return (
      <div className="container-fluid">
        <div className="row mt-4">
          <div className="col-md-4 text-center">
            <div className="row justify-content-md-center">
              <div className="col-lg-8 text-center">
                <img src={logo} className="App-logo" alt="logo" />
                <EmployeeForm  employees={this.props.employees} countEmployees={this.props.employees.length} onAddEmployee={this.handleAddEmployee}></EmployeeForm>
              </div>
            </div>
          </div>
          <div className="col-md-8">
            <div className="max-height-90vh">
              <div className="row mt-4">
                {employees}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

}

export default Employees;