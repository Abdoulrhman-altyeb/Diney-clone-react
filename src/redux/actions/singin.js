import {types} from '../constans/Types'

const singin = (data) => async (dispatch) => {
    const information = data;
    dispatch({
        type:types.SIGN_IN,
        payload:{
            name:information.displayName,
            email:information.email,
            photo:information.photoURL
        }
    })
}

export default singin;