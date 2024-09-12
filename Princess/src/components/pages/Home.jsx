import React from 'react'

import style from './Home.module.css'

const Home = () => {
    return(
        <section className={style.home}>
            <div className={style.border}>
            <h1>Bem vindo á </h1>
            <h2>PRINCESS</h2>
            <p>Sabemos como a rotina do autocuidado pode ser desafiadora</p>
            <p>Sua amiga Princess reúne avaliações de produtos e dicas de utilização</p>
            <p>Trazendo para você autoconfiança para manter sua rotina.</p>
            </div>
        </section>
    )
}

export default Home