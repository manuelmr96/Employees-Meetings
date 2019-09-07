import React, { Component } from "react";

class Meeting extends Component {


    render(){
        return (
            <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 text-center" key={this.props.meeting.meetingID}>
                <div className="card mt-4">
                    <div className="card-header">
                        <h3>{ this.props.meeting.employeeName }</h3>
                    </div>
                    <div className="card-body">
                        { this.props.meeting.time }
                    </div>
                    <div className="card-footer text-center">
                        <button className="btn btn-danger" id={this.props.meeting.meetingID} onClick={this.props.onRemoveMeeting}>
                            Delete
                        </button>
                    </div>
                </div>
            </div>
        );
    }

}
export default Meeting;