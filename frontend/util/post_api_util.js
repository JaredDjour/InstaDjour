export const fetchPost = id => {
    return (
        $.ajax({
            url: `/api/posts/${id}`,
            method: "GET"
        })
    );
};

export const fetchAllPosts = () => {
    return (
        $.ajax({
            url: `/api/posts`,
            method: "GET"
        })
    );
};


export const fetchUserPosts = userId => {
    return (
        $.ajax({
           url: `/api/users/${userId}/posts`,
           method: "GET" 
        })
    );
};

export const updatePost = post => {
    return (
        $.ajax({
            url: `/api/posts/${post.id}`,
            method: "PATCH",
            data: { post }
        })
    );
};

export const createPost = post => {
    // console.log(post);
    // debugger
    return (
        $.ajax({
            url: `/api/posts`,
            method: "POST",
            // data: {post},
            data: post,
            contentType: false,
            processData: false
        })
    );
};

export const deletePost = postId => {
    return (
        $.ajax({
            url: `api/posts/${postId}`,
            method: "DELETE"
        })
    );
};