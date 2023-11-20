import React from 'react'
import styled from 'styled-components';
import { Cont, Title, Sub } from './CabecalhoStyle';

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