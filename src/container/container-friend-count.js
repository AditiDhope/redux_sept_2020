import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import plusclickedaction from '../actions/actions-plus-clicked';


class FriendCount extends React.Component {

    getFriendCountFromProps=()=>{
        console.log("Received allfrienddetails as props in FriendDetail container....");
        let selectedfrienddetail = this.props.allfrienddetails.find( f=>{
            return f.id === this.props.selectedfriend.id
        })
        return selectedfrienddetail.otherfriendscount
    }
    
    getCurrentFriend=()=>{
        console.log("Received allfrienddetails as props in FriendDetail container....");
        let selectedfriend = this.props.allfrienddetails.find( f=>{
            return f.id === this.props.selectedfriend.id
        })
        return selectedfriend
    }

    render() { 
        if(this.props.selectedfriend === null){
            return(
                <div>
                    Click any one friend to display friend count!!!!
                </div>
            )
        }
        else{
        return ( 
            <div>
                <button onClick={()=>this.props.plusClicked(this.getCurrentFriend())} >+</button>
                &nbsp;&nbsp;
                Selected friend count: {this.getFriendCountFromProps()}
                &nbsp;&nbsp;
                <button>-</button>
            </div>
         )
        }
    }
}

function convertStoreToProps(store){
    console.log("Store recived in FriendCount container....");
    console.log(store);
    return{
        selectedfriend: store.friendclicked,
        allfrienddetails: store.frienddetails
    }
}

function convertEventsToPropsAndDispatch(dispatch){
    return bindActionCreators({
        plusClicked: plusclickedaction
    }, dispatch)
}
 
export default connect(convertStoreToProps, convertEventsToPropsAndDispatch)(FriendCount);