import React, { Component } from 'react';

import { hours } from '../hours.json';


class AvailableEmployeesTime extends Component{

  constructor( props ){
    super();
    this.state  ={
      meetings      : props.meetings,
      employees     : props.employees,
      hours
    }
  }

  render(){
        const hours = this.state.hours.map( ( hour ) => {
            let meetings    =   this.state.meetings.filter( ( meeting ) => { return ( meeting.time == hour.time ); } );
            let busyEmployees    =   meetings.map( ( meeting ) => {
                return this.state.employees.filter( ( employee ) => { return ( employee.employeeID == meeting.employeeID ) } )[ 0 ];
            } );
            let availableEmployees = this.state.employees.filter( ( employee ) => !busyEmployees.includes( employee ) );
            if( availableEmployees.length > 2 ){
              return {
                'time'                : hour.time,
                'availableEmployees'  : availableEmployees
              }
            }
        });
        
        return ( <div className="card"><pre>{ JSON.stringify( { 'data'  : hours }, null, 2 ) }</pre></div> )
  }

}
export default AvailableEmployeesTime;