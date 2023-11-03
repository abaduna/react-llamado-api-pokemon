import { ACTIONS } from "../action/fech";

export const initialState ={
    loading: true,
    error_reducer:false,
    dara:{}
}
export const fechReducer=(state,action)=>{
    switch (action.type) {
        case ACTIONS.SET_DATA:
            return{
                loading: false,
                error_reducer: false,
                data:{ 
                    count:action.payload.count,
                    next:action.payload.next,
                    previous:action.payload.previous,
                    results:action.payload.results
                }
            }
        case(ACTIONS.SET_ERROR):
            return{
                ...initialState,
                error_reducer: true,
                loading: false

            }
        
    
        default:
            return state
    }
}