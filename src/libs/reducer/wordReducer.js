// eslint default-case: "error"
const initialState = { word: "hello" };
const wordReducer = ( state= initialState, action ) => {
     switch (action.type) {
        case "CHANGEWORD":
            return {...state, word: action.payload}
            // no default
    }
    return state;
}

export default wordReducer;



