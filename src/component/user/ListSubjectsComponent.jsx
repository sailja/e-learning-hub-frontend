import React, { Component } from 'react'
import ApiService from "../../service/ApiService";

class ListSubjectsComponent extends Component {

    constructor(props) {
        super(props)
        this.state = {
            subjects: [],
            message: null
        }
        this.deleteUser = this.deleteUser.bind(this);
        this.editUser = this.getSubjects.bind(this);
       // this.addUser = this.addUser.bind(this);
        this.reloadSubjectsList = this.reloadSubjectsList.bind(this);
    }

    componentDidMount() {
        this.reloadSubjectsList();
    }

    reloadSubjectsList() {
        ApiService.fetchSubjects(window.localStorage.getItem("courseName"))
            .then((res) => {
                this.setState({subjects: res.data.result})
                console.log(this.state.subjects);
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

    getTest(sid){
        window.sessionStorage.setItem("sid", sid);
        this.props.history.push("/subjectsPage")
    }


    
    render() {
        return (
            <div>
                <h2 className="text-center">Subject Details</h2>
               
                <table className="table table-striped">
                    <thead>
                        <tr>
                           
                            <th>Name</th>
                            
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.subjects.map(
                        subjects =>
                                    <tr >
                                     
                                        <td>{subjects.name}</td>
                                        
                                        <td>
                                          <button onClick={() => this.getTest(subjects.id)} className="btn btn-success">Contents</button>
                                           
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

export default ListSubjectsComponent;