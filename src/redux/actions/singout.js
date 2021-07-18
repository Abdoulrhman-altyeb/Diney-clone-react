import {types} from '../constans/Types'

const singout = () => async(dispatch) => {
    dispatch({
        type:types.SIGN_OUT,
        payload:'',
    })
}

export default singout;