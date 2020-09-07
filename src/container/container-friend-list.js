import React from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import friendnameclickedaction from '../actions/actions-friend-clicked';


class FriendList extends React.Component {


    displayAllFriends=()=>{
        return this.props.friends.map(f=>{
            return (
                <li key={f.id}
                    onClick={()=>this.props.friendClicked(f)}        >
                    {f.name}
                </li>
            )
        })
    }
    
    render() { 
        return ( 
            <div>
                Friends list:
                <br></br>
                <ol>
                    {this.displayAllFriends()}
                </ol>
            </div>
         );
    }
}

function convertStoreToProps(store){
    console.log("Store received in FriendList container....");
    console.log(store);
    return {
        friends:store.allfriends
    }
}

function convertEventToPropsAndDispatch(dispatch){
    return bindActionCreators({
        friendClicked: friendnameclickedaction
    }, dispatch)
}


 
export default connect(convertStoreToProps, convertEventToPropsAndDispatch)(FriendList);