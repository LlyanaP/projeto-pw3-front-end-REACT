import style from '../listproduct.cards/DetalheList.module.css'

import {React, useState, useEffect} from "react";

import {useParams} from 'react-router-dom';

import Button from './ButtonList.jsx';

import avalie from "../../assets/avalie.jpg"

const DetalheList = () => {
    const {cod_cadastro_avalia} = useParams()
    console.log('Código Produto' + cod_cadastro_avalia)

    const [cadastroAvaliacao, setCadastroAvaliacao] = useState({})

    useEffect(()=>{

        fetch(`http://localhost:5001/detalheList/${cod_cadastro_avalia}`, {
            method: 'GET',
            mode:'cors',
            headers: {
            'Content-Type':'application/json',
            'Access-Control-Allow-Origin':'*',
            'Access-Control-Allow-Headers':'*',
        },
        })
            .then((resp)=>resp.json())
            .then((data)=>{
            setCadastroAvaliacao(data.data);
            console.log('blabla' + data.data.cod_cadastro_avalia );
        })
        .catch((err)=>{console.log(err)});

        },[]);

    return(
        <div className={style.container}>
            <div className={style.container_img}>
                <img className={style.imgAvalie} src={avalie} alt='Avalie' />
            </div>
    
            <div className={style.info}>
                <span className={style.produto}>{cadastroAvaliacao.produto}</span>
                <span className={style.produto}>{cadastroAvaliacao.marca}</span>
                <span className={style.descricao}>{cadastroAvaliacao.utilizacaoCorreta}</span>
                <span className={style.descricao}>{cadastroAvaliacao.utilizacaoCorreta}</span>
    
                <div className={style.container_buttons}>
                    <Button 
                        label='EDITAR'
                        router='/edit/'
                        cod_cadastro_avalia={cadastroAvaliacao.cod_cadastro_avalia}
                    />
                    <Button 
                        label='EXCLUIR'
                        router='/delete/'
                        cod_cadastro_avalia={cadastroAvaliacao.cod_cadastro_avalia}
                    />
                </div>
            </div>
        </div>
     )
}    
export default DetalheList