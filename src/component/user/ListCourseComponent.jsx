import React, { Component } from 'react'
import ApiService from "../../service/ApiService";

class ListCourseComponent extends Component {

    constructor(props) {
        super(props)
        this.state = {
            courses: [],
            message: null
        }
        this.deleteUser = this.deleteUser.bind(this);
        this.editUser = this.getSubjects.bind(this);
        
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

    getSubjects(courseName) {
        window.localStorage.setItem("courseName", courseName);
        this.props.history.push('/viewSubjects');
    }

    

    render() {
        return (
            <div>
                <h2 className="text-center">Courses Details</h2>
                
                <table className="table table-striped">
                    <thead>
                        <tr>
                            
                            <th>Name</th>
                            
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.courses.map(
                        courses =>
                                    <tr >
                                        
                                        <td>{courses.name}</td>
                                        
                                        <td>
                                           
                                            <button className="btn btn-success" onClick={() => this.getSubjects(courses.name)} style={{marginLeft: '20px'}}> Subjects</button>
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

export default ListCourseComponent;