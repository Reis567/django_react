"use client"
import styled from 'styled-components';
import Button from '@mui/material/Button';

export const Cont = styled.div`
  background:  #341d08;
  height:100px;
  display:flex;
  align-items:center;
  justify-content:space-evenly;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
`;

export const Title = styled.h1`
  color:#f7f2ee;
  font-size:35px;
`
export const NavList = styled.div`
  display:flex;
`
export const NavItem = styled.h5`
  padding: 10px;
  color:#f7f2ee;
  margin-inline:20px;
  font-size:18px;
  cursor: pointer;
`
export const NavBtns = styled.div`
  display:flex;
  margin-inline:10px;
  gap:30px;
`

export const StyledMuiButton = styled(Button)`
  border: 2px solid #f7f2ee; 
  padding-inline:20px;
  font-weight:bolder;
  font-size:15px;
`;

 