import styles from "./Button.module.css"
function Button({rotulo}){
    return(
        <div >
            <button className={styles.button}>{rotulo}</button>
        </div>
    )
}

export default Button