import style from './Input.module.css'

const Input = ({text,placeHolder,type,name, readOnly }) => {
    return(
        <div className={style.register}>
            <label htmlFor={name}>{text}</label>
            <input
                type ={type}
                name={name}
                id={name}
                placeHolder ={placeHolder}
                readOnly = {readOnly}

            />
        
        </div>
    )
}
export default Input