"use client"
import React from 'react'
import { ListStyled , ItemStyled, Foto, Infos, Nome, Valor, Descricao, ListaVazia } from './ListaStyle';
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
                <Valor>
                  R$ {profissional.valor_hora.toLocaleString('pt-Br', {
                    minimumFractionDigits: 2,
                  })} / HR
                </Valor>
                <Descricao>
                  {profissional.descricao}
                </Descricao>
                <Button variant="outlined" onClick={()=>props.onSelect(profissional)}>Contratar</Button>
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