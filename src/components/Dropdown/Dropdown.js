import { Component } from "react";

export default class Dropdown extends Component{
    
    constructor(props){
        super(props);
    }
    
    render(){
        const {field,handleChange,isEditTicketForm,ticketToBeEdited}= this.props
        //console.log(options)
        return(
            <select onChange={handleChange} id={field.id} defaultValue={isEditTicketForm ? ticketToBeEdited[field.id] : field.value}>
                {field.options.map((option) =>  <option key={option}>{option}</option>)}
            </select>
        )
    }
    
}
//onChange={handleChange}