import React, { Component } from 'react'
import ApiService from "../../service/ApiService";

class ResultComponent extends Component {

    constructor(props) {
        super(props)
        this.state = {
            tests: [],
            message: null
        }
        
        this.reloadResultList = this.reloadResultList.bind(this);
    }

    componentDidMount() {
        this.reloadResultList();
    }

    reloadResultList() {
        const score = window.sessionStorage.getItem("score")
        window.sessionStorage.removeItem("score")    
           
    }
   

   
    
    render() {
        return (
           <div>
               <h1>SCORE</h1>
               <h2>{window.sessionStorage.getItem("score")}</h2>

           </div>
        );
    }

}

export default ResultComponent;