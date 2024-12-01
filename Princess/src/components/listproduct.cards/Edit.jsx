import style from './Edit.module.css'
import { useState, useEffect } from 'react'
import {useParams, useNavigate} from 'react-router-dom'
import {Select, SelectAvaliar} from '../forms/Select'
import Button from '../forms/Button'
import Input from '../forms/Input'

const Edits = () => {
    const [cadastroAvaliacao, setCadastroAvaliacao] = useState({});

    const {cod_cadastro_avalia} = useParams();
   
    const navigate = useNavigate();

    const [nicho, setNicho] = useState([]);

    const[avalie, setAvalie] = useState([]);

    function handleChangeCategory(event) {
        setCadastroAvaliacao({...cadastroAvaliacao, cod_categoria_nicho: event.target.value});
        console.log(cadastroAvaliacao);
    }

    function handleChangeAvalie(event){
        setCadastroAvaliacao({...cadastroAvaliacao, cod_avalie: event.target.value});
        console.log(cadastroAvaliacao);
    }

    function handlerChangeCadProduto(event) {
        setCadastroAvaliacao({...cadastroAvaliacao, [event.target.name] : event.target.value});
        console.log(cadastroAvaliacao)
    }

    useEffect(()=>{
        fetch('http://localhost:5001/listagemDeNicho', {
            method:'GET',
            headers:{
                'Content-Type':'application/json',
                'Access-Control-Allow-Origin':'*',
                'Access-Control-Allow-Headers':'*'
            },
                }).then(
                        (resp)=>
                                resp.json()
                ).then(
                        (data)=>{
                        console.log("Dados de Nicho:", data)
                        setNicho(data.data);
                        }
                ).catch(
                        (error)=>{
                        console.log(error);
                        }
                )
        }, [])

    
    useEffect(()=>{
        fetch('http://localhost:5001/avalie',{
            method:'GET',
            headers:{
                'Content-Type':'application/json',
                'Acess-Control-Allow-Origin':'*',
                "Acess-Control-Allow-Headers":'*', 
            },
                }).then(
                        (resp)=>
                                resp.json()
                ).then(
                        (data)=>{
                        console.log("Dados avalia:", data)
                        setAvalie(data.data);
                        }
                ).catch(
                        (error)=>{
                        console.log(error);
                        }
                )
        }, [])


        useEffect(()=>{
            fetch(`http://localhost:5001/detalheList/${cod_cadastro_avalia}`, {
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
                    console.log('Avaliação: ' + data.data.cod_cadastro_avalia);
                    setCadastroAvaliacao(data.data);
                    console.log('Produto: ' + cadastroAvaliacao.produto);
            })
            .catch((err)=>{console.log(err)});
    }, []);  

    function Edit(cadastroAvaliacao) {
        
        console.log(JSON.stringify(cadastroAvaliacao))

        fetch('http://localhost:5001/editarAvaliacao', {
                method:'PUT',
                mode:'cors',
                headers:{
                'Content-Type':'application/json',
                'Access-Control-Allow-Origin':'*',
                'Access-Control-Allow-Headers':'*'
                },
                body: JSON.stringify(cadastroAvaliacao)
        })
        .then(
                (resp)=>resp.json()
        )
        .then(
                (data)=>{
                        console.log(data);
                        navigate('/listProduct',{state:'Sucesso!! Avaliação Alterada'});
                }
        )
        .catch(
                (err)=>{ console.log(err) }
        )
}
    function submit(event) {
        event.preventDefault();
        Edit(cadastroAvaliacao);
    }
    return (
        <section className={style.container}>
                
                <h1>MODIFICAR AVALIAÇÃO</h1>
                <form onSubmit={submit}>
                <Input
                    type="text"
                    name="produto"
                    placeHolder= "Digite o nome do seu produto"
                    text = "Nome do Produto"
                    handlerChangeCadProduto={handlerChangeCadProduto}
                    value={cadastroAvaliacao.produto}
                />
                <Input
                    type="text"
                    name="marca"
                    placeHolder= "Digite a marca do produto"
                    text = "Marca"
                    handlerChangeCadProduto={handlerChangeCadProduto}
                    value={cadastroAvaliacao.marca}
                />

                <Input
                    type="text"
                    name="ean"
                    placeHolder="EAN é um código de barras composto por 13 dígitos para identificar individualmente um objeto ou produto."
                    text="Digite o EAN do produto"
                    handlerChangeCadProduto={handlerChangeCadProduto}
                    value={cadastroAvaliacao.ean}
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
                    value={cadastroAvaliacao.utilizacaoCorreta}
                />
                <Input
                    type='text'
                    name='usoPessoal'
                    placeHolder='Maneira que foi utilizado por sua pessoa'
                    text='Utilização pessoal'
                    handlerChangeCadProduto={handlerChangeCadProduto}
                    value={cadastroAvaliacao.usoPessoal}
                />

                <Input
                    type="text"
                    name="dica"
                    placeHolder="Diferencial que você considera que melhorou sua experiencia"
                    text="Dica"
                    handlerChangeCadProduto={handlerChangeCadProduto}
                    value={cadastroAvaliacao.dica}
                />
                <SelectAvaliar
                    name="avalie_id"
                    text="Avalie o produto"
                    options={avalie}
                    handleChangeAvalie={handleChangeAvalie}
                />
                <h2>Obrigado!! Por Contribuir Com Sua Correção</h2>
                <Button
                    rotulo="Editar"
                />
            </form>    
        </section>
    )
} 
export default Edits