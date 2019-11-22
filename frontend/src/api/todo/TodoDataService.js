import axios from 'axios';
class TodoDataService{

    todos(name){
        return axios.get(`/users/${name}/todos`);
    }
    deleteTodo(username,id){
        return axios.delete(`/users/${username}/todos/${id}`)
    }

}
export default new TodoDataService;