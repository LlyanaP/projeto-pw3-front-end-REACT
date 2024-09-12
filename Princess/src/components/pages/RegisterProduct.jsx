import React from "react";

import style from './Register.module.css'

import Button from '../forms/Button'

import Input from '../forms/Input'

import Select from '../forms/Select'

const RegisterProduct = () => {
    return(
        <section className={style.register}>
            <h1>Registre seu produto</h1>

                <Input>
                    type="text"
                    name="txt_produto"
                    placeHolder= "Digite o nome do seu produto"
                    text = "Nome do Produto"
                </Input>
                <Input>
                    type="text"
                    name="txt_marca"
                    placeHolder= "Digite a marca do produto"
                    text = "Marca"
                </Input>
                
                <Select>
                    name='Nicho'
                    text='Escolha o nicho do produto'
                </Select>
                <Button>
                    rotulo="Cadastrar e Avaliar Produto"
                </Button>
        </section>
    )
}

export default RegisterProduct