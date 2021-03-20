import axios from 'axios';

const USER_API_BASE_URL = 'http://localhost:7070/users';

class ApiService {

    fetchCourses() {
        return axios.get(USER_API_BASE_URL+'/'+'courseList');
    }

    fetchSubjects(courseName) {
        return axios.get(USER_API_BASE_URL+'/'+'subjects'+'/'+courseName);
    }

    fetchUserById(userId) {
        return axios.get(USER_API_BASE_URL + '/' + userId);
    }

    deleteUser(userId) {
        return axios.delete(USER_API_BASE_URL + '/' + userId);
    }

    addUser(user) {
        return axios.post(""+USER_API_BASE_URL, user);
    }

    editUser(user) {
        return axios.put(USER_API_BASE_URL + '/' + user.id, user);
    }

    fetchTest(sid) {
        return axios.get(USER_API_BASE_URL + '/tests/' + sid);
    }

    pay(details){
        return axios.post(USER_API_BASE_URL + '/Payment',details);
    }

    fetchQuestion(testId) {
        return axios.get(USER_API_BASE_URL + '/questions/' + testId);
    }

    addUserTest(add){
        return axios.post(USER_API_BASE_URL + '/UserTest',add);
    }
    fetchUserTest(userId){
        return axios.get(USER_API_BASE_URL + '/userTest/'+userId);
    }

}

export default new ApiService();