import {types} from '../constans/Types';
const inisialstate = {
    name:'',
    email:'',
    photo:''
}

const AuthReducer = (state = inisialstate, action) => {
    switch(action.type) {
        case types.SIGN_IN:
            return{
                ...state,
                name:action.payload.name,
                email:action.payload.email,
                photo:action.payload.photo
            }
        case types.SIGN_OUT:
            return {...state}
        default :
            return {...inisialstate};
    }
}

export default AuthReducer;