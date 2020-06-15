import Swal from 'sweetalert2'
import {
    ADD_STUDENT,
    ADD_STUDENT_FAIL,
    ADD_STUDENT_SUCCESS, GET_STUDENT, GET_STUDENT_DELETE,
    GET_STUDENTS,
    GET_STUDENTS_FAIL,
    GET_STUDENTS_SUCCESS, STUDENT_DELETE_FAIL, STUDENT_DELETE_SUCCESS
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


export function getStudentsList() {
    return async (dispatch) => {
        dispatch(getStudents())
        try {
            // const response = await clientAxios.get('/character/')
            const response = {}
            dispatch(getStudentsSuccess(response))
        }catch (e) {
            console.log(e)
            dispatch(getStudentsFail())
        }
    }
}

const getStudents = () => ({
    type: GET_STUDENTS,
    payload: true
})

const getStudentsSuccess = (characters) => ({
    type: GET_STUDENTS_SUCCESS,
    payload: characters.data.results
})

const getStudentsFail = () => ({
    type:GET_STUDENTS_FAIL,
    payload: true
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
