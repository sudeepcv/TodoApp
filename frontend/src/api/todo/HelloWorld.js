import axios from 'axios';
class HelloWorld{

    executeHelloWorldService(){
        return axios.get('/hello');
    }

}
export default new HelloWorld;