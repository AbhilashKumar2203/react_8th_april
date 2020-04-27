export const increment =()=>{
    return {
        type:'INCREMENT'
    }
}

export const decrement =()=>{
    return {
        type:'DECREMENT'
    }
}


export const loggedIn = ()=>{
    return {
        type:'SIGN_IN'
    }
}


export const updateName = ()=>{
    return {
        type:'NAME',
        payload:{
            id:1,
            name:'new Abhilash'
        }
    }
}

