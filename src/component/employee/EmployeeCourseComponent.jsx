import React, { Component } from 'react'
import ApiService from "../../service/ApiService";

class EmployeeCourseComponent extends Component {

    constructor(props) {
        super(props)
        this.state = {
            courses: [],
            message: null
        }
        this.deleteUser = this.deleteUser.bind(this);
        this.editUser = this.empGetSubjects.bind(this);
        this.addCourse = this.addCourse.bind(this);
        this.reloadCoursesList = this.reloadCoursesList.bind(this);
    }

    componentDidMount() {
        this.reloadCoursesList();
    }

    reloadCoursesList() {
        ApiService.fetchCourses()
            .then((res) => {
                this.setState({courses: res.data.result})
                console.log(this.state.courses);
            });
            // UserService.getUsers().then(resp => {
            //     this.setState({ users: resp.data });
            //     console.log(this.state.users);
            // })
    }

    deleteUser(userId) {
        ApiService.deleteUser(userId)
           .then(res => {
               this.setState({message : 'User deleted successfully.'});
               this.setState({users: this.state.users.filter(user => user.id !== userId)});
           })

    }

    empGetSubjects(courseName) {
        window.localStorage.setItem("courseName", courseName);
        this.props.history.push('/emp-subjects');
    }

    empAddSubjects(courseName) {
        window.localStorage.setItem("courseName", courseName);
        this.props.history.push('/Add-subjects');
    }


    addCourse() {
        
        this.props.history.push('/add-course');
    }

    render() {
        return (
            <div>
                <h2 className="text-center">Courses Details</h2>
                <button className="btn btn-danger" style={{width:'100px'}} onClick={() => this.addCourse ()}> Add Course</button>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th >Id</th>
                            <th>Name</th>
                            
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.courses.map(
                        courses =>
                                    <tr >
                                        <td>{courses.id}</td>
                                        <td>{courses.name}</td>
                                        
                                        <td>
                                        <button className="btn btn-success" onClick={() => this.empAddSubjects(courses.name)} style={{marginLeft: '20px'}}> Add Subjects</button>
                                            <button className="btn btn-success" onClick={() => this.empGetSubjects(courses.name)} style={{marginLeft: '20px'}}> Subjects</button>
                                        </td>
                                    </tr>
                            )
                        }
                    </tbody>
                </table>

            </div>
        );
    }

}

export default EmployeeCourseComponent;