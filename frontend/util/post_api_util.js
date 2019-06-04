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
    return (
        $.ajax({
            url: `/api/posts`,
            method: "POST",
            data: { post }
        })
    );
};

export const deletePost = id => {
    return (
        $.ajax({
            url: `api/posts/${id}`,
            method: "DELETE"
        })
    );
};