// import React from 'react';

// class CommentForm extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = this.props.comment;
//         this.handleSubmit = this.handleSubmit.bind(this);
//         this.handleChange = this.handleChange.bind(this);    
//     }
 
//     handleSubmit(e) {
//         e.preventDefault();
//         this.props.createComment(this.state.comment);

//     }

  
//     handleChange(field) {
//         return e => this.setState({ [field]: e.target.value });
//     }

//     render() {
//         return ( 
//             <div>
//                 <form onSubmit={this.handleSubmit}>
//                     <input className="add-comment" type="text" placeholder="Add a comment..." value={this.state.body}/>
//                     <button className="create-comment_button" type="button" onClick={this.handleSubmit}>Post</button>
//                 </form>
//             </div> 
//         )
//     }
// };

// export default CommentForm;