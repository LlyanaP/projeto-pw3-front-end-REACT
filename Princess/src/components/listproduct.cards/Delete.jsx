import {React, useEffect} from 'react'
import { useParams, useNavigate } from 'react-router-dom'

function Delete(){
    const {cod_cadastro_avalia} = useParams();
    const navigate = useNavigate();

    useEffect(()=>{
        fetch(`http://localhost:5001/delete/${cod_cadastro_avalia}`, {
            method:'DELETE',
            mode:'cors',
            headers:{
                'Content-Type':'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': '*'
            },
        }).then(
            resp => resp.json()
        ).then(
            (data)=>{
                navigate('/listProduct',{state:'Avaliação Excluida com Sucesso'});
            }
        ).catch(
            err => console.log(err)
        );
    })
}
export default Delete