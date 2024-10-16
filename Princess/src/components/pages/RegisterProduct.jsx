import React from "react";

import style from './Register.module.css'

import Button from '../forms/Button'

import Input from '../forms/Input'

import { useState, useEffect } from "react";

import {Select, SelectAvaliar} from '../forms/Select'

const RegisterProduct = () => {

const[nicho, setNicho] = useState([])

const[avalie, setAvalie] = useState([])

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

                <Input
                    type="text"
                    name="produto"
                    placeHolder= "Digite o nome do seu produto"
                    text = "Nome do Produto"
                />
                <Input
                    type="text"
                    name="marca"
                    placeHolder= "Digite a marca do produto"
                    text = "Marca"
                />

                <Input
                    type="text"
                    name="ean"
                    placeHolder="EAN é um código de barras composto por 13 dígitos para identificar individualmente um objeto ou produto."
                    text="Digite o EAN do produto"
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
                />
                <Input
                    type='text'
                    name='usoPessoal'
                    placeHolder='Maneira que foi utilizado por sua pessoa'
                    text='Utilização pessoal'
                />

                <Input
                    type="text"
                    name="dica"
                    placeHolder="Diferencial que você considera que melhorou sua experiencia"
                    text="Dica"
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
        </section>
    )
}

export default RegisterProduct