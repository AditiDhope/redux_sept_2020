import React from 'react';
import { connect } from 'react-redux';


class FriendDetail extends React.Component {

    getFriendSinceFromProps=()=>{
        console.log("Received allfrienddetails as props in FriendDetail container....");
        let selectedfrienddetail = this.props.allfrienddetails.find( f=>{
            return f.id === this.props.selectedfriend.id
        })
        return selectedfrienddetail.friendsince
    }

    getotherFriendCountFromProps=()=>{
        console.log("Received allfrienddetails as props in FriendDetail container....");
        let selectedfrienddetail = this.props.allfrienddetails.find( f=>{
            return f.id === this.props.selectedfriend.id
        })
        return selectedfrienddetail.otherfriendscount
    }
    
    render() { 
        if(this.props.selectedfriend === null){
          return(  
                <div>
                    Click any one friend from friend list...
                </div>
            )
        }else{
            return ( 
            <div>
                <h2>Friend clicked: </h2>
                Id: {this.props.selectedfriend.id}
                <br></br>
                Name: {this.props.selectedfriend.name}
                <br></br>
                Location: {this.props.selectedfriend.location}
                <br></br>
                Friend Since: {this.getFriendSinceFromProps()}
                <br></br>
                Other Friends Count: {this.getotherFriendCountFromProps()}
                <br></br>
            </div>
         );
        }
        
    }
}

function convertStoreToProps(store){
    console.log("Store recived in FriendDetail container....");
    console.log(store);
    return{
        selectedfriend: store.friendclicked,
        allfrienddetails: store.frienddetails
    }
}
 
export default connect(convertStoreToProps)(FriendDetail)