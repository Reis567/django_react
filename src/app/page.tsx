"use client"
import Lista from "@/components/lista/Lista";
import { Button, Dialog, DialogActions, Grid, TextField } from "@mui/material";
import { Profissional } from "@/components/entidades/profissional";
import { useIndex } from "@/hooks/pages/useIndex";

export default function Home() {
  const { listaProfissionais } = useIndex();

  return (
    <div>
      <Lista profissionais={listaProfissionais}></Lista>
      <Dialog open={true} fullWidth PaperProps={{ sx: { padding: '48px' } }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
          <TextField 
              label="Digite seu nome"
              type="text"
              fullWidth
              InputLabelProps={{ sx: { color: 'black' } }}
            />
          </Grid>

          <Grid item xs={12}>
          <TextField 
              label="Digite seu email"
              type="email"
              fullWidth
              InputLabelProps={{ sx: { color: 'black' } }}
            />
          </Grid>
        </Grid>
      </Dialog>
    </div>
  );
}
