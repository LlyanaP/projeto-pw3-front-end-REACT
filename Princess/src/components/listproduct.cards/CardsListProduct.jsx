import style from '../listproduct.cards/CardsListProduct.module.css';

import Button from './ButtonList.jsx';

const cardList = ({produto, ean, imagem, cod_cadastro_avalia}) => {
    return(
        <div className={style.bookCard}>
            <h3 className={style.titulo}>{produto}</h3>
            <p className={style.autor}>{ean}</p>
            <img className={style.avalie} src={imagem} alt={produto} title={{produto}} />
        
            <div>
                <Button label= 'Detalhe' router='/DetalheList/' cod_cadastro_avalia={cod_cadastro_avalia}/>
            </div>
        </div>
            
    )
}
export default cardList