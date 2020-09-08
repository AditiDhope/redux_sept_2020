const reducerAllFriends = function createFriendsReducer(state=null, action){
    var allfriends =[
        {
            id:1,
            name:'OBB',
            location:'Chennai'
        },
        {
            id:2,
            name:'CAS',
            location:'Chennai'
        },
        {
            id:3,
            name:'OWIOIH',
            location:'Japan'
        },
        {
            id:4,
            name:'BNP',
            location:'Jodhpur'
        }
    ]
    switch (action.type) {
        case "PLUS_CLICKED":
            return state
           
    
        default:
            break;
    }

    return allfriends
}

export default reducerAllFriends