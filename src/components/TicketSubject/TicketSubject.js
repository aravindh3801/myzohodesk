import { Component } from "react";
import Label from "../Label/Label";

export default class TicketSubject extends Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }
    render(){
        return(
            <div>
                <Label displayLabel='Subject' />
                <input />
            </div>
        )
    }
    subjectLengthValidator(){

    }
}