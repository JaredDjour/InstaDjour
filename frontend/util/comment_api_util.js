// export const fetchPostComments = () => {
//  return (
//      $.ajax({
//          url: `/api/posts/:post_id/comments`,
//          method: "GET" 
//      })
//  );
// };
export const fetchPostComments = (postId) => {
 return (
     $.ajax({
         url: `/api/posts/${postId}/comments`,
         method: "GET" 
     })
 );
};
export const createComment = (comment) => {
 return (
     $.ajax({
         url: `/api/posts/:post_id/comments`,
         method: "POST",
         data: comment, 
     })
 );
};
export const updateComment = (comment) => {
 return (
     $.ajax({
         url: `/api/posts/:post_id/comments/${comment.id}`,
         method: "PATCH",
         data: comment 
     })
 );
};
export const deleteComment = (commentId) => {
 return (
     $.ajax({
         url: `/api/posts/:post_id/comments/${commentId}`,
         method: "DELETE",
     })
 );
};


