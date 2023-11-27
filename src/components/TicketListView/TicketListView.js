import { Component } from "react";
import Ticket from "../Ticket/Ticket";
import Form from "../Form";
import Header from "../Homepage/Header";
import ListViewHeader from "./ListViewHeader";
import BulkUpdateComponent from '../BulkUpdateComponent/BulkUpdateComponent'
import {connect} from 'react-redux'

class TicketListView extends Component{
    constructor(props){
        super(props);
        this.state ={
            isTicketListView : true,
            isAddTicketPage : false,
            tickets:[
                {id:1,subject:'Here\'s your first ticket',email:'lawrence@zylker.com',status:'Open',owner:'Agent 1'}
            ],
            ticketsToBeEdited:[],
            isEditTicketForm: false
        }
        //this.addTicket = this.addTicket.bind(this)
        //this.deleteTicket = this.deleteTicket.bind(this)
        this.preFillEditTicket = this.preFillEditTicket.bind(this)
        this.decideHomePage = this.decideHomePage.bind(this)

    }
    // addTicket = (obj) => {   
    //     const {tickets} = this.state
    //     //const prevState = {...this.state}
    //     let isATicketNeedToBeEdited = tickets.some(ticket => ticket.id === obj.id)
    //     if(!isATicketNeedToBeEdited){
    //         this.setState((prevState) => {
    //             return {
    //                 ...prevState,
    //                 isTicketListView:true,
    //                 isAddTicketPage:false,
    //                 isEditTicketForm:false,
    //                 tickets: [...prevState.tickets,{id:obj.id,subject:obj.subject.value,email:obj.email.value,status:obj.status.value,owner:obj.owner.value}]
    //             }
    //         })
    //     }
    //     else{
    //         let editTicket = tickets.find(ticket => ticket.id === obj.id)
    //         editTicket.id = obj.id
    //         editTicket.email = obj.email.value
    //         editTicket.subject = obj.subject.value
    //         editTicket.status = obj.status.value
    //         editTicket.owner = obj.owner.value
    //         let updatedTicketlist = tickets.map(ticket => {
    //             ticket.id === obj.id ? ticket=editTicket : ticket=ticket
    //             return ticket
    //         })
    //         this.setState((prevState) => {
    //             return {
    //                 ...prevState,
    //                 isTicketListView:true,
    //                 isAddTicketPage:false,
    //                 isEditTicketForm:false,
    //                 tickets: updatedTicketlist
    //             }
    //         })
    //     }               
    // }
    deleteTicket =(id) =>{
        const {tickets} = this.state
        let ticketsCount = tickets.length
        let deletedTickets = tickets.filter(ticket => ticket.id !== id)
        if(ticketsCount > 1){
            this.setState((prevState) =>{
                return {
                    ...prevState,
                    tickets:deletedTickets
                }
            })
        }
        else{
            alert('There must be atleast one ticket present!')
        }
    }
    preFillEditTicket = () =>{
        // const {tickets} = this.props
        // let ticketToBeEdited = tickets.filter(ticket => ticket.id === id)
        this.setState((prevState) =>{
            return{
                ...prevState,
                isEditTicketForm: true,
                isTicketListView:false,
                isAddTicketPage: true,
            }
        })
    }
    
    decideHomePage = (ticketListViewPage,addTicketPage) =>{
        this.setState((prevState) =>{
            return {
                ...prevState,
                isTicketListView: ticketListViewPage,
                isAddTicketPage: addTicketPage
            }
        })
    }
    render(){
        const {tickets} = this.props
        const {isTicketListView,isAddTicketPage,isEditTicketForm,ticketsToBeEdited} = this.state
        return (
          <div>
            <Header decideHomePage={this.decideHomePage} />
            {isTicketListView ? (
                <div>
                    <ListViewHeader />
                    <Ticket tickets={tickets} preFillEditTicket={this.preFillEditTicket}/>
                    
              </div>
            ) : isAddTicketPage ? (
              <Form
                ticketsCount={tickets.length}
                //addTicket={this.addTicket}
                decideHomePage={this.decideHomePage}
                isEditTicketForm={isEditTicketForm}
                //ticketToBeEdited={ticketsToBeEdited}
              />
            ) : null}
          </div>
        );
    }
}

function mapStateToProps(state){
    return{
        tickets: state.tickets

    }
}

// const mapDispatchToProps = (dispatch) => {
//     return {
//         ticketToBeEdited: 
//     }
// }
//<BulkUpdateComponent />
 

export default connect(mapStateToProps)(TicketListView)


