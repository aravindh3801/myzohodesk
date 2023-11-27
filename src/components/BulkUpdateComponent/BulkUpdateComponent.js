import { Component } from "react";
import Dropdown from '../Dropdown/Dropdown'
import {connect} from 'react-redux'

class BulkUpdateComponent extends Component{
    constructor(props){
        super(props);
        this.bulkUpdateFieldsGenerator = this.bulkUpdateFieldsGenerator.bind(this)
    }
    
    bulkUpdateFieldsGenerator(){
        const {addTicketFormFields} = this.props
        let bulkUpdateFields = {
            id: '',
            options:[]
        }
        for (let field in addTicketFormFields){
            bulkUpdateFields.options.push(addTicketFormFields[field].displayLabel)
        }
        bulkUpdateFields.id = 'bulkUpdateField'
        return bulkUpdateFields

    }
    render(){
        return(
            <div className="BulkUpdateForm">
                <Dropdown field={this.bulkUpdateFieldsGenerator()} />
                <div><textarea></textarea></div>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        addTicketFormFields: state.addTicketFormFields
    }
}
export default connect(mapStateToProps)(BulkUpdateComponent)