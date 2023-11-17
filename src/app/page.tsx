"use client"
import Lista from "@/components/lista/Lista"
import { Profissional } from "@/components/entidades/profissional"
import { useIndex} from "@/hooks/pages/useIndex"

export default function Home() {
  const {listaProfissionais} = useIndex();
  return (


    <div>
      <Lista profissionais={listaProfissionais}></Lista>
    </div>

  )
}
