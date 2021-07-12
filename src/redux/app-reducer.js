import { getAuth } from "./auth-reducer";

const INISIALIZED_SUCCESS = "INISIALIZED-SUCCESS";


let initialState = {
    inisialized: false,
};

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case INISIALIZED_SUCCESS: {
            return {
                ...state,
                inisialized: true,
            }
        }
        default:
            return state;
    }
}

export const inisializedSuccess = () => {
    return {
        type: INISIALIZED_SUCCESS
    }
}

export const inisializedApp = () => {
    return (dispatch) => {
        let promise = dispatch(getAuth());
        promise.then(()=> {
            dispatch(inisializedSuccess())
        });
    }
}

export default appReducer;
