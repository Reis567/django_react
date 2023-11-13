import React from 'react'
import { CabecalhoCont, Logo } from './Cabecalho.style'


const Cabecalho = () => {
  return (
    <CabecalhoCont>
        <div>
            <Logo src = '/public/logo.png'/>

        </div>
    </CabecalhoCont>
  )
}

export default Cabecalho