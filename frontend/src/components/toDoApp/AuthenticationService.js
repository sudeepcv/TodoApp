class AuthenticationService{
    registerSuccessfulLogin(userName,password){
        sessionStorage.setItem('authenticatedUser',userName)
    }

        logout(userName,password){
        sessionStorage.removeItem('authenticatedUser')
    }
    isLoggedin(){
        let user=sessionStorage.getItem('authenticatedUser')
        if(user===null){
            return false;
        }else{
            return true;
        }
    }

}

export default new AuthenticationService();