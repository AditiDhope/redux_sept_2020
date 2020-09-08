const reducerFriendDetails = function createFriendDetails(state =null, action){
    var friendDetails =[
        {
            id:1,
            friendsince:8,
            otherfriendscount:40
        },
        {
            id:2,
            friendsince:4,
            otherfriendscount:10
        },
        {
            id:3,
            friendsince:10,
            otherfriendscount:400
        },
        {
            id:4,
            friendsince:6,
            otherfriendscount:80
        }
    ]
    console.log("State in reducerFriendDetails: ");
    console.log(state);
    console.log("Value of action in reducerFriendDetails:");
    console.log(action);
    switch (action.type) {
        case "PLUS_CLICKED":
            console.log("Increment the otherfriendscount by 1 for friend with id :" + action.payload.id);
            var updatedFriendDetails = state.map(obj =>{
                if(obj.id === action.payload.id){
                    obj.otherfriendscount++
                    return obj
                }
                return obj
            })
            return updatedFriendDetails
        
        case "FRIEND_CLICKED":
            return state
                
    
        default:
            break;
    }

    return friendDetails
}

export default reducerFriendDetails