import style from './Select.module.css'

const Select = ({type, text, name}) => {
    return(
        <div className={style.select}>
            <label htmlFor={name}>{text}</label>

            <select name={name} id={name}>
                <option>Selecione o nicho</option>
                <option>Cabelo</option>
                <option>SkinCare</option>
                <option>BodyCare</option>
                <option>Maquiagem</option>
            </select>    
        </div>
    )
}