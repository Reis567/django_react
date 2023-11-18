import { useState,useEffect} from "react"
import { Profissional } from "@/components/entidades/profissional"
import { ApiService } from "@/services/ApiService";

export function useIndex(){
    const [listaProfissionais, setListaProfissionais] = useState<Profissional[]>([]);

    useEffect(() => {
      ApiService.get('/profissionais')
        .then((response) => {
          setListaProfissionais(response.data);
        })
        .catch((error) => {
          console.error("Erro na chamada da API:", error);
        });
    }, []);
    
    return {listaProfissionais}
}