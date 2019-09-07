import React, { Component } from "react";


class EmployeeForm extends Component {
    constructor () {
        super();
        this.state = {
            employeeID    : '',
            name          : ''
        };
        this.handleInputChange  = this.handleInputChange.bind( this );
        this.handleSubmit       = this.handleSubmit.bind( this );
    }
    
    handleInputChange( e ) {
        const { name, value } = e.target;
        this.setState({
            [ name ] : value
        })
    }
    
    handleSubmit( e ) {
        e.preventDefault();
        this.state.employeeID = this.props.countEmployees + 1;
        this.props.onAddEmployee( this.state );
        this.setState({
            employeeID    : this.props.countEmployees + 1,
            name          : '',
        });
    }

    render(){
        return (
        <div className="card">
            <form onSubmit={this.handleSubmit}>
                <div className="card-header">
                    <h3>Create an Employee</h3>
                </div>
                <div className="card-body">
                    <div className="form-group">
                    
                        <input
                            type="text"
                            name="name"
                            className="form-control"
                            onChange={ this.handleInputChange }
                            required
                            value={ this.state.name }
                            placeholder="Name"
                        />
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
export default EmployeeForm;