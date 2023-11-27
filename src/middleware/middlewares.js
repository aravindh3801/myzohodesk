import { store } from "../App"

export function editSingleTicketMiddleware(getState) {
    return (next) => (action) => {
        const {type} = action

        switch(type){
            case 'ADD_TICKET':{
                const currentState = store.getState()
                const tickets = currentState.tickets
                let isATicketNeedToBeEdited = tickets.some(ticket => ticket.id === action.newTicket.id)
                if(!isATicketNeedToBeEdited){
                    action = {
                        type: 'ADD_TICKET',
                        tickets:[...tickets,action.newTicket]
                    }
                }
                else{
                    let editTicket = tickets.find(ticket => ticket.id === action.newTicket.id)
                    editTicket.id = action.newTicket.id
                    editTicket.email = action.newTicket.email
                    editTicket.subject = action.newTicket.subject
                    editTicket.status = action.newTicket.status
                    editTicket.owner = action.newTicket.owner
                    let updatedTicketlist = tickets.map(ticket => {
                        ticket.id === action.newTicket.id ? ticket=editTicket : ticket=ticket      
                    })
                    action = {
                        type: 'EDIT_TICKET',
                        tickets:updatedTicketlist
                    }    
                }
                return next(action)
                
            }
            case 'EDIT_TICKET':{
                return next(action)
            }
            case 'DELETE_TICKET':{
                const currentState = store.getState()
                const tickets = currentState.tickets
                let updatedTicketlist = tickets.filter(ticket => ticket.id !== action.ticketToBeDeleted.id) 
                action = {
                    type: 'DELETE_TICKET',
                    tickets:updatedTicketlist
                }
                return next(action)
            }
            default: return next(action)
        }
    }
}