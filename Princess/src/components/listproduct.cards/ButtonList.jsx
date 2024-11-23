import style from './ButtonList.module.css'

import {Link} from 'react-router-dom'

const Button = ({label, router, cod_cadastro_avalia}) => {
    return(
        <div>
            <Link to={`${router} ${cod_cadastro_avalia}`}>
            <button className={style.buttonContainer}>{label}</button>
            </Link>
        </div>
    )
}

export default Button