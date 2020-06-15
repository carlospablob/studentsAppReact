import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useHistory} from "react-router-dom";
import {getStudentEdit} from "../Actions/Student.action";
import studentM from '../Assets/student.png';
import studentF from '../Assets/studenF.png';

const StudentDetailsComponent = () => {
    const dispatch = useDispatch()
    const history = useHistory();
    const student = useSelector(state => state.Students.studentEdit)

    const redirectEdit = student => {
        dispatch( getStudentEdit(student) );
        history.push(`/editar-estudiante/${student.id}`)
    }

    return (
        <React.Fragment>
            {student !== undefined && student !== null &&
            <div className="container box-table">
                <div className="row">
                    <div className="col">
                        <div className="card" style={{width: 'auto'}}>
                            <div className="card-header">
                                {student.name}
                            </div>
                            <div className="card-body">
                                <div className="row info-box">
                                    <div className="col-4">
                                        <img className="img-fluid" src={student.gender === 'F' ? studentF : studentM} alt={student.name}/>
                                    </div>
                                    <div className="col-4">
                                        <p><strong>ID: </strong> {student.id}</p>
                                        <p><strong>Apellido Materno: </strong> {student.firtsName}</p>
                                        <p><strong>Apellido Paterno: </strong> {student.lastName}</p>
                                        <p><strong>Genero: </strong> {student.gender === 'F' ? 'Femenino' : 'Masculino'}</p>
                                        <p><strong>Télefono: </strong> {student.phone}</p>
                                        <p><strong>GPA: </strong> {student.gpa}</p>
                                        <button className="btn btn-primary" onClick={() => redirectEdit(student)}>Editar</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            }
        </React.Fragment>
    );
}

export default StudentDetailsComponent

