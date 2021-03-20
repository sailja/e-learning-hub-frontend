import React, { Component } from 'react'
import ApiService from "../../service/ApiService";

class UserTestComponent extends Component {

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

    payment(testId,testPrice,testName){
        window.sessionStorage.setItem("testId",testId)
        window.sessionStorage.setItem("testPrice",testPrice)
        window.sessionStorage.setItem("testName",testName)
       this.props.history.push("/paymentDetails")
 
    }
     
    Start(testId){
        window.sessionStorage.setItem("testId",testId)
        this.props.history.push("/giveTest")
    }

   
    render() {
        return (
            <div>
                <h2 className="text-center">Subject Details</h2>
               
                <table className="table table-striped">
                    <thead>
                        <tr>
                           
                            <th>Name</th>
                            <th>Price</th>
                            
                            
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.tests.map(
                        tests =>
                                    <tr >
                                     
                                        <td>{tests.name}</td>
                                        <td>{tests.price}</td>
                                        <td></td>
                                        
                                        <td>
                                          {tests.premium &&(
                                              <button onClick={() => this.payment(tests.id,tests.price,tests.name)} className="btn btn-info">Premium</button>
                                          )}
                                          {!tests.premium &&(
                                              <button onClick={() => this.Start(tests.id)} className="btn btn-danger">Start Test</button>

                                          )}
                                         
                                           
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

export default UserTestComponent;