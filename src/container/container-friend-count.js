import React from 'react';


class FriendCount extends React.Component {
    
    render() { 
        return ( 
            <div>
                <button>+</button>
                &nbsp;&nbsp;
                Current friend count: 0
                &nbsp;&nbsp;
                <button>-</button>
            </div>
         );
    }
}
 
export default FriendCount;