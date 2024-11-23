import React from "react";

import style from './ListProduct.module.css'

import CardList from '../listproduct.cards/CardsListProduct.jsx'

import Container from '../layout/Container.jsx';

import ContainerList from "../layout/ContainerList.jsx";

import avalie from "../../assets/avalie.jpg"

import { useState, useEffect } from "react";

const ListProduct = () =>{

    const [listProduct, setListProduct] = useState([]);
        useEffect(()=>{

            fetch('http://localhost:5001/listagemDeProdutos', {
                method: 'GET',
                mode:'cors',
                headers:{
                    'Content-Type':'application/json',
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Headers': '*'
                },
            })
                .then((resp)=>resp.json())
                .then((data)=>{
                    console.log('Produto: ' + data.data);
                    setListProduct(data.data);
                    console.log('STATE: ' + listProduct);
                })
                .catch((err)=>{console.log(err)});
        }, []);

        return(
            <Container>
            <section className={style.container}>
                <h1>Lista de Avaliação</h1>
                <ContainerList>
                    {
                        listProduct.map((listProduct)=>(
                            <CardList
                                produto={listProduct.produto}
                                marca={listProduct.marca}
                                imagem={avalie}
                                cod_cadastro_avalia={listProduct.cod_cadastro_avalia}
                                key={listProduct.cod_cadastro_avalia}
                            />
                        ))
                    }
                </ContainerList>
            </section>
        </Container>
        )
    }
    export default ListProduct