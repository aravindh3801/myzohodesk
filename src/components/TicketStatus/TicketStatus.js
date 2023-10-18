import { Component } from "react";
import Dropdown from '../Dropdown/Dropdown'
import Label from "../Label/Label";
class TicketStatus extends Component{
    constructor(props){
        super(props);
        this.state={
            ticketStatusDisplaylabel: 'Status'
        }
    }
    
    render(){
        let options = ['Open','Escalated','Closed']
        return(
            <div>
                <Label displayLabel='Status' />
                <Dropdown options={options}/>
            </div>
            
        )
    }
}
export default TicketStatus