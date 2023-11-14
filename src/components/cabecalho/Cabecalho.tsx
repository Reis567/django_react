"use client"
import React from 'react'
import styled from 'styled-components';

const Cont = styled.div`
  background:  #341d08;
  padding: 20px;
  display:flex;
  align-items:center;
  justify-content:center;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
`;

const Img = styled.img`
  border-radius:10px;
  max-height:80px;
  max-width:80px;
`;


const Cabecalho = () => {
  return (
      <Cont>
        <Img src = '/imagens/logo.png'/>
      </Cont>
  )
}

export default Cabecalho