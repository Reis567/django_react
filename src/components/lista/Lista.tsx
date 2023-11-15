"use client"
import React from 'react'
import styled from 'styled-components';
import { Profissional } from '../entidades/profissional';
 
const ListStyled = styled.ul`
  width: 100%;
  padding: 20px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 10px;
`;

const ItemStyled = styled.li`
  padding: 20px;
  max-height: 80%;
  max-width: 80%;
`;

const Infos = styled.div`

`;

const Foto = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 20px;
`;

const Nome = styled.h3`
  margin: 16px 0 ;
`;
const Valor = styled.p`
  font-weight: bold;
  color: #131111;
`;

const Descricao = styled.p`
  word-break: break-word;
`;

const ListaVazia = styled.h3`
  text-align: center;
  padding: 10px;
  margin-top:30px;
  font-size:30px;
`
interface PropsLista {
  profissionais:Profissional[]
}
const Lista = (props:PropsLista) => {
  return (
    <div>
      {props.profissionais.length > 0 ? (
        <ListStyled>
          {props.profissionais.map(profissional => (
            <ItemStyled key={profissional.id}>
              <Foto src={profissional.foto}/>
              <Infos>
                <Nome>
                  {profissional.nome}
                </Nome>
                <Valor>
                  R$ {profissional.valor_hora.toLocaleString('pt-Br', {
                    minimumFractionDigits: 2,
                  })} / HR
                </Valor>
                <Descricao>
                  {profissional.descricao}
                </Descricao>
              </Infos>
            </ItemStyled>
          ))}
        </ListStyled>
      ) : (
        <ListaVazia>
          No momento não temos profissionais disponíveis ...
        </ListaVazia>
      )}
    </div>
  )
}


export default Lista