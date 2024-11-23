import style from '../listproduct.cards/CardsListProduct.module.css';

import Button from './ButtonList.jsx';

const cardList = ({produto, marca, imagem, cod_cadastro_avalia}) => {
    return(
        <div className={style.container}>
            <h3 className={style.produto}>{produto}</h3>
            <p className={style.marca}>{marca}</p>
            <img className={style.avalie} src={imagem} alt={produto} title={{produto}} />
        
            <div>
                <Button label= 'Detalhe' router='/DetalheList/' cod_cadastro_avalia={cod_cadastro_avalia}/>
            </div>
        </div>
            
    )
}
export default cardList