import Swal from 'sweetalert2'
import {
    ADD_STUDENT,
    ADD_STUDENT_FAIL,
    ADD_STUDENT_SUCCESS,
    GET_STUDENT,
    GET_STUDENT_DELETE,
    STUDENT_DELETE_FAIL,
    STUDENT_DELETE_SUCCESS,
    UPDATE_STUDENT_FAIL,
    UPDATE_STUDENT_INIT,
    UPDATE_STUDENT_SUCCESS
} from "../Types/types";

export function createNewStudent(Student) {
    return (dispatch) => {
        dispatch(addStudent())
        try{
            dispatch(addStudentSuccess(Student))
            Swal.fire(
                'Correcto',
                'El Estudiante se agrego correctamente',
                'success'
            )
        }catch (e) {
            dispatch(addStudentFail(true))
            Swal.fire({
                    icon:"error",
                    title: "Hubo un error",
                    text: "Hubo un error, intenta de nuevo"
                }
            )
        }
    }
}

const addStudent = () => ({
    type: ADD_STUDENT,
    payload: true
})

const addStudentSuccess = character => ({
    type: ADD_STUDENT_SUCCESS,
    payload: character
})

const addStudentFail = (state) => ({
    type: ADD_STUDENT_FAIL,
    payload: state
})

export function getStudentEdit(student) {
    return (dispatch) => {
        dispatch(getStudentAction(student))
    }
}

const getStudentAction = student => ({
    type: GET_STUDENT,
    payload: student
})

export function deleteStudent(id) {
    return (dispatch) => {
        dispatch(getStudentDelete(id))

        try {
            dispatch( deleteStudentSuccess() );
            Swal.fire(
                'Eliminado',
                'El Estudiante se eliminó correctamente',
                'success'
            )
        } catch (error) {
            console.log(error);
            dispatch( deleteStudentFail(true) );
        }
    }
}


const getStudentDelete = (id) => ({
    type: GET_STUDENT_DELETE,
    payload: id
})

const deleteStudentSuccess = () => ({
    type: STUDENT_DELETE_SUCCESS
})

const deleteStudentFail = (state) => ({
    type: STUDENT_DELETE_FAIL,
    payload: state
})



export function updateStudent(student) {
    return (dispatch) => {
        dispatch(updateStudentAction())
        try{
            dispatch(updateStudentSuccess(student))
            Swal.fire(
                'Correcto',
                'El estudiante se modifico correctamente',
                'success'
            )
        }catch (e) {
            dispatch(updateStudentFail(true))
        }
    }
}

const updateStudentAction = () => ({
    type: UPDATE_STUDENT_INIT,
})

const updateStudentSuccess = character => ({
    type: UPDATE_STUDENT_SUCCESS,
    payload: character
})

const updateStudentFail = state => ({
    type: UPDATE_STUDENT_FAIL,
    payload: state
})
