import React from 'react'

import style from './AvaliarProduto.module.css'

import Button from '../forms/Button'

import Input from '../forms/Input'

import {Select, SelectAvaliar} from '../forms/Select'

const AvaliarProduto = () => {
    return(
        <section className={style.avaliarProduto}>
             <h1>Avalie sua experiência</h1>

            <Input
                type="text"
                name="txt_produto"
                placeHolder= "Nome do produto, ele nao pode ser mudado por aqui pois a pessoa escolheu um produto ja registrado"
                text = "Nome do Produto"
                readOnly
            />
            <Input
                type="text"
                name="txt_marca"
                placeHolder= "Marca do produto ele nao pode ser mudado por aqui pois a pessoa escolheu um produto ja registrado"
                text = "Marca"
                readOnly
            />

            <Input
                    type="text"
                    name="txt_ean"
                    placeHolder="EAN é um código de barras composto por 13 dígitos para identificar individualmente um objeto ou produto."
                    text="Digite o EAN do produto"
                    readOnly
            />

            <Select
                name='Nicho'
                text='O Nicho deste produto ja foi cadastrado por isso esta desativado'
                disabled 
            />
            <Input
                type="text"
                name="txt_utilicorreto"
                placeHolder="Como a industria indica utilizar este produto"
                text="Utilização da industria"
                readOnly
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
            <h2>Faça parte das pessoas que avaliaram este produto</h2>
            <Button
                rotulo="Avaliar"
            />
        </section>
    )
}

export default AvaliarProduto