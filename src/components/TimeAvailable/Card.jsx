import React, { Component } from "react";

class Hour extends Component {

    constructor( props ){
        super();
        this.state  = {
            employees   : props.employees,
            hour        : props.hour
        }
    }

    render(){
        const employees = this.state.employees.map( ( employee ) => { return ( <div className="col-sm-12 col-md-4"> <p> <mark> { employee.name } </mark> </p> </div> ) } )
        return (
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12" >
            <div className="mt-4">
                <div className="card">
                    <div className="card-header">
                        {this.state.hour.time}
                    </div>
                    <div className="card-body">
                        <div className="row">
                            {employees}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        );
    }

}
export default Hour;