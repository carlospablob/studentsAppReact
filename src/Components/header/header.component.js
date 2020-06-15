import React from 'react';
import { useHistory } from 'react-router-dom';

const HeaderComponent = () => {

    const history = useHistory();

    const redirectNew= () => {
        history.push(`/nuevo-estudiante/`)
    }
    return (
        <nav className="navbar navbar-light bg-light">
            <a className="navbar-brand" href="/">Aplicacion de Estudiantes</a>
            <button type="button" className="btn btn-outline-success my-2 my-sm-0" onClick={() => redirectNew()}>Nuevo estudiante</button>
        </nav>
    );
}

export default HeaderComponent
