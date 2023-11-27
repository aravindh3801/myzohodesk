const ADD_TICKET = 'ADD_TICKET'
const EDIT_TICKET = 'EDIT_TICKET'
const DELETE_TICKET = 'DELETE_TICKET'


export function addTicket(ticket){
    return{
        type: ADD_TICKET,
        newTicket: {
            id: ticket.id,
            email: ticket.email.value,
            subject: ticket.subject.value,
            status: ticket.status.value,
            owner: ticket.owner.value
        }
    }

}

export function editSingleTicket(ticketToBeEdited) {
    return{
        type: EDIT_TICKET,
        ticketToBeEdited: ticketToBeEdited,
    }
}

export function deleteSingleTicket(ticket){
    return{
        type: DELETE_TICKET,
        ticketToBeDeleted:ticket
    }
}

