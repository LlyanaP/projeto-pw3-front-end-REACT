import style from './Select.module.css'

const Select = ({type, text, name, disabled, options= [], handleChangeCategory  }) => {
    return(
        <div className={style.select}>
            <label htmlFor={name}>{text}</label>

            <select name={name} id={name} disabled={disabled} onChange={handleChangeCategory}>
                <option>Selecione o nicho</option>

                {
                    Array.isArray(options) && options.map((option)=>{
                        //    console.log( option.cod_categoria_nicho + ' - ' + option.nome_categoria_nicho)
                        return<option value={option.cod_categoria_nicho} key={option.cod_categoria_nicho}>{option.nome_categoria_nicho}</option>
                    }) 
                }

                {/* <option>Cabelo</option>
                <option>SkinCare</option>
                <option>BodyCare</option>
                <option>Maquiagem</option> */}
            </select>
  
        </div>
    )
}

const SelectAvaliar = ({type, text,name, options= [], handleChangeAvalie }) => {
    return(
        <div className={style.select}>
            <label htmlFor={name}>{text}</label>
            <select name={name} id={name} onChange={handleChangeAvalie}>
                <option>Avalie o produto</option>

                {
                    Array.isArray(options) && options.map((option)=>{
                        // console.log( option.cod_avalie + ' - ' + option.nome_avalie)
                        return<option value={option.cod_avalie} key={option.cod_avalie}>{option.nome_avalie}</option>
                    }) 
                }


//                 {/* <option>💖💖💖💖💖</option>
//                 <option>💖💖💖💖</option> 
//                 <option>💖💖💖</option> 
//                 <option>💖💖</option> 
//                 <option>💖</option>      */}
//             </select>  
//         </div>
    )
}
export {Select, SelectAvaliar}