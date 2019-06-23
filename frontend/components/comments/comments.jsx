import React from 'react';
import { Link } from 'react-router-dom';

class Comments extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.comment;
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    handleSubmit(e) {
        e.preventDefault();
        this.props.createComment(this.state.comment)
        // .then(() => this.props.history.push("/"));
    
    render() {
        return (
            
        )
    }
}