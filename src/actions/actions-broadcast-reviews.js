const broadcastreviews = function(reviews){
    console.log("Building action broadcast for reviews from api!")
    console.log(reviews)
    console.log("Reducer will capture this broadcast: type+payload....");
    return {
        type:"RECEIVED_REVIEWS",
        payload:reviews
    }

}

export default broadcastreviews