const initialState = { word: "hello" };

const addReducer = (state=initialState, action) => {
    switch (action.payload) {
        case  "CHANGEWORD":{
            return {...state, word: action.payload}
        }    
    }
    return state;
}

export default addReducer;