import style from './Input.module.css'

const Input = ({text,placeHolder,type,name, readOnly , handlerChangeCadProduto, value}) => {
    return(
        <div className={style.register}>
            <label htmlFor={name}>{text}</label>
            <input
                type ={type}
                name={name}
                id={name}
                placeHolder ={placeHolder}
                readOnly = {readOnly}
                onChange={handlerChangeCadProduto}
                value={value}

            />
        
        </div>
    )
}
export default Input