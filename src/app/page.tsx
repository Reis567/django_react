"use client"
import Lista from "@/components/lista/Lista"
import { Profissional } from "@/components/entidades/profissional"

export default function Home() {
  const profissionais:Profissional[] = [
    {
      id:1,
      nome:'Renato dos reis',
      descricao:'Desenvolvedor web',
      valor_hora:100,
      foto:'https://scontent.fsdu35-1.fna.fbcdn.net/v/t39.30808-6/396851929_708918197926315_4226074080838981555_n.jpg?stp=cp6_dst-jpg_p526x296&_nc_cat=103&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeGDGdQZKKo0EQyDUyIqd3_xBpFQGUW-B30GkVAZRb4HfYl7M2EfjL5O_fp3F-n5Ry9YA3PhgcMMBM8PywYcioBo&_nc_ohc=YWAINT30O5gAX_QqKxk&_nc_ht=scontent.fsdu35-1.fna&cb_e2o_trans=q&oh=00_AfAJzcSY6FnKB1HSa6vbLRe4JC7wTxJJDAnMNi_W01vK4w&oe=6558B3E7',
    },
    {
      id:2,
      nome:'Larissa dos reis',
      descricao:'Desenvolvedora web',
      valor_hora:80,
      foto:'https://pbs.twimg.com/media/EpZDDRuXcAAWWz9.jpg',
    },
    {
      id:3,
      nome:'Renato dos reis',
      descricao:'Desenvolvedor web',
      valor_hora:100,
      foto:'https://scontent.fsdu35-1.fna.fbcdn.net/v/t39.30808-6/396851929_708918197926315_4226074080838981555_n.jpg?stp=cp6_dst-jpg_p526x296&_nc_cat=103&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeGDGdQZKKo0EQyDUyIqd3_xBpFQGUW-B30GkVAZRb4HfYl7M2EfjL5O_fp3F-n5Ry9YA3PhgcMMBM8PywYcioBo&_nc_ohc=YWAINT30O5gAX_QqKxk&_nc_ht=scontent.fsdu35-1.fna&cb_e2o_trans=q&oh=00_AfAJzcSY6FnKB1HSa6vbLRe4JC7wTxJJDAnMNi_W01vK4w&oe=6558B3E7',
    },
    {
      id:4,
      nome:'Larissa dos reis',
      descricao:'Desenvolvedora web',
      valor_hora:80,
      foto:'https://pbs.twimg.com/media/EpZDDRuXcAAWWz9.jpg',
    },
  ]
  return (


    <div>
      <Lista></Lista>
    </div>

  )
}
