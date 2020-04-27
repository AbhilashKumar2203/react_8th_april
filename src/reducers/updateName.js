export const updateNameReducer = (state={id:1,name:'Abhilash'},action)=>{
    switch(action.type){
        case 'NAME':
        return action.payload
        default:
        return state

    }

}