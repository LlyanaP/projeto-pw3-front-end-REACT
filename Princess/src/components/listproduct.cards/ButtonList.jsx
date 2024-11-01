import style from './ButtonList.module.css'

import { Link } from 'react-router-dom'

const Button = ({label, router, cod_cadastro_avalia}) => {
    return(
        <div className={style.buttonContainer}>
            <Link to={`${router} ${cod_cadastro_avalia}`}>
            <button>{label}</button>
            </Link>
        </div>
    )
}

export default Button