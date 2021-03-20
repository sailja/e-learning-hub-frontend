import React, { Component } from 'react'
import ApiService from "../../service/ApiService";

class purchasedTest extends Component {

    constructor(props) {
        super(props)
        this.state = {
            tests: [],
            message: null
        }
        
        this.reloadPurchasedList = this.reloadPurchasedList.bind(this);
    }

    componentDidMount() {
        this.reloadPurchasedList();
    }

    reloadPurchasedList() {
        const userId = window.sessionStorage.getItem("userId")
        console.log(userId)
        ApiService.fetchUserTest(userId)
            .then((res) => {
                this.setState({tests: res.data.result})
                console.log(this.state.tests);
            });
           
    }
    Start(testId){
        window.sessionStorage.setItem("testId",testId)
        this.props.history.push("/giveTest")
    }
   

   
    
    render() {
        return (
            <div>
                <h2 className="text-center">Purchased Test Details</h2>
               
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
                                          <button onClick={() => this.Start(tests.id)} className="btn btn-success">Start</button>
                                           
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

export default purchasedTest;