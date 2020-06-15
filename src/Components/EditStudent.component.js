import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import { updateStudent} from "../Actions/Student.action";
import { useHistory } from 'react-router-dom';

const EditStudent = () => {
    const dispatch = useDispatch()
    const history = useHistory();
    const [student, setStudent] = useState({
        name: '',
        gender: '',
        firtsName: '',
        lastName: '',
        phone: '',
        gpa: ''
    })
    const studentEdit = useSelector(state => state.Students.studentEdit)

    useEffect(() => {
        setStudent(studentEdit)
    }, [studentEdit])

    const {name, gender, firtsName, lastName, phone, gpa} = student;

    const handleSubmitStudent = e => {
        e.preventDefault()
        history.push(`/`)
        dispatch(updateStudent(student))
    }

    const onChangeForm = e => {
        setStudent({
            ...student,
            [e.target.name]: e.target.value
        })
    }

    return (
        <div className="container box-table">
            <div className="row justify-content-center">
                <div className="col">
                    <div className="card">
                        <div className="card-body">
                            <h2 className="text-center mb-4 font-weight-bold">
                                Editar Estudiandte
                            </h2>

                            <form onSubmit={handleSubmitStudent}>
                                <div className="form-group">
                                    <label>Nombre</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Nombre"
                                        name="name"
                                        value={name}
                                        onChange={onChangeForm}
                                    />
                                </div>

                                <div className="form-group">
                                    <label>Apellido Materno</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Apellido Materno"
                                        name="firtsName"
                                        value={firtsName}
                                        onChange={onChangeForm}
                                    />
                                </div>

                                <div className="form-group">
                                    <label>Apellido Materno</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Apellido Paterno"
                                        name="lastName"
                                        value={lastName}
                                        onChange={onChangeForm}
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Genero</label>
                                    <select
                                        name="gender"
                                        className="form-control"
                                        value={gender}
                                        onChange={onChangeForm}>
                                        <option value="M">Masculino</option>
                                        <option value="F">Femenino</option>
                                    </select>
                                </div>

                                <div className="form-group">
                                    <label>Telefono</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Telefono"
                                        name="phone"
                                        value={phone}
                                        onChange={onChangeForm}
                                    />
                                </div>


                                <div className="form-group">
                                    <label>GPA</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="GPA"
                                        name="gpa"
                                        value={gpa}
                                        onChange={onChangeForm}
                                    />
                                </div>

                                <button type="submit" className="btn btn-primary font-weight-bold text-uppercase d-block w-100" >Guardar Cambios</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default EditStudent;
