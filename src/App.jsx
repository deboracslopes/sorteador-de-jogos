import { useState } from 'react'
import './App.css'
import Joguinho from './components/Joguinho';

function App() {
   const[times,setTimes] = useState(
    [
    "Al Moçar",
    "Apend City",
    "Ah Tá Anta",
    "Atlético Maneiro",
    "Baile de Munique",
    "Barcelusa",
    "Bar Sem Lona",
    "Chelsicha",
    "CR Flamingo",
    "Cuiabayern",
    "Falso Madrid",
    "Horriver Plate",
    "Inter de Limão",
    "Jumentus",
    "Lazionados",
    "Malfica",
    "Meia Boca Junior",
    "Paysanduba",
    "Real Madruga",
    "Real Matismo"
] );
    const[jogos,setJogos] = useState([
      // {
      //   id: 0,
      //   time1: "Loka Juniors",
      //   time2: "Vaso da Grama",
      // },
      // {
      //   id: 1,
      //   time1: "GPT FC",
      //   time2: "EC Gemini",
      // },
    ])

    function sortearJogo(){
      let copiaTimes = [...times];

      let n1 = Math.floor(Math.random()*copiaTimes.length);
      let t1 = copiaTimes[n1];
      copiaTimes.splice(n1, 1);

      let n2 = Math.floor(Math.random()*copiaTimes.length);
      let t2 = copiaTimes[n2];
      copiaTimes.splice(n2, 1);

      let novoJogo = {
        id: Date.now(),
        time1: t1,
        time2: t2,
      }

      setJogos([novoJogo, ...jogos])
      setTimes([...copiaTimes])

      // console.log(copiaTimes);
    }
  return (
     <div className="cont-app">
        <h1>Copa do Mundo Cringe</h1>

           <hr />
             {times.length > 0 && <button onClick={sortearJogo}>Sortear Jogos</button>}
        
           <hr />

        <br />
        <br />

      {/* <Joguinho /> */}
      <h2>Jogos da Primeira Rodada</h2>
      <div className="primera-rodada">
        {jogos.map((jogo) => (
         <Joguinho key={jogo.id} j={jogo} />
        ))}

         <ul className="lista-times">
          {times.map( (time) => (
            <li key={time}>{time}</li>
          ))}
        </ul>
      </div>
     </div>
  )
}

export default App
