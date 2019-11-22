import axios from 'axios';
class TodoDataService{

    todos(name){
        return axios.get(`/users/${name}/todos`);
    }

}
export default new TodoDataService;