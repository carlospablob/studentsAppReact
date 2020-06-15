import {
    ADD_STUDENT,
    ADD_STUDENT_FAIL,
    ADD_STUDENT_SUCCESS,
    GET_STUDENT,
    GET_STUDENT_DELETE,
    GET_STUDENTS_SUCCESS, GET_STUDENTS,
    STUDENT_DELETE_FAIL, STUDENT_DELETE_SUCCESS, UPDATE_STUDENT_SUCCESS
} from "../Types/types";

const initialState = {
    students : [
        {
            id: 1,
            name: 'Juan',
            firtsName: 'Pablo',
            lastName: 'Ortiz',
            phone: '5511223366',
            gpa: '12345678',
            gender: 'M'
        },
        {
            id: 2,
            name: 'Carlos',
            firtsName: 'Pablo',
            lastName: 'Bautista',
            phone: '5527310514',
            gpa: '789456123',
            gender: 'M'
        },
        {
            id: 3,
            name: 'Luis',
            firtsName: 'Hernandez',
            lastName: 'Lopez',
            phone: '9988774455',
            gpa: '456789123',
            gender: 'M'
        }
    ],
    error: null,
    loading: false,
    studentEdit: null,
    studentDelete: null
}

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_STUDENTS:
        case ADD_STUDENT:
            return  { ...state, loading: action.payload }
        case ADD_STUDENT_SUCCESS:
            return {...state, loading: false, students: [...state.students, action.payload]}
        case STUDENT_DELETE_FAIL:
        case ADD_STUDENT_FAIL:
            return {...state, loading: false, error: action.payload}
        case GET_STUDENTS_SUCCESS:
            return  {...state, loading: false, error: false, students: state.students.length === 0 ?  action.payload : [...state.students]}
        case GET_STUDENT:
            return { ...state, studentEdit: action.payload}
        case UPDATE_STUDENT_SUCCESS:
            return {...state, studentEdit: null, students: state.students.map(
                    student =>
                        student.id === action.payload.id ? student = action.payload : student
                )}
        case GET_STUDENT_DELETE:
            return {...state, studentDelete: action.payload}
        case STUDENT_DELETE_SUCCESS:
            return {...state, students: state.students.filter(item => item.id !== state.studentDelete), studentDelete: null}
        default:
            return state
    }

}
