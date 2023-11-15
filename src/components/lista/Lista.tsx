"use client"
import React from 'react'
import styled from 'styled-components';
 
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
                      R$ 100,00 / HR
                    </Valor>
                    <Descricao>
                      Desenvolvedor web
                    </Descricao>
                </Infos>
              </ItemStyled>


              <ItemStyled>
                <Foto src='/imagens/renato.png'/>
                <Infos>
                    <Nome>
                      Renato dos reis
                    </Nome>

                    <Valor>
                    R$ 100,00 / HR
                    </Valor>
                    <Descricao>
                      Desenvolvedor web
                    </Descricao>
                </Infos>
              </ItemStyled>

              <ItemStyled>
                <Foto src='/imagens/renato.png'/>
                <Infos>
                    <Nome>
                      Renato dos reis
                    </Nome>

                    <Valor>
                    R$ 100,00 / HR
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