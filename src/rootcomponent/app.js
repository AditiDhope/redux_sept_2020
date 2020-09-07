import React from 'react';
import FriendList from '../container/container-friend-list';
import FriendDetail from '../container/container-friend-detail';
import FriendCount from '../container/container-friend-count';

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
            </div>
         );
    }
}
 
export default RootComponent;