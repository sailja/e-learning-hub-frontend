import React, { Component } from 'react'
import EmployeeApiService from '../../service/EmployeeApiService'


class AddQuestions extends Component {

    constructor(props) {
        super(props)
        this.state = {
             data:"",
            option1:"",
	        option2:"",
	        option3:"",
            option4:"",
	         Answer:"",
            message: null
        }
       
     
       
        this.onAdd = this.onAdd.bind(this);
    }

    
    
  
   

    onChange = (e) => this.setState({ [e.target.name]: e.target.value });
    
    onAdd(){
       const question = {
                data:this.state.data,
                option1:this.state.option1,
                option2:this.state.option2,
                option3:this.state.option3,
                option4:this.state.option4,
                answer:this.state.Answer
       }
        const tid=sessionStorage.getItem("testId")
        console.log(tid);
        console.log(question)
        EmployeeApiService.addQuestion(question, tid) .then((res) => {
           this.props.history.push("/viewTest")
        })
    }

    
    render() {
        return (
            <div>
                <h4>ADD TEST</h4>
      <div className="form">
        <div className="mb-3">
          <label className="form-label">Question</label>
          <input
                type="text"
                class="form-control"
                name="data"
                
                onChange={this.onChange}
              />
        </div>

        <div className="mb-3">
          <label className="form-label">Option 1</label>
          <input
                type="text"
                class="form-control"
                name="option1"
                
                onChange={this.onChange}
              />
        </div>

        <div className="mb-3">
          <label className="form-label">Option 2</label>
          <input
                type="text"
                class="form-control"
                name="option2"
                
                onChange={this.onChange}
              />
        </div>

        <div className="mb-3">
          <label className="form-label">Option 3</label>
          <input
                type="text"
                class="form-control"
                name="option3"
               
                onChange={this.onChange}
              />
        </div>

        <div className="mb-3">
          <label className="form-label">Option 4</label>
          <input
                type="text"
                class="form-control"
                name="option4"
               
                onChange={this.onChange}
              />
        </div>

        <div className="mb-3">
          <label className="form-label">Answer</label>
          <input
                type="text"
                class="form-control"
                name="Answer"
                
                onChange={this.onChange}
              />
        </div>
        
        
        
        
        
        
        <div className="mb-3">
          <button onClick={this.onAdd} className="btn btn-success mx-2">
            Add
          </button>
         <a href="/viewTest" className="btn btn-danger">Cancel</a>
        </div>
      </div>
    

            </div>
        );
    }




}


export default AddQuestions;