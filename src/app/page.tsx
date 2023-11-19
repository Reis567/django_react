"use client"
import Lista from "@/components/lista/Lista";
import { Button, Dialog, DialogActions, Grid, TextField } from "@mui/material";
import { Profissional } from "@/components/entidades/profissional";
import { useIndex } from "@/hooks/pages/useIndex";

export default function Home() {
  const { listaProfissionais ,
          nome,
          setNome,
          email,
          setEmail,
          profissionalSelecionado,
          setProfissionalSelecionado} = useIndex();


  return (
    <div>
      <Lista 
      profissionais={listaProfissionais}
      onSelect={(profissional)=>setProfissionalSelecionado(profissional)}></Lista>
      <Dialog 
      open={profissionalSelecionado !==null} 
      fullWidth 
      PaperProps={{ sx: { padding: '48px' } }}
      onClose={()=>setProfissionalSelecionado(null)}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
          <TextField 
              label="Digite seu nome"
              type="text"
              fullWidth
              InputLabelProps={{ sx: { color: 'black' } }}
              onChange={(e)=>setNome(e.target.value)}
              value={nome}
            />
          </Grid>

          <Grid item xs={12}>
          <TextField 
              label="Digite seu email"
              type="email"
              fullWidth
              InputLabelProps={{ sx: { color: 'black' } }}
              onChange={(e)=>setEmail(e.target.value)}
              value={email}
            />
          </Grid>
        </Grid>
        <DialogActions sx={{padding: '48px'}}>
          <Button variant="outlined" onClick={()=>setProfissionalSelecionado(null)}>
            Cancelar
          </Button>
          <Button variant="outlined">
            Confirmar
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
