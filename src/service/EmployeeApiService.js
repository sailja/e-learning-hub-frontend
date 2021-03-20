import axios from 'axios';

const USER_API_BASE_URL = 'http://localhost:7070/employee';

class ApiService {

    fetchCourses() {
        return axios.get(USER_API_BASE_URL+'/'+'courseList');
    }

    fetchAllSubjects() {
        return axios.get(USER_API_BASE_URL+'/'+'subjectList');
    }

    fetchUserById(userId) {
        return axios.get(USER_API_BASE_URL + '/' + userId);
    }

    deleteUser(userId) {
        return axios.delete(USER_API_BASE_URL + '/' + userId);
    }

    addTest(test,sid) {
        console.log(" sid : "+sid)
        return axios.post(USER_API_BASE_URL+'/add_test/'+sid,test);
    }

    editUser(user) {
        return axios.put(USER_API_BASE_URL + '/' + user.id, user);
    }

    addSubject(piyush){
        return axios.post(USER_API_BASE_URL + '/add', piyush)
    }

    addQuestion(quetion,tid) {
        console.log(" tid : "+tid)
        return axios.post(USER_API_BASE_URL+'/add_question/'+tid,quetion);
    }

    
}

export default new ApiService();