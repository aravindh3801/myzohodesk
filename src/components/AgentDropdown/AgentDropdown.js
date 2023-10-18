import { Component } from "react";
import Dropdown from "../Dropdown/Dropdown";
import Label from "../Label/Label";
export default class AgentDropdown extends Component{
    constructor(props){
        super(props);
        this.state= {

        }
    }
    render(){
        const agents= ['User 1','User 2','User 3']
        return(
            <div>
                <Label displayLabel='Owner' />
                <Dropdown options={agents}/>
            </div>
        )
    }
}
