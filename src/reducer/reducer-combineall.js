import { combineReducers } from "redux";
import reducerAllFriends from "./reducer-all-friends";
import reducerFriendDetails from "./reducer-friend-details";
import reducerFriendClicked from "./reducer-friend-clicked";


const allReducersCombined = combineReducers({
    allfriends: reducerAllFriends,
    frienddetails: reducerFriendDetails,
    friendclicked: reducerFriendClicked
})


export default allReducersCombined