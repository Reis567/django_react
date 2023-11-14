"use client"
import React from 'react'
import styled from 'styled-components';
 
const ListStyled = styled.ul`
  
`;

const ItemStyled = styled.li`

`;

const Infos = styled.div`

`;

const Foto = styled.img`

`;

const Nome = styled.h3`
  
`;
const Valor = styled.p`
  
`;

const Descricao = styled.p`
  
`;

const Lista = () => {
  return (
        <ListStyled>
              <ItemStyled>
                <Foto src='/imagens/renato.png'/>
                <Infos>
                    <Nome>
                      Renato dos reis
                    </Nome>

                    <Valor>
                      R$ 100,00
                    </Valor>
                    <Descricao>
                      Desenvolvedor web
                    </Descricao>
                </Infos>
              </ItemStyled>
        </ListStyled>
  )
}

export default Lista