export const fetchAllUsers = () => {
    return (
        $.ajax({
            method: "GET",
            url: `/api/users`
        })
    );
};
export const fetchUser = id => {
    return (
        $.ajax({
            url: `/api/users/${id}`,
            method: "GET"
        })
    );
};