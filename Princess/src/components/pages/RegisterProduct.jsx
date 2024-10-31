import React from "react";

import style from './Register.module.css'

import Button from '../forms/Button'

import Input from '../forms/Input'

import { useState, useEffect } from "react";

import {Select, SelectAvaliar} from '../forms/Select'

const RegisterProduct = () => {

const[nicho, setNicho] = useState([]);

const[avalie, setAvalie] = useState([]);

const [cadastroAvaliacao, setCadastroAvaliacao] = useState({})

function handlerChangeCadProduto(event){
    setCadastroAvaliacao({...cadastroAvaliacao,[event.target.name]:event.target.value});
    console.log(cadastroAvaliacao)
}
function registerProduct(cadastroAvaliacao){
    fetch('http://localhost:5001/cadastroAvalie',{
        method:'POST',
        mode:'cors',
        headers:{
            'Content-Type':'application/json',
            'Access-Control-Allow-Origin':'*',
            'Access-Control-Allow-Headers':'*'
        },
        body:JSON.stringify(cadastroAvaliacao)
    })
    .then(
        (resp)=>resp.json()
    )
    .then(
        (data)=>{
            console.log(data);
        }
    )
    .catch(
        (err)=>{console.log(err)}
    )
}
    function submit(event){
        event.preventDefault();
        console.log("Dados a serem enviados:", cadastroAvaliacao); // Verifique o que está sendo enviado
        registerProduct(cadastroAvaliacao);
    }

    function handleChangeCategory(event){
        setCadastroAvaliacao({...cadastroAvaliacao, cod_categoria_nicho: event.target.value});
        console.log(cadastroAvaliacao);
    }

    useEffect(() => {
        fetch('http://localhost:5001/listagemDeNicho',{
            method: 'GET',
            headers:{
               'Content-Type':'application/json',
                'Acess-Control-Allow-Origin':'*',
                "Acess-Control-Allow-Headers":'*', 
            }
        }).then(
            (resp) => resp.json()
        ).then(
            (data) => {
                console.log("Dados de Nicho:", data)
                setNicho(data.data|| []);
            }
        ).catch(
            (error) =>{console.log(error)}
        )
    },[]
    );

    function handleChangeAvalie(event){
        setCadastroAvaliacao({...cadastroAvaliacao, cod_avalie: event.target.value});
        console.log(cadastroAvaliacao);
    }

    useEffect(()=>{
        fetch('http://localhost:5001/avalie',{
            method:'GET',
            headers:{
                'Content-Type':'application/json',
                'Acess-Control-Allow-Origin':'*',
                "Acess-Control-Allow-Headers":'*', 
            }
        }).then(
            (resp) => resp.json()
        ).then(
            (data) => {
                console.log("Dados de avalie:", data)
                setAvalie(data.data|| []);
            }
        ).catch(
            (error)=>{console.log(error)}
        )
    },[]);


    return(
        <section className={style.register}>
            <h1>Registre seu produto</h1>
        <form onSubmit={submit}>
                <Input
                    type="text"
                    name="produto"
                    placeHolder= "Digite o nome do seu produto"
                    text = "Nome do Produto"
                    handlerChangeCadProduto={handlerChangeCadProduto}
                />
                <Input
                    type="text"
                    name="marca"
                    placeHolder= "Digite a marca do produto"
                    text = "Marca"
                    handlerChangeCadProduto={handlerChangeCadProduto}
                />

                <Input
                    type="text"
                    name="ean"
                    placeHolder="EAN é um código de barras composto por 13 dígitos para identificar individualmente um objeto ou produto."
                    text="Digite o EAN do produto"
                    handlerChangeCadProduto={handlerChangeCadProduto}
                />
                
                <Select
                    name='nicho_id'
                    text='Escolha o nicho do produto'
                    options={nicho}
                    handleChangeCategory={handleChangeCategory}
                />
                <Input
                    type="text"
                    name="utilizacaoCorreta"
                    placeHolder="Como a industria indica utilizar este produto"
                    text="Utilização da industria"
                    handlerChangeCadProduto={handlerChangeCadProduto}
                />
                <Input
                    type='text'
                    name='usoPessoal'
                    placeHolder='Maneira que foi utilizado por sua pessoa'
                    text='Utilização pessoal'
                    handlerChangeCadProduto={handlerChangeCadProduto}
                />

                <Input
                    type="text"
                    name="dica"
                    placeHolder="Diferencial que você considera que melhorou sua experiencia"
                    text="Dica"
                    handlerChangeCadProduto={handlerChangeCadProduto}
                />
                <SelectAvaliar
                    name="avalie_id"
                    text="Avalie o produto"
                    options={avalie}
                    handleChangeAvalie={handleChangeAvalie}
                />
                <h2>Contribua adicionando um novo produto e o avaliando </h2>
                <Button
                    rotulo="Cadastrar e Avaliar Produto"
                />
            </form>    
        </section>
    )
}

export default RegisterProduct