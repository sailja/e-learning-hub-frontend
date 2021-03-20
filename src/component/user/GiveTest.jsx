import React, { Component } from 'react'
import ApiService from "../../service/ApiService";

class GiveTest extends Component {

    constructor(props) {
        super(props)
        this.state = {
            givenAnswer: "",
            questions: [],
            message: null,
            
        }
       
        
       
        this.reloadQuestions = this.reloadQuestions.bind(this);
        this.calcScore = this.calcScore.bind(this);
    }

    componentDidMount() {
        this.reloadQuestions();
    }

    reloadQuestions() {
        const testId = window.sessionStorage.getItem("testId")
        ApiService.fetchQuestion(testId)
            .then((res) => {
                window.sessionStorage.removeItem("testId")
                window.sessionStorage.removeItem("testName")
                this.setState({questions: res.data.result})
                console.log(this.state.questions);
            });
    }
    onchange = (selectedOption, question) => {
        //alert(selectedOption + " : "+ question.answer)
        question.selectedAnswer = selectedOption
        //console.log(JSON.stringify(this.state.questions))
    }

    calcScore = () => {
        let score = 0
        
        this.state.questions.forEach(qs => {
            console.log(score + " " + qs.answer)
            if(qs.answer === qs.selectedAnswer){
                
                ++score
            }
        })
        window.sessionStorage.setItem("score",score)
        this.props.history.push("/result")
    }

    
    render() {
        return (
            
            <div>
                <h1>Questions</h1>


                 <br></br>
                 <hr></hr>
                        {
                            this.state.questions.map(
                        question =>
                                    
                                        <div>
                                        {question.data}
                                        <br></br>
                                        <div class="form-check">
                                          <input class="form-check-input" type="radio" name={question.id} id="1" value={question.option1}  onChange={e => this.onchange(e.target.value, question)}/>
                                          <label class="form-check-label" for="flexRadioDefault1">
                                            {question.option1}
                                          </label>
                                           </div>
                                           <div class="form-check">
                                          <input class="form-check-input" type="radio" name={question.id} id="2"value={question.option2}  onChange={e => this.onchange(e.target.value, question)}/>
                                          <label class="form-check-label" for="flexRadioDefault1">
                                            {question.option2}
                                          </label>
                                           </div>
                                           <div class="form-check">
                                          <input class="form-check-input" type="radio" name={question.id} id="3" value={question.option3} onChange={e => this.onchange(e.target.value, question)}/>
                                          <label class="form-check-label" for="flexRadioDefault1">
                                            {question.option3}
                                          </label>
                                           </div>
                                           <div class="form-check">
                                          <input class="form-check-input" type="radio" name={question.id} id="4" value={question.option4} onChange={e => this.onchange(e.target.value, question)}/>
                                          <label class="form-check-label" for="flexRadioDefault1"> 
                                            {question.option4}
                                          </label>
                                           </div>
                                           <hr></hr>
                             
                                       
                                    </div>
                            )
                        }
                        
                                           
                    <button className="btn btn-success" onClick={this.calcScore}> Submit </button> 

                     
            
        </div>
        );
    }

}

export default GiveTest;