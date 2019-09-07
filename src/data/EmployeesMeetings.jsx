import React, { Component } from 'react';


class AvailableEmployeesTime extends Component{

  constructor( props ){
    super();
    this.state  ={
      meetings      : props.meetings,
      employees     : props.employees,
    }
  }

  render(){
        const meetings = this.state.meetings.map( ( meeting ) => {
            
            meeting.employeeName  = this.state.employees.filter( ( employee ) => meeting.employeeID == employee.employeeID )[ 0 ].name;         
            delete meeting["employeeID"];   
            return meeting;

        });
        
        return ( <div className="card"><pre>{ JSON.stringify( { 'data'  : meetings }, null, 2 ) }</pre></div> )
  }

}
export default AvailableEmployeesTime;