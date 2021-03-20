import React, { Component } from 'react'
import ApiService from "../../service/ApiService";

class PaymentPage extends Component {

    constructor(props) {
        super(props)
        this.state = {
            tests: [],
            message: null
        }
       
        
        this.Confirm = this.Confirm.bind(this);
    }

    
    

    Confirm(){
        const userId = window.sessionStorage.getItem("userId")
        const testId = window.sessionStorage.getItem("testId")
        const testPrice = window.sessionStorage.getItem("testPrice")
        const testName = window.sessionStorage.getItem("testName")

        const arr = this.state.tests
        arr.push(testName)
      
      
         console.log(testId)
         console.log(testPrice)
        const details = {
            user_id : userId,
            test_id: testId,
            amount: testPrice
        }
        console.log(arr)
        const add = {
          userId : userId,
          testName : arr
        }
        console.log(add)
      

        ApiService.pay(details).then(res => {
         
           ApiService.addUserTest(add).then(res =>{
            this.setState({message : 'Payment Successful'});
            this.props.history.push('/giveTest')

           })
            
        })
    }
  

   
    render() {
        return (
            
            <div>
               
                <div>
 <div class="row">
  <div class="col-75">
    <div class="container">
     

        <div class="row">
         

          <div class="col-50">
            <h3>Payment</h3>
            <label for="fname">Accepted Cards</label>
            <div class="icon-container">
              <i class="fa fa-cc-visa"></i>
              <i class="fa fa-cc-amex" ></i>
              <i class="fa fa-cc-mastercard" ></i>
              <i class="fa fa-cc-discover" ></i>
            </div>
            <label for="cname">Name on Card</label>
            <input type="text" id="cname" name="cardname" placeholder="John More Doe"/>
            <label for="ccnum">Credit card number</label>
            <input type="text" id="ccnum" name="cardnumber" placeholder="1111-2222-3333-4444"/>
            <label for="expmonth">Exp Month</label>
            <input type="text" id="expmonth" name="expmonth" placeholder="September"/>

            <div class="row">
              <div class="col-50">
                <label for="expyear">Exp Year</label>
                <input type="text" id="expyear" name="expyear" placeholder="2018"/>
              </div>
              <div class="col-50">
                <label for="cvv">CVV</label>
                <input type="text" id="cvv" name="cvv" placeholder="352"/>
              </div>
            </div>
          </div>
          
          <input onClick={() => this.Confirm()} value="Continue to checkout" class="btn"/>

          
         

        </div>
       
     
    </div>
  </div>

  <div class="col-25">
   
  </div>
</div>
      
  </div>



               
               
            
        </div>
        );
    }

}

export default PaymentPage;