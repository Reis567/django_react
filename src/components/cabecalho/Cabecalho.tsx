import React from 'react'
import styled from 'styled-components';

const Cont = styled.div`
  color: #333;
  padding: 10px;
  border: 3px solid #ddd;
`;
const Img = styled.img`
  border-radius:10px;
  max-height:80px;
  max-width:80px;
`;


const Cabecalho = () => {
  return (
    <div>
      <Cont>
        <Img src = '/imagens/logo.png'/>
      </Cont>
    </div>
  )
}

export default Cabecalho