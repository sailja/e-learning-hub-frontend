import React, { Component } from 'react'
import ApiService from "../../service/ApiService";

class GetTestComponent extends Component {

    constructor(props) {
        super(props)
        this.state = {
            tests: [],
            message: null
        }
       
        
        this.reloadTestList = this.reloadTestList.bind(this);
    }

    componentDidMount() {
        this.reloadTestList();
    }

    reloadTestList() {
       ApiService.fetchTest(window.sessionStorage.getItem("sid")).then((res) => {
          
        this.setState({tests: res.data.result})
        console.log(this.state.tests);
    });
           
    }

   addQuestions(tid){
       window.sessionStorage.setItem("testId",tid)
       this.props.history.push("/addQuestions")


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
                            this.state.tests.map(
                        tests =>
                                    <tr >
                                     
                                        <td>{tests.name}</td>
                                        
                                        <td>
                                          
                                           <button onClick={() => this.addQuestions(tests.id)} className="btn btn-info">Add Questions</button>
                                           
                                        </td>
                                        <td>
                                     
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

export default GetTestComponent;