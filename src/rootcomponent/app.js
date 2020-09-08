import React from 'react';
import FriendList from '../container/container-friend-list';
import FriendDetail from '../container/container-friend-detail';
import FriendCount from '../container/container-friend-count';
import Review from '../container/container-reviews';

class RootComponent extends React.Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <h1>Redux Friends App</h1>
                <FriendList></FriendList>
                <hr></hr>
                <FriendDetail></FriendDetail>
                <hr></hr>
                <FriendCount></FriendCount>
                <hr></hr>
                <Review></Review>
            </div>
         );
    }
}
 
export default RootComponent;