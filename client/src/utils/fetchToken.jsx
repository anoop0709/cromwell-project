export const  fetchToken = () => {

    const userToken = JSON.parse(localStorage.getItem('profile'))?.token;
    const userId = JSON.parse(localStorage.getItem("profile"))?.userData?._id;

return { userToken, userId };

}