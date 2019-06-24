// import { connect } from "react-redux";
// import { createComment  } from "../../actions/comment_actions";
// import CommentForm from "./comment_form";

// const msp = (state, ownProps) => {
//     return {
//         comment: {
//             body: "",
//             userId: state.session.id,
//             postId: state.entities.posts[ownProps.postId]
//         },
//         username: state.entities.users.username
//     };
// };

// const mdp = dispatch => {
//     return {
//         createComment: comment => dispatch(createComment(comment))
//     };
// };

// export default connect(msp, mdp)(CommentForm);
