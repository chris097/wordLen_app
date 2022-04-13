const initialState = { word: "hello" };
const useReducer = (state=initialState, action) => {
    switch (action.type) {
        case "CHANGEWORD": {
            return {...state, word: action.payload}
        }        
    }
    return state;
}

export default useReducer;