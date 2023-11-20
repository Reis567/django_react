"use client"
import React from 'react'
import { ListStyled ,Hr, ItemStyled, Foto, Infos, Nome, Valor, Descricao, ListaVazia, ButtonStyled } from './ListaStyle';
import { Button } from '@mui/material';
import { Profissional } from '../entidades/profissional';


interface PropsLista {
  profissionais:Profissional[],
  onSelect:(profissional:Profissional)=>void
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
                  <Descricao>
                    {profissional.descricao}
                  </Descricao>
                <Valor>
                  R$ {profissional.valor_hora.toLocaleString('pt-Br', {
                    minimumFractionDigits: 2,
                  })} / HR
                </Valor>
                <Hr />
                <ButtonStyled variant="outlined" onClick={()=>props.onSelect(profissional)}>Contratar</ButtonStyled>
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
