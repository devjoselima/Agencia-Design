import { useState } from 'react';
import Topo from './Components/Topo/'
import SecaoBanner from './Components/SecaoBanner/'
import SecaoExperienciaTrabalho from './Components/SecaoExperienciaTrabalho/'
import Rodape from './Components/Rodape/'

import './App.css';

export default function App() {
  const [TemaEscuro, setTemaEscuro] = useState(true)

  const alterarTema = () => {
    setTemaEscuro(!TemaEscuro)
  }

  return (
    <main>
        <Topo alterarTema={alterarTema} TemaEscuro={TemaEscuro}/>
        <SecaoBanner TemaEscuro={TemaEscuro} />
        <SecaoExperienciaTrabalho TemaEscuro={TemaEscuro} />
        <Rodape TemaEscuro={TemaEscuro} />
    </main>
  );
}