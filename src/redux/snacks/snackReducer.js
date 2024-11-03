import { BUY_SNACKS } from "./snackType"

const initialState={
    numOfSnacks:10
}

const snackReducer=(state=initialState,action)=>{
    switch(action.type){
        case BUY_SNACKS : return {
            ...state,numOfSnacks:state.numOfSnacks-1
        }
        default : return state
    }
}

export default snackReducer;