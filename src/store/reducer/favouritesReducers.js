const favouriteReducer=(state=[],action)=>{
    switch(action.type){
        case"ADD_FAVORITE":
        if(state.find((i)=> i.id === action.payload.id))
        {
            return[...state]
        }else{
            return[...state, action.payload]
        }
        case "REMOVE_FROM_FAV" :
           let unRemoveItem= state.filter((i)=> i.id !== action.payload.id)
           return [...unRemoveItem]
        default :
        return state
    }
}
export default favouriteReducer