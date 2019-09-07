import React, { Component } from "react";

class Employee extends Component {

    render(){
        return (
            <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 text-center" key={this.props.employee.employeeID}>
                <div className="card mt-4">
                    <div className="card-header">
                        <h3>{ this.props.employee.name }</h3>
                    </div>
                    <div className="card-footer">
                        <button className="btn btn-danger" id={this.props.employee.employeeID} onClick={this.props.onRemoveEmployee}>
                            Delete
                        </button>
                    </div>
                </div>
            </div>
        );
    }

}
export default Employee;