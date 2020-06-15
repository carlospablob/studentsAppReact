import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {createNewStudent} from '../Actions/Student.action'
import {useHistory} from 'react-router-dom';

const NewStudent = () => {
    const [name, setName] = useState('')
    const [firtsName, setFirtsName] = useState('')
    const [lastName, setLastName] = useState('')
    const [phone, setPhone] = useState('')
    const [gpa, setGPA] = useState('')
    const [gender, setGender] = useState('')

    const dispatch = useDispatch()
    const history = useHistory();
    const loading = useSelector(state => state.Students.loading)
    const error = useSelector(state => state.Students.error);

    const addStudent = Student => dispatch(createNewStudent(Student))

    const handleSubmit = (e) => {
        e.preventDefault();
        if (name.trim() === '' || firtsName.trim() === '' || lastName.trim() === '') {
            return 0;
        }
        addStudent({
            name,
            firtsName,
            lastName,
            phone,
            gpa,
            gender
        })

        history.push('/')
    }

    return (
        <div className="container box-table">
            <div className="row justify-content-center">
                <div className="col">
                    <div className="card">
                        <div className="card-body">
                            <h2 className="text-center mb-4 font-weight-bold">
                                Agregar Nuevo Estudiante
                            </h2>

                            <form onSubmit={handleSubmit}>
                                <div className="form-group">
                                    <label>Nombre</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Nombre"
                                        name="nombre"
                                        value={name}
                                        onChange={e => setName(e.target.value)}
                                    />
                                </div>

                                <div className="form-group">
                                    <label>Apellido Materno</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Apellido Materno"
                                        name="apellido materno"
                                        value={firtsName}
                                        onChange={e => setFirtsName(e.target.value)}
                                    />
                                </div>

                                <div className="form-group">
                                    <label>Apellido Materno</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Apellido Paterno"
                                        name="apellido paterno"
                                        value={lastName}
                                        onChange={e => setLastName(e.target.value)}
                                    />
                                </div>

                                <div className="form-group">
                                    <label>Genero</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Genero"
                                        name="genero"
                                        value={gender}
                                        onChange={e => setGender(e.target.value)}
                                    />
                                </div>

                                <div className="form-group">
                                    <label>Telefono</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Telefono"
                                        name="phone"
                                        value={phone}
                                        onChange={e => setPhone(e.target.value)}
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
                                        onChange={e => setGPA(e.target.value)}
                                    />
                                </div>

                                <div className="row">
                                    <div className="col text-center">
                                        <button type="submit"
                                                className="btn btn-primary font-weight-bold text-uppercase ">Agregar
                                        </button>
                                    </div>
                                </div>
                            </form>
                            {loading ? <p>Cargando...</p> : null}
                            {error ? <p className="alert alert-danger p2 mt-4 text-center">Hubo un error</p> : null}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NewStudent;
