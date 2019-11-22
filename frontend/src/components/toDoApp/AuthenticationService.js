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
    getLoggedinUser(){
                let user=sessionStorage.getItem('authenticatedUser')
        if(user===null){
            return '';
        }else{
            return user;
        }

    }

}

export default new AuthenticationService();