import style from '../listproduct.cards/CardsListProduct.module.css';

import Button from '../forms/Button.jsx';

const cardList = ({produto, ean, imagem}) => {
    return(
        <div className={style.bookCard}>
            <h3 className={style.titulo}>{produto}</h3>
            <p className={style.autor}>{ean}</p>
            <img src={imagem} alt={produto} title={{produto}} />
        
            <div>
                <Button label= 'Detalhe'/>
            </div>
        </div>
            
    )
}
export default cardList