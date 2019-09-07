import React, { Component } from 'react';

import logo from '../../logo.svg';

import Meeting from './Card'; 
import MeetingForm from './Form'; 

class Meetings extends Component{

  constructor( props ){
    super();
    this.state  ={
      meetings      : props.meetings,
      employees     : props.employees
    }
    this.handleAddMeeting     = this.handleAddMeeting.bind( this );
    this.handleRemoveMeeting  = this.handleRemoveMeeting.bind( this );
    this.updateCounts         = this.updateCounts.bind( this );
  }

  updateCounts() {
		this.props.onUpdateCounters( this.state );
	}

  handleAddMeeting( meeting ){
    this.setState(
      {
        meetings: [ ...this.state.meetings, meeting ]
      },
      this.updateCounts );
  }

  handleRemoveMeeting( e ){
    this.setState({
        meetings: this.state.meetings.filter( meeting => { return ( meeting.meetingID != e.target.id ); } )
    },
    this.updateCounts );
  }

  render() {
   const meetings = this.state.meetings.map( ( meeting ) => {
     meeting.employeeName  = this.props.employees.filter( ( employee ) => {
        if( meeting.employeeID == employee.employeeID ){ return employee.name;}
      } )[ 0 ].name;

      return (
        <Meeting onRemoveMeeting = {this.handleRemoveMeeting} meeting={meeting}/>
      );

    } )
    return (
      <div className="container-fluid">
        <div className="row mt-4">
          <div className="col-md-4 text-center">
            <div className="row justify-content-md-center">
              <div className="col-lg-8 text-center">
                <img src={logo} className="App-logo" alt="logo" />
                <MeetingForm  employees={this.state.employees} countMeetings={this.state.meetings.length} onAddMeeting={this.handleAddMeeting}></MeetingForm>
              </div>
            </div>
          </div>
          <div className="col-md-8">
            <div className="max-height-90vh">
              <div className="row mt-4">
                {meetings}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

}

export default Meetings;