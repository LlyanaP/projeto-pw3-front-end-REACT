import React from "react";

import style from './ListProduct.module.css'

import { useState, useEffect } from "react";

import CardList from '../listproduct.cards/CardsListProduct.jsx'

import Container from '../layout/Container.jsx';

import ContainerList from "../layout/ContainerList.jsx";

import avalie from "../forms/avalie.jpg"

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
    
            <section className={style.list_book_container}>
                
                <h1>Lista de Avaliação</h1>
    
                <ContainerList>
                    {
                        listProduct.map((listProduct)=>(
                            // console.log(book.nome_livro)
                            <CardList
                                produto={listProduct.produto}
                                ean={listProduct.ean}
                                ima={avalie}
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