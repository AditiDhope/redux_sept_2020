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

    render() { 
        return ( 
            <div>List of reviews from api!!!!</div>
         );
    }
}
 
function convertEventToPropsAndDispatch(dispatch){
 return bindActionCreators({
    broadcastReviews:broadcastreviews
 }, dispatch)
}

export default connect(null, convertEventToPropsAndDispatch)(Review);