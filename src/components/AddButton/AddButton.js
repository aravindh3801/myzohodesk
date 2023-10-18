import { Component } from "react"

export default class AddButton extends Component{
    constructor(props){
        super(props);
        this.state = {
            
        }
    }
    
    render(){
        const {buttonText} = this.props
        return(
            <button>{`Add ${buttonText}`}</button>
        )
    }
}