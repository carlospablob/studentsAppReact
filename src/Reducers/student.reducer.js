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
            address: {
                street: 'Charro 14',
                city: 'México',
                state: 'México',
                zipcode: '52979',
            },
            phone: '5511223366',
            gpa: '12345678',
            gender: 'M'
        },
        {
            id: 2,
            name: 'Carlos',
            firtsName: 'Pablo',
            lastName: 'Bautista',
            address: {
                street: 'Av. acueducto 1',
                city: 'México',
                state: 'México',
                zipcode: '52929',
            },
            phone: '5527310514',
            gpa: '789456123',
            gender: 'M'
        },
        {
            id: 3,
            name: 'Luis',
            firtsName: 'Hernandez',
            lastName: 'Lopez',
            address: {
                street: 'Acacias 15',
                city: 'México',
                state: 'México',
                zipcode: '53258',
            },
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
            return {...state, loading: false, characters: [...state.characters, action.payload]}
        case STUDENT_DELETE_FAIL:
        case ADD_STUDENT_FAIL:
            return {...state, loading: false, error: action.payload}
        case GET_STUDENTS_SUCCESS:
            return  {...state, loading: false, error: false, characters: state.characters.length === 0 ?  action.payload : [...state.characters]}
        case GET_STUDENT:
            return { ...state, characterEdit: action.payload}
        case UPDATE_STUDENT_SUCCESS:
            return {...state, characterEdit: null, characters: state.characters.map(
                    character =>
                        character.id === action.payload.id ? character = action.payload : character
                )}
        case GET_STUDENT_DELETE:
            return {...state, characterDelete: action.payload}
        case STUDENT_DELETE_SUCCESS:
            return {...state, characters: state.characters.filter(item => item.id !== state.characterDelete), characterDelete: null}
        default:
            return state
    }

}
