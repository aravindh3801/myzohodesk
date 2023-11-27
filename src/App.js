import './App.css';
import HomePage from './components/Homepage/HomePage';
import {Provider} from 'react-redux'
import {createStore,applyMiddleware} from 'redux'
import {editSingleTicketMiddleware} from './middleware/middlewares'

function App() {
  return (
    <Provider store={store}>
      <div className="App">
      <header className="App-header">
        <HomePage/>
      </header>
    </div>
    </Provider>
    
  );
}
// const action = {
//   type: 'ADD_TICKET',
//   newTicket: {id:1,subject:'Here\'s your first ticket',email:'lawrence@zylker.com',status:'Open',owner:'Agent 1'}
// }
const initialState = {
  tickets: [
    {id:1,subject:'Here\'s your first ticket',email:'lawrence@zylker.com',status:'Open',owner:'Agent 1'},
  ],
  ticketToBeEdited:{},
  addTicketFormFields:{
    email: {id:'email',type:'field',displayLabel:'Email'},
    subject: {id:'subject',type:'field',displayLabel:'Subject'},
    status: {id:'status',type:'picklist',displayLabel:'Status',options:['Open','Closed','Escalated'],value:'Open'},
    owner: {id:'owner',type:'picklist',displayLabel:'Owner',options:['Agent 1','Agent 2','Agent 3'],value:'Agent 1'},
  }
}

const reducer = (prevState = initialState,action) => {
  switch(action.type){
    case 'ADD_TICKET':{
      return {
        ...prevState,
        tickets: [...action.tickets]
      }
    }
    case 'EDIT_TICKET':{
      return {
        ...prevState,
        ticketToBeEdited: action.ticketToBeEdited
      }
    }
    case 'DELETE_TICKET':{
      return {
        ...prevState,
        tickets: [...action.tickets]
      }
    }
    default: return prevState
  }
}

export const store = createStore(
  reducer,
  applyMiddleware(editSingleTicketMiddleware)
)
 console.log("initial State: ",store.getState())
 //store.dispatch(action)
 console.log("state after a dispatch: ",store.getState())
//store.subscribe(() => console.log("store: ",store.getState()))
//<Form className='Form'/>
export default App;
