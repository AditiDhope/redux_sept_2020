const reducerReviews = function getReviews(state = null, action){
    var reviews = []
    switch (action.type) {
        case "RECEIVED_REVIEWS":
            return action.payload
        case "PLUS_CLICKED":
            return state    
        case "FRIEND_CLICKED":
            return state
        

        default:
            break;
    }

    return reviews
}

export default reducerReviews