import React from 'react';
import './style.css';

export default function Card(props){
    return(
        <section className={"card"}>
            <div className="card-conteudo">
                <p className={props.TemaEscuro ? 'dark-paragrafo' : 'light-paragrafo'}>{props.data}</p>
                <h3 className={props.TemaEscuro ? 'dark-titulo' : 'light-titulo'}>{props.titulo}</h3>
                <p className={props.TemaEscuro ? 'dark-paragrafo' : 'light-paragrafo'}>{props.empresa}</p>
                <p className={props.TemaEscuro ? 'dark-paragrafo' : 'light-paragrafo'}>{props.paragrafo}</p>
            </div>
        </section>
    );
}