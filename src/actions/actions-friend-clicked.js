const friendnameclickedaction = function(friend){
    console.log("Building action broadcast for friend clicked")
    console.log(friend)
    console.log("Reducer will capture this broadcast: type+payload....");
    return {
        type:"FRIEND_CLICKED",
        payload:friend
    }

}

export default friendnameclickedaction