import React from 'react';
import PostForm from './post_form';
import {connect} from "react-redux";
import {fetchPost, updatePost} from "../../actions/post_actions";


const msp = (state, ownProps) => {
    return {
        post: state.posts[ownProps.match.params.postId]
    };
};

const mdp = dispatch => {
    return {
        fetchPost: id => dispatch(fetchPost(id)),
        updatePost: post => dispatch(updatePost(post)) 
    };
};


class EditPostForm extends React.Component {

    componentDidMount(){
        this.props.fetchPost(this.props.match.params.postId);
    }

    render(){
        return (
            <PostForm 
            action={this.props.updatePost} 
            formType={this.props.formType} 
            post={this.props.post}
            />
        )

    }
}

export default connect(msp, mdp)(EditPostForm);