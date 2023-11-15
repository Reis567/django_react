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

const Title = styled.h1`
  color: #f7f2ee;
  font-size: 35px;
  text-align: center;
  display: flex;
  flex-direction: column;
`
const Sub = styled.a`
  color: #f7f2ee;
  font-size: 15px;
  cursor: pointer;
  padding: 10px;
  transition: 0.3s ease-in-out;
  &:hover {
    color: #131111;
    text-shadow: 1px 1px 10px  #f7f2ee45;
  }
`

const Cabecalho = () => {
  return (
      <Cont>
        <Title>
          Hire me
          <Sub href='https://github.com/Reis567' target='_blank'>
            By Reis567
          </Sub>
        </Title>
      </Cont>
  )
}

export default Cabecalho