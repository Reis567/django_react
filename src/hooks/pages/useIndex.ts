import { useState,useEffect} from "react"
import { Profissional } from "@/components/entidades/profissional"
import { ApiService } from "@/services/ApiService";

export function useIndex(){
    const [listaProfissionais, setListaProfissionais] = useState<Profissional[]>([]);

    const [nome , setNome]= useState("");
    const [email , setEmail]= useState("");
    const [profissionalSelecionado, setProfissionalSelecionado]= useState<Profissional| null>(null)

    const [mensagem, setMensagem]= useState('')

    useEffect(() => {
      ApiService.get('/profissionais')
        .then((response) => {
          setListaProfissionais(response.data);
        })
        .catch((error) => {
          console.error("Erro na chamada da API:", error);
        });
    }, []);
    useEffect(()=>{
      limparForm();
    },[profissionalSelecionado])

    function marcarJob(){
      if(profissionalSelecionado !== null){
        if(validarDados()){
          ApiService.post('/profissional/'
          + profissionalSelecionado.id 
          + '/job',{
            nome,
            email
          }).then(()=>{
            setProfissionalSelecionado(null)
            setMensagem('Marcou o job')
          }).catch((erro)=>{
            setMensagem(erro.respose?.data.message)
          });
        
        }else{
          setMensagem('Preencha corretamente todos os campos')
        }
      }
    }

    function validarDados(){
      return nome.length > 0  && email.length > 0 ;
    }
    function limparForm(){
      setNome('');
      setEmail('');
    }
    
    return {listaProfissionais,
              nome,
              setNome,
              email,
              setEmail,
              profissionalSelecionado,
              setProfissionalSelecionado,
              mensagem,
              setMensagem,
              marcarJob}
}