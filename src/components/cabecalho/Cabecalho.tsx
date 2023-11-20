import React from 'react'
import styled from 'styled-components';
import { Cont, Title, NavList, NavItem, NavBtns,StyledMuiButton} from './CabecalhoStyle';
import { Button } from '@mui/material';

const Cabecalho = () => {
  return (
      <Cont>
        <Title>
          HireMe
        </Title>
        <NavList>
          <NavItem>
            Home
          </NavItem>

          <NavItem>
            Perfil
          </NavItem>

          <NavItem>
            Seja um Profissional
          </NavItem>

        </NavList>
        <NavBtns>
          <StyledMuiButton>
            Login
          </StyledMuiButton>

          <StyledMuiButton>
            Register
          </StyledMuiButton>
        </NavBtns>

      </Cont>
  )
} 
export default Cabecalho