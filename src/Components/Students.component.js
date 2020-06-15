import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {useHistory} from 'react-router-dom';
import Swal from 'sweetalert2'
import studentM from '../Assets/student.png';
import studentF from '../Assets/studenF.png';


import {getStudentEdit, deleteStudent} from '../Actions/Student.action'

const Students = () => {
    const dispatch = useDispatch();
    const history = useHistory();

    const students = useSelector(state => state.Students.students)
    const error = useSelector(state => state.Students.error)

    const redirectEdit = character => {
        dispatch(getStudentEdit(character));
        history.push(`/editar-estudiante/${character.id}`)
    }

    const redirectDetails = student => {
        dispatch(getStudentEdit(student));
        history.push(`/detalles/${student.id}`)
    }

    const deleteCharacterBtn = id => {
        Swal.fire({
            title: '¿Estas seguro?',
            text: "De eliminar a este estudiante",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, eliminar!!',
            cancelButtonText: 'Cancelar'
        }).then((result) => {
            if (result.value) {
                dispatch( deleteStudent(id) );
            }
        });
    }

    return (
        <React.Fragment>
            {error ? <p className="font-weight-bold alert alert-danger text-center mt-4">Hubo un error</p> : null}
            {students.length === 0 ? 'Cargando' :
                <div className="container box-table">
                    <div className="row" style={{justifyContent: 'space-around'}}>
                        {students.map(item => (
                            <div className="col-md-4 col-sm-6" key={item.id}>
                                <div className="card">
                                    <img className="card-img-top img-size"
                                         src={item.gender === 'F' ? studentF : studentM} alt={item.name}/>
                                    <div className="card-body">
                                        <h5 className="card-title">{item.name}</h5>
                                        <table className="table-striped" style={{'width': '100%'}}>
                                            <thead/>
                                            <tbody>
                                            <tr>
                                                <td><strong>Apellidos </strong></td>
                                                <td>{item.firtsName + ' ' + item.lastName}</td>
                                            </tr>
                                            <tr>
                                                <td><strong>Telefono </strong></td>
                                                <td>{item.phone}</td>
                                            </tr>

                                            <tr>
                                                <td><strong>Genero </strong></td>
                                                <td>{item.gender === 'F' ? 'Mujer' : 'Hombre'}</td>
                                            </tr>

                                            <tr>
                                                <td><strong>GPA</strong></td>
                                                <td>{item.gpa}</td>
                                            </tr>
                                            </tbody>
                                        </table>
                                        <br/>
                                        <div className="row">
                                            <div className="col text-center">
                                                <button type="button" className="btn btn-primary"
                                                        onClick={() => redirectDetails(item)}>Ver
                                                </button>
                                            </div>
                                            <div className="col">
                                                <button type="button" className="btn btn-secondary"
                                                        onClick={() => redirectEdit(item)}>Editar
                                                </button>
                                            </div>
                                        </div>
                                        <br/>
                                        <div className="row">
                                            <div className="col text-center">
                                                <span className="btn-link btn-block"
                                                      onClick={() => deleteCharacterBtn(item.id)}>Borrar studiante</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            }
        </React.Fragment>
    )
}

export default Students
