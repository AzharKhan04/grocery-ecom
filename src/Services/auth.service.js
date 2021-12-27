const isAuthenticated = () => {

    let authenticated = false

    let user = localStorage.getItem('user');
    if(user) {
        user = JSON.parse(user);
        authenticated = user && user.token;
    }
    
    return authenticated;

}
export default isAuthenticated ;