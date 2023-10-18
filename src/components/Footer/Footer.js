import styles from './Footer.module.css'
const Footer = ({module,onSubmitClick,onCancelClick}) =>{
    return(
        <div className={styles.FooterContainer}>
            <button id={`${module} submit button`} onClick={onSubmitClick}>SUBMIT</button>
            <button id={`${module} edit button`} onClick={onCancelClick}>CANCEL</button>
        </div>
    )
}
export default Footer