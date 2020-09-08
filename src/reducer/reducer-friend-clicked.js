const reducerFriendClicked = function createFriendClickedReducer(state = null, action){
    //var friendClicked = null
    console.log("Value of state in reducerFriendClicked:" );
    console.log(state);
    console.log("Value of action in reducerFriendClicked:" );
    console.log(action);
    switch (action.type) {
        case "FRIEND_CLICKED":
            return action.payload
        
        default:
            break;
    }

    return state
}

export default reducerFriendClicked