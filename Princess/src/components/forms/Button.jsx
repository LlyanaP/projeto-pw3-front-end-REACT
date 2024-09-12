import style from './Button.module.css'

const Button = ({rotulo}) => {
    return(
    <div className={style.button}>

        <button>{rotulo}</button>

    </div>
    )
}

export default button