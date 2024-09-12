import style from './Input.module.css'

const Input = ({text,placeHolder,type,name}) => {
    return(
        <div className={style.register}>
            <label htmlFor={name}>{text}</label>
            <input
                type ={type}
                name={name}
                id={name}
                placeHolder ={placeHolder}

            />
        
        </div>
    )
}
export default Input