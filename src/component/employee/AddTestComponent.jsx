import React, { Component } from 'react'
import EmployeeApiService from '../../service/EmployeeApiService'


class AddTestComponent extends Component {

    constructor(props) {
        super(props)
        this.state = {
            name :"",
            marksPerQuestion:"",
            price:"",
            isPremium:"",
            message: null
        }
       
     
       
        this.onAdd = this.onAdd.bind(this);
    }

    
    
  
   

    onChange = (e) => this.setState({ [e.target.name]: e.target.value });
    
    onAdd(){
       const test = {
           name : this.state.name,
           marksPerQuestion:this.state.marksPerQuestion,
           price:this.state.price,
          
       }
        const sid=sessionStorage.getItem("sid")
        console.log(sid);
        console.log(test)
        EmployeeApiService.addTest(test, sid) .then((res) => {
           sessionStorage.removeItem(sid)
           this.props.history.push("/emp-subjects")
        })
    }

    
    render() {
        return (
            <div>
                <h4>ADD TEST</h4>
      <div className="form">
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input
                type="text"
                class="form-control"
                name="name"
                placeholder="Test Name"
                onChange={this.onChange}
              />
        </div>
        <div className="mb-3">
          <label className="form-label">Marks Per Question</label>
          <input
                type="number"
                class="form-control"
                name="marksPerQuestion"
                placeholder="Marks"
                onChange={this.onChange}
              />
        </div>
        <div className="mb-3">
          <label className="form-label">price</label>
          <input
                type="number"
                class="form-control"
                name="price"
                placeholder="Enter 0 if Test Is not Premium"
                onChange={this.onChange}
              />
        </div>
        
        
        <div className="mb-3">
          <button onClick={this.onAdd} className="btn btn-success mx-2">
            Add
          </button>
         <a href="/emp-subjects" className="btn btn-danger">Cancel</a>
        </div>
      </div>
    

            </div>
        );
    }




}


export default AddTestComponent;