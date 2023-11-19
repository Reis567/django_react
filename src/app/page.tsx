"use client"
import Lista from "@/components/lista/Lista";
import { Dialog, Paper } from "@mui/material";
import { Profissional } from "@/components/entidades/profissional";
import { useIndex } from "@/hooks/pages/useIndex";

export default function Home() {
  const { listaProfissionais } = useIndex();

  return (
    <div>
      <Lista profissionais={listaProfissionais}></Lista>
      <Dialog open={true} fullWidth PaperProps={{ sx: { padding: '48px' } }}>
        test
      </Dialog>
    </div>
  );
}
