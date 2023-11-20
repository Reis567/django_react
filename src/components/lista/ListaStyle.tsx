"use client"
import styled from 'styled-components';


export const ListStyled = styled.ul`
  width: 100%;
  padding: 20px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 10px;
`;

export const ItemStyled = styled.li`
  padding: 20px;
  max-height: 50%;
  max-width: 50%;
  
`;

export const Infos = styled.div`

`;

export const Foto = styled.img`
  width: 100%;
  height: 100%;
  max-height:300px;
  max-width:300px;
  border-radius: 20px;
  width: auto;
  height: auto;
  
`;

export const Nome = styled.h3`
  margin: 16px 0 ;
`;
export const Valor = styled.p`
  font-weight: bold;
  color: #131111;
`;

export const Descricao = styled.p`
  word-break: break-word;
  margin-bottom:30px;
`;

export const ListaVazia = styled.h3`
  text-align: center;
  padding: 10px;
  margin-top:30px;
  font-size:30px;
`