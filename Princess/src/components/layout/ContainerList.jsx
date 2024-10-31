import React from 'react'

import style from '../layout/ContainerList.module.css'
const ContainerList = (props) => {
    return (
        <div className={style.container_list}>
            {props.children}
        </div>
    )
}

export default ContainerList
