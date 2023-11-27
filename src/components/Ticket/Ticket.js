import { Component } from "react";
import styles from './Ticket.module.css'
import {editSingleTicket,deleteSingleTicket} from '../../actionsCreators/actionsCreators'
import {connect} from 'react-redux'
import {store} from '../../App'
class Ticket extends Component{
    constructor(props){
        super(props); 

    }
    render(){
        const {tickets, deleteTicket, editTicket,preFillEditTicket} = this.props
        return(
            <div className={styles.ticketContainer}>
                {tickets.map((ticket) => {
                    return (
                    <div className={styles.ticket} id={ticket.id} key={ticket.id}>
                        <input type="checkbox"></input>
                        <span id="ticketId">#{ticket.id}</span>
                        <span id="ticketSubject">{ticket.subject}</span>
                        <span id="ticketEmail">{ticket.email}</span>
                        <span id="ticketStatus">{ticket.status}</span>
                        <span id="ticketOwner">{ticket.owner}</span>
                        <span id="editTicketButtonListView"><button onClick={()=>{preFillEditTicket();editTicket(ticket)}}>EDIT</button></span>
                        <span id="submitTicketButtonListView"><button onClick={() => deleteTicket(ticket)}>DELETE</button></span>
                    </div>
                    )
                })}
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        editTicket: (ticket) => {
            dispatch(editSingleTicket(ticket))
            console.log("store after dispatching edit ticket:",store.getState())
        },
        deleteTicket: (ticket) => {
            dispatch(deleteSingleTicket(ticket))
        }
        
    }
}

export default connect(null,mapDispatchToProps)(Ticket)
// tickets.map((ticket) =>{
//     return (
//         <div className={styles.ticketContainer} id={ticket.id}>
//             <div>
                // <span>#{ticket.id}</span>
                // <span>{ticket.subject}</span>
                // <span>{ticket.status}</span>
                // <span>{ticket.owner}</span>
                // <span><button>EDIT</button></span>
                // <span><button onClick={()=>deleteTicket(ticket.id)}>DELETE</button></span>
                // <div>{ticket.email}</div>                           
//             </div>
//         </div>
//     )
// })
//const {tickets,deleteTicket} = this.props;