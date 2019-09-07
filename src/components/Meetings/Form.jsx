import React, { Component } from "react";


class MeetingForm extends Component {
    constructor ( props ) {
        super();
        this.state = {
            meetingID     : '',
            time          : '',
            employeeID    : props.employees[ 0 ].employeeID
        };
        this.handleInputChange  = this.handleInputChange.bind( this );
        this.handleSubmit       = this.handleSubmit.bind( this );
    }

    formatAMPM( time ) {

        time = time.toString ().match (/^([01]\d|2[0-3])(:)([0-5]\d)(:[0-5]\d)?$/) || [time];

        if (time.length > 1) { 
            time = time.slice (1);
            time[5] = +time[0] < 12 ? ' AM' : ' PM';
            time[0] = +time[0] % 12 || 12;
            time[0] = time[0] < 10 ? '0' + time[0] : time[0];
        }
        return time.join ('');
    }
    
    handleInputChange( e ) {
        const { name, value } = e.target;
        this.setState({
            [ name ] : value
        })
    }
    
    handleSubmit( e ) {
        e.preventDefault();
        this.state.meetingID    = this.props.countMeetings + 1;
        this.state.time         = this.formatAMPM( this.state.time );
        this.props.onAddMeeting( this.state );
        this.setState({
            meetingID     : this.props.countMeetings + 1,
            time          : '',
            employeeID    : this.props.employees[ 0 ].employeeID
        });
    }

    render(){
        return (
        <div className="card">
            <form onSubmit={this.handleSubmit}>
                <div className="card-header">
                    <h3>Add New Meeting</h3>
                </div>
                <div className="card-body">
                    <div className="form-group">
                        <input
                            type="time"
                            name="time"
                            className="form-control"
                            onChange={ this.handleInputChange }
                            min="08:00" 
                            max="18:00"
                            step="1800"
                            required
                            value={ this.state.time }
                        />
                    </div>
                    <div className="form-group">
                        <select
                            name="employeeID"
                            className="custom-select"
                            value={ this.state.employeeID }
                            onChange={this.handleInputChange}
                        >
                        { this.props.employees.map( employee => { return( <option value={ employee.employeeID }> { employee.name } </option> ) } ) }
                        </select>
                    </div>
                </div>
                <div className="card-footer">
                    <button type="submit" className="btn btn-primary">
                        Save
                    </button>
                </div>
            </form>
        </div>
        );
    }

}
export default MeetingForm;