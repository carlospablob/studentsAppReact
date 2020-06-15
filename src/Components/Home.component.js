import React, {Component } from 'react';
import Students from "./Students.component";

class HomeComponent extends Component {

    render() {
        return (
            <>
                <div className="container">
                    <div className="row">
                        <div className="col text-center">
                            <br/>
                            <h1>Lista de Estudiantes</h1>
                        </div>
                    </div>
                </div>
                <React.Fragment>
                    <Students/>
                </React.Fragment>
            </>
        );
    }
}


export default HomeComponent
