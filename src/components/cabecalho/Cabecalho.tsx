"use client"
import React from 'react'
import styled from 'styled-components';

const colors = {
  white: '#f7f2ee',
  black: '#131111',
  brown: '#341d08',
};
const Cont = styled.div`
  background: ${colors.brown};
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
    <div>
      <Cont>
        <Img src = '/imagens/logo.png'/>
      </Cont>
    </div>
  )
}

export default Cabecalho