import { Component } from "react";
import styles from './Ticket.module.css'
export default class Ticket extends Component{
    constructor(props){
        super(props); 

    }
    render(){
        const {tickets, deleteTicket, editTicket} = this.props
        return(
            <div className={styles.ticketContainer}>
                {tickets.map((ticket) => {
                    return (
                    <div className={styles.ticket} id={ticket.id} key={ticket.id}>
                        <span id="ticketId">#{ticket.id}</span>
                        <span id="ticketSubject">{ticket.subject}</span>
                        <span id="ticketEmail">{ticket.email}</span>
                        <span id="ticketStatus">{ticket.status}</span>
                        <span id="ticketOwner">{ticket.owner}</span>
                        <span id="editTicketButtonListView"><button onClick={() => editTicket(ticket.id)}>EDIT</button></span>
                        <span id="submitTicketButtonListView"><button onClick={() => deleteTicket(ticket.id)}>DELETE</button></span>
                    </div>
                    )
                })}
            </div>
        )
    }
}
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