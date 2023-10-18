import { Component} from "react";
import Label from "./Label/Label";
import styles from './Form.module.css'
// import EmailTextbox from './EmailTextbox/EmailTextbox'
// import TicketStatus from "./TicketStatus/TicketStatus"
// import AgentDropdown from "./AgentDropdown/AgentDropdown";
// import TicketSubject from "./TicketSubject/TicketSubject";
import Dropdown from "./Dropdown/Dropdown";
import Footer from "./Footer/Footer";
class Form extends Component{

    constructor(props){
        super(props);
        const {ticketToBeEdited,isEditTicketForm} = this.props
        this.state = {
            email: {id:'email',type:'field',displayLabel:'Email',value: isEditTicketForm ? ticketToBeEdited[0].email : '',isMandatory:true},
            subject: {id:'subject',type:'field',displayLabel:'Subject',value: isEditTicketForm ? ticketToBeEdited[0].subject :''},
            status: {id:'status',type:'picklist',displayLabel:'Status',options:['Open','Closed','Escalated'],value:isEditTicketForm ? ticketToBeEdited[0].status :'Open'},
            owner: {id:'owner',type:'picklist',displayLabel:'Owner',options:['Agent 1','Agent 2','Agent 3'],value: isEditTicketForm ? ticketToBeEdited[0].owner : 'Agent 1'},
            ticketToBeEdited:[]
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.emailValidation = this.emailValidation.bind(this)       
    }
    
    
//value={isEditTicketForm ? ticketToBeEdited[0].email : null}   
//value={isEditTicketForm ? ticketToBeEdited[0].subject : null}
    render(){     
  
        const {email,subject,status,owner} = this.state
        const {decideHomePage,isEditTicketForm,ticketToBeEdited} = this.props
        
         return(
            <div className={styles.ticketAddForm}>
                <form className={styles.formContainer}>
                <div className={styles.emailField}>
                    <Label field={email} />
                    <textarea  defaultValue={isEditTicketForm ? ticketToBeEdited[0].email : ''} id={email.id} onChange={(event,isEditTicketForm) => this.handleChange(event,isEditTicketForm)} />
                </div>
                <div>
                    <Label field={subject} />
                    <textarea  defaultValue={isEditTicketForm ? ticketToBeEdited[0].subject : ''} id={subject.id} onChange={this.handleChange}/>
                </div>
                <div>
                    <Label field={status} />
                    <Dropdown isEditTicketForm={isEditTicketForm} ticketToBeEdited={ticketToBeEdited} field={status} handleChange={this.handleChange}/>
                </div>
                <div>
                    <Label field={owner} />
                    <Dropdown isEditTicketForm={isEditTicketForm} ticketToBeEdited={ticketToBeEdited} field={owner} handleChange={this.handleChange}/>
                </div>              
            </form>
                <div className={styles.ticketAddFormFooter}>
                    <Footer onSubmitClick={this.handleSubmit} onCancelClick={()=>decideHomePage(true,false)} module="ticket" />
                </div>

            </div>
        )      
    }
    // handleEdit = (id,ticketToBeEdited) =>{
    //     let updatedState = {...this.state}
    //     let fieldtoBeUpdated = updatedState[id]
    //     fieldtoBeUpdated.value = ticketToBeEdited[0][id]
    //     this.setState(updatedState) 
    //     return ticketToBeEdited[id]
    // }
    handleChange = (event,isEditTicketForm) => {
        let updatedState = {...this.state}
        let fieldtoBeUpdated = updatedState[event.target.id]
        fieldtoBeUpdated.value = isEditTicketForm ? event.target.defaultValue :event.target.value
        this.setState(updatedState)
    }
    handleSubmit = () => {
        const {email,subject,status,owner} = this.state
        const {addTicket,decideHomePage,ticketsCount,isEditTicketForm,ticketToBeEdited} = this.props

        let emailValue = email.value 
        let isValidEmail = this.emailValidation(emailValue)

        if(isValidEmail){
            addTicket({
                id: isEditTicketForm ? ticketToBeEdited[0].id : ticketsCount +1,
                email,
                subject,
                status,
                owner
            })
            decideHomePage(true,false)
        }else{
            alert('Please enter a valid email')
            decideHomePage(false,true)
        }     
        
    }
    emailValidation = (email) => {
        const emailPattern = /^\w+\.{0,1}\w*@\w+\.com$/
        let isValidEmail = emailPattern.test(email)
        return isValidEmail
    }
    
}
export default Form


// return(
//     <form onSubmit={this.handleSubmit}>
//         {this.state.formData.map((displaylabel) =>{
//             return(
//                 <div key={displaylabel.id}>
//                     <Label displayLabel={displaylabel.displayLabel} id={displaylabel.id}/>
//                     {displaylabel.type === 'field' ? <textarea value={this.state.value} onChange={(event,displaylabel) => this.handleChange(event,displaylabel)}/> 
//                     : <Dropdown handleChange={this.handleChange} options={displaylabel.options}/>}
//                 </div>
//             )
//         })}
//         <button onSubmit={this.handleSubmit}>SUBMIT</button>
//     </form>            
// )
//                    <textarea defaultValue={isEditTicketForm ? ticketToBeEdited[0].email : email.value} id={email.id} onChange={this.handleChange} />





