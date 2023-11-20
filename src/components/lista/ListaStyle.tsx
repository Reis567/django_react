"use client"
import { Button } from '@mui/material';
import styled from 'styled-components';


export const ListStyled = styled.ul`
  width: 100%;
  padding: 30px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 30px;
  `;

  export const Infos = styled.div`
  
  `;

  export const Hr = styled.hr`
    margin-top:20px;
    margin-bottom:10px;
  `
export const ItemStyled = styled.li`
  padding: 20px;
  border-radius:30px;
  height: 100%;
  width: 80%;
  background:#341d08;
  text-align:center;
  border:1px solid #f7f2ee;
  box-shadow:1px 1px 10px #341d08;
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:space-between;  
`;


export const Foto = styled.img`
  border-radius: 10%;
  width: auto;
  height: auto;
  max-width: 200px;
  max-height: 200px;
`;

export const Nome = styled.h3`
  font-size: 35px;
  color:#f7f2ee;
`;
export const Valor = styled.p`
  font-weight: bold;
  color:#f7f2ee;
  font-size:30px;
`;

export const Descricao = styled.p`
  word-break: break-word;
  margin-bottom:30px;
  color:#f7f2ee;
`;

export const ListaVazia = styled.h3`
  text-align: center;
  padding: 10px;
  margin-top:30px;
  font-size:30px;
`

export const ButtonStyled = styled(Button)`
  background: #f7f2ee;
  color:#341d08;
  border:1px solid transparent;
  &:hover{
    color: #f7f2ee;
    background:#341d08;
    border : 1px solid #f7f2ee;
  }
`