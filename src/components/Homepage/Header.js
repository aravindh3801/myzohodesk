import { Component } from "react";
import styles from './Header.module.css'
export default class Header extends Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }
    render(){
        const {link,decideHomePage} = this.props
        return(
            <div className={styles.headerContainer}>
                <div className={styles.modulesContainer}>
                    <a
                    href={link}>
                        Tickets
                    </a>
                </div>               
                <button onClick={()=>decideHomePage(false,true)}>+</button>
            </div>
        )
    }
}
//decideHomePage={this.props.decideHomePage} 
//import AddButton from "../AddButton/AddButton";
