import Logo from '../../Assets/logo.png'
import iconeLua from '../../assets/moon.png'
import iconeSol from '../../assets/sun.png'

import './style.css'

export default function Topo(props){
    return(
        <header className={props.TemaEscuro ? "topo-modo-escuro" : "topo-modo-claro "}>

            <img  className="logo" src={Logo} alt="Logomarca" />

            <button onClick={props.alterarTema} className={props.TemaEscuro ? "btn-modo-escuro" : "btn-modo-claro"}>

                <img className="iconesBtn" src={props.TemaEscuro ? iconeSol : iconeLua} alt="icone" />
            </button>
        </header>
    )
}

