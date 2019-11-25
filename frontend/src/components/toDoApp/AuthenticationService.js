import axios from 'axios';
class AuthenticationService{
    registerSuccessfulLogin(username,password){
        let basicAuthHeader = this.createBasicAuthToken(username, password)
        sessionStorage.setItem('authenticatedUser',username)
        this.setupAxiosInterceptors(basicAuthHeader)
    }

        logout(){
        sessionStorage.removeItem('authenticatedUser')
    }

        executeBasicAuthenticationService(username, password) {
        return axios.get(`/basicauth`,
            { headers: { authorization: this.createBasicAuthToken(username, password) } })
    }

       createBasicAuthToken(username, password) {
        return 'Basic ' + window.btoa(username + ":" + password)
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

       setupAxiosInterceptors(basicAuthHeader) {
        axios.interceptors.request.use(
            (config) => {
                if (this.isLoggedin()) {
                    config.headers.authorization = basicAuthHeader
                }
                return config
            }
        )
    }

}

export default new AuthenticationService();