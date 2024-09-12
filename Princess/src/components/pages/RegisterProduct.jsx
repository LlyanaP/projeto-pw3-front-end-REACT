import React from "react";

import style from './Register.module.css'

import Button from '../forms/Button'

import Input from '../forms/Input'

import {Select, SelectAvaliar} from '../forms/Select'

const RegisterProduct = () => {
    return(
        <section className={style.register}>
            <h1>Registre seu produto</h1>

                <Input
                    type="text"
                    name="txt_produto"
                    placeHolder= "Digite o nome do seu produto"
                    text = "Nome do Produto"
                />
                <Input
                    type="text"
                    name="txt_marca"
                    placeHolder= "Digite a marca do produto"
                    text = "Marca"
                />

                <Input
                    type="text"
                    name="txt_ean"
                    placeHolder="EAN é um código de barras composto por 13 dígitos para identificar individualmente um objeto ou produto."
                    text="Digite o EAN do produto"
                />
                
                <Select
                    name='Nicho'
                    text='Escolha o nicho do produto'
                />
                <Input
                    type="text"
                    name="txt_utilicorreto"
                    placeHolder="Como a industria indica utilizar este produto"
                    text="Utilização da industria"
                />
                <Input
                    type='text'
                    name='text_uso'
                    placeHolder='Maneira que foi utilizado por sua pessoa'
                    text='Utilização pessoal'
                />

                <Input
                    type="text"
                    name="txt_dica"
                    placeHolder="Diferencial que você considera que melhorou sua experiencia"
                    text="Dica"
                />
                <SelectAvaliar
                    name="Avaliação"
                    text="Avalie o produto"
                />
                <h2>Contribua adicionando um novo produto e o avaliando </h2>
                <Button
                    rotulo="Cadastrar e Avaliar Produto"
                />
        </section>
    )
}

export default RegisterProduct