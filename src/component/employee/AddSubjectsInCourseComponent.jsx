import React, { Component } from 'react'
import EmployeeApiService from '../../service/EmployeeApiService'


class AddSubjectsInCourseComponent extends Component {

    constructor(props) {
        super(props)
        this.state = {
            subject :"",
            subjects: [],
            subject1: [],
            message: null
        }
       
     
       
        this.reloadAllSubjectsList = this.reloadAllSubjectsList.bind(this);
    }

    componentDidMount() {
        this.reloadAllSubjectsList();
    }

    reloadAllSubjectsList() {
        EmployeeApiService.fetchAllSubjects()
            .then((res) => {
                this.setState({subjects: res.data.result})
                console.log(this.state.subjects);
            });
            // UserService.getUsers().then(resp => {
            //     this.setState({ users: resp.data });
            //     console.log(this.state.users);
            // })
    }
    
  
    onAdd(){
        const courseName = window.localStorage.getItem("courseName");
        console.log(courseName)
        const piyush = {
            courseName : courseName,
            subjectTitles : this.state.subject1,
        }
        console.log(piyush)
        EmployeeApiService.addSubject(piyush).then((res) =>{
        
            this.props.history.push('/emp-courses')
        })
    }

    onchange = (e) => {
        //e.target.name = e.target.value
        const sub = e.target.value
        console.log(e.target.value)
        //this.setstate({ subject : sub})
        console.log(this.state.subject1)
        this.setState((prevstate) => {
            // return {
            //     subject1 : [ ...prevstate.subject1 , sub]
            // }
            const arr = this.state.subject1
            arr.push(sub)
            return {
                subject1 : arr
            }
        })
        console.log(this.state.subject1)
    }
   

    
    render() {
        return (
            <div>
                <h2 className="text-center">Subject Details</h2>
                <div>


                    {
                        this.state.subjects.map(subjects =>
                            (
                                <div class="form-check">
                                <input class="form-check-input" type="checkbox" name="subject" value={subjects.name} id="subjectTitles" onChange={this.onchange}/>
                                <label class="form-check-label" for="flexCheckDefault">
                                   {subjects.name}
                                </label>
                                </div>
                            ))
                    }

                    <button onClick={() => this.onAdd()} type="button" class="btn btn-info">Add</button>
           
           
                
         
              
                </div>

            </div>
        );
    }




}


export default AddSubjectsInCourseComponent;