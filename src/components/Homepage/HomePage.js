import { Component } from "react";
import TicketListView from "../TicketListView/TicketListView";

export default class HomePage extends Component{
    constructor(props){
        super(props);
        this.state = {
            // isTicketListView : true,
            // isAddTicketPage : true,
        }
        
    }
    render(){
        return(
            <TicketListView />
        )
    }
  
    }
