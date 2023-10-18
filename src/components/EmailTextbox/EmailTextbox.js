import { Component } from "react"
import Label from "../Label/Label"
// const EmailTextbox = (props) => {
//     function emailValidation(e){
//         if(e.target.value > 0){
//             alert('hello')
//         }
//     }
//     return(
//         <div>
//             <Label displayLabel='Email'/>
//             <input type="email" placeholder="Email Id" onChange={emailValidation}></input>
//             <button>SUBMIT</button>
//         </div>
//     )
// }
class EmailTextbox extends Component{
    constructor(props){
        super(props);
            this.state ={
                 
            }
            //this.emailValidation = this.emailValidation.bind(this)
        }
    
    render(){
        return(
            <div>
                <Label displayLabel='Email'/>
                <input id="emailField" type="email" placeholder="Email Id" />
            </div>
        )
    }
}
// export function emailValidation(){
//     let email = document.getElementById('emailField').value
//     //console.log(email)
//     const emailPattern = /^\w+\.{0,1}\w*@\w+\.com$/
//     const isvalidEmail = emailPattern.test(email)
//     return isvalidEmail 
// }
export default EmailTextbox
