import React, { Component } from 'react';

import logo from '../../logo.svg';
import { hours } from '../../hours.json';

import Hour from './Card'; 

class TimeAvailable extends Component{

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
          
            let meetings    =   this.state.meetings.filter( ( meeting ) => { return meeting.time == hour.time } );
            let busyEmployees    =   meetings.map( ( meeting ) => {
                return this.state.employees.filter( ( employee ) => { return employee.employeeID == meeting.employeeID } )[ 0 ];
            } );
            let availableEmployees = this.state.employees.filter( ( employee ) => !busyEmployees.includes( employee ) );

            return ( <Hour employees={ availableEmployees } hour={ hour }/> );

        });
        
        return (
            <div className="container-fluid">
            <div className="row mt-4 mb-4">
              <div className="col-md-12 text-center">
                <div className="row justify-content-md-center">
                  <div className="col-lg-8 text-center">
                    <img src={logo} className="App-logo" alt="logo" />
                    <div className="max-height-80vh">
                        {hours}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
  }

}
export default TimeAvailable;