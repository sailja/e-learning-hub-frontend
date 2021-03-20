import React, { Component } from 'react'
import ApiService from "../../service/ApiService";

class EmployeeSubjectsComponent extends Component {

    constructor(props) {
        super(props)
        this.state = {
            subjects: [],
            message: null
        }
       
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
            
    }

    
    
    addTest(sid){
        window.sessionStorage.setItem("sid", sid);
        this.props.history.push("/add-test")
    }

    getTest(sid){
        window.sessionStorage.setItem("sid", sid);
        this.props.history.push("/viewTest")
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
                                          
                                           <a href="/subjectsPage" className="btn btn-success">Aage Badho</a>
                                           
                                        </td>
                                        <td>
                                      <button onClick={() => this.addTest(subjects.id)} className="btn btn-success mx-2">Add Test</button>
                                      <button onClick={() => this.getTest(subjects.id)} className="btn btn-success">View Test</button>
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

export default EmployeeSubjectsComponent;