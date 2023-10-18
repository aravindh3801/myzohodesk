import styles from './ListViewHeader.module.css'
const ListViewHeader = (props) => {
    return(
        <div className={styles.ticketListViewHeader}>
            <span id="ticketId">ID</span>
            <span id="ticketSubject">SUBJECT</span>
            <span id="ticketEmail">CONTACT EMAIL</span>
            <span id="ticketStatus">STATUS</span>
            <span id="ticketOwner">OWNER</span>
            <span id="editTicketButtonListView">EDIT TICKET</span>
            <span id="submitTicketButtonListView">DELETE TICKET</span>
        </div>
    )
}
export default ListViewHeader