import React from "react";

import style from './Register.module.css'

import Button from '../forms/Button'

import Input from '../forms/Input'

import { useState, useEffect } from "react";

import {Select, SelectAvaliar} from '../forms/Select'

const RegisterProduct = () => {

const[nicho, setNicho] = useState([])

const[avalie, setAvalie] = useState([])

const [cadastroAvaliacao, setCadastroAvaliacao] = useState([])

function handlerChangeCadProduto(event){
    setCadastroAvaliacao({...cadastroAvaliacao,[event.target.name]:event.target.value});
    console.log(cadastroAvaliacao)
}
function registerProduct(cadastroAvaliacao){
    fetch('http://localhost:5000/cadastroAvalie',{
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
        registerProduct(cadastroAvaliacao);
    }

    useEffect(() => {
        fetch('http://localhost:5000/listagemDeNicho',{
            method: 'GET',
            headers:{
               'Content-Type':'application/jason',
                'Acess-Control-Allow-Origin':'*',
                "Acess-Control-Allow-Headers":'*', 
            }
        }).then(
            (resp) => resp.json()
        ).then(
            (data) => {
                console.log('DATA' + data.data.nome_categoria_nicho)
                setNicho(data.data)
            }
        ).catch(
            (error) =>{console.log(error)}
        )
    },[]
    );

    useEffect(()=>{
        fetch('http://localhost:5000/Avalie',{
            method:'GET',
            headers:{
                'Content-Type':'application/jason',
                'Acess-Control-Allow-Origin':'*',
                "Acess-Control-Allow-Headers":'*', 
            }
        }).then(
            (resp) => resp.json()
        ).then(
            (data) => {
                console.log('DATA' + data.data.nome_avalie)
                setAvalie(data.data)
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
                    name='Nicho'
                    text='Escolha o nicho do produto'
                    options={nicho}
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
                    name="Avaliação"
                    text="Avalie o produto"
                    options={avalie}
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