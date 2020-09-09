import React from 'react';
import axios from "axios"
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import broadcastreviews from '../actions/actions-broadcast-reviews';

class Review extends React.Component {
    state = {  }

    componentWillMount(){
        this.getAllReviews()
    }

    getAllReviews=()=>{
        axios.get("http://localhost:3000/reviews")
            .then(response =>{
                console.log(response);
                this.props.broadcastReviews(response.data)
            })
            .catch(error =>{
                console.log(error);
            })
    }

    renderAllReviewsFromProps=()=>{
        return this.props.reviews.map(review => {
            return (
                <li key={review.id}>{review.title}</li>
            )
        })
    }

    render() { 
        if(this.props.reviews.length === 0){
            return ( 
                <div>Loading list of reviews from api!!!!</div>
             )
        }else{
            return ( 
            <div>
                <div> Reviews from api!!!!</div>    
                <div>
                    <ol>
                        {this.renderAllReviewsFromProps()}
                    </ol>
                </div>
            </div>
         )
        }
        
    }
}
 
function convertEventToPropsAndDispatch(dispatch){
 return bindActionCreators({
    broadcastReviews:broadcastreviews
 }, dispatch)
}


function convertStoreToProps(store){
    console.log("Received store in Reviews container....");
    console.log(store);
    return {
        reviews: store.allreviews
    }

}

export default connect(convertStoreToProps, convertEventToPropsAndDispatch)(Review);