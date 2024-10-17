import React from 'react'

import style from './AvaliarProduto.module.css'

import Button from '../forms/Button'

import Input from '../forms/Input'

import {Select, SelectAvaliar} from '../forms/Select'

import { useEffect,useState } from 'react'



const AvaliarProduto = () => {

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
        <section className={style.avaliarProduto}>
             <h1>Avalie sua experiência</h1>
             <form onSubmit={submit}>

            <Input
                type="text"
                name="produto"
                placeHolder= "Nome do produto, ele nao pode ser mudado por aqui pois a pessoa escolheu um produto ja registrado"
                text = "Nome do Produto"
                readOnly
                handlerChangeCadProduto={handlerChangeCadProduto}

            />
            <Input
                type="text"
                name="marca"
                placeHolder= "Marca do produto ele nao pode ser mudado por aqui pois a pessoa escolheu um produto ja registrado"
                text = "Marca"
                readOnly
                handlerChangeCadProduto={handlerChangeCadProduto}
            />

            <Input
                    type="text"
                    name="ean"
                    placeHolder="EAN é um código de barras composto por 13 dígitos para identificar individualmente um objeto ou produto."
                    text="Digite o EAN do produto"
                    readOnly
                    handlerChangeCadProduto={handlerChangeCadProduto}
            />

            <Select
                name='Nicho'
                text='O Nicho deste produto ja foi cadastrado por isso esta desativado'
                disabled
                options={nicho} 
            />
            <Input
                type="text"
                name="utilizacaoCorreta"
                placeHolder="Como a industria indica utilizar este produto"
                text="Utilização da industria"
                readOnly
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
                options={nicho}
            />
            <h2>Faça parte das pessoas que avaliaram este produto</h2>
            <Button
                rotulo="Avaliar"
            />
            </form>
        </section>
    )
}
}

export default AvaliarProduto