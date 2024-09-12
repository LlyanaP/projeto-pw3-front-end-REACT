import { Outlet, Link } from 'react-router-dom'
import style from './NavBar.module.css'

const NavBar = () => {

    return(
        <>
        <nav className={style.navbar}>
            <ul className={style.list}>
                <Link to ='/'>
            <li className={style.item}><img className={style.logo} src="logo.princess.png" alt="" /></li>
                </Link>

                <Link to = '/'>
                <li className={style.item}>Inicio</li>
                </Link>

                <Link to = '/registerProduct'>
                <li className={style.item}>Registrar Produto</li>
                </Link>

                <Link to = '/listProduct'>
                <li className={style.item}>Listar Produto</li>
                </Link>

                <Link to = '/avaliarProduto'>
                <li className={style.item}>Avaliar Produto</li>    
                </Link>
            </ul>
        </nav>
            <Outlet/>
        </>
    )
}

export default NavBar