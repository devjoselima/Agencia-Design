import Card from '../Card'

import './style.css'

export default function SecaoExperienciaTrabalho(props){
    return(
        <section id="secaoExpDeTrab"
        className={props.TemaEscuro ? "secao-modo-escuro" : "secao-modo-claro"}>

            <div id="container-texto"
            className={props.TemaEscuro ? "container-texto-modo-escuro" : "container-texto-modo-claro"}>
                <h2>Experiências de Trabalho</h2>
                <p>Há mais de 10 anos no mercado de Branding, Design Gráfico, Criação de Sites e Marketing Digital, nos empenhamos diariamente para entregar resultados que tragam impacto aos nossos clientes</p>
            </div>

            <div className="container-cards limitar-secao">
                <Card                            
                 data="JUNHO 2012 - 2016"
                 titulo="Web Designer"
                 empresa="Pied Piper StartUp."
                 paragrafo="Criação de Landing pages, sites institucionais e E-commerces completamente personalizados e otimizados para buscadores"
                 TemaEscuro= {props.TemaEscuro}              
                />
                <Card                 
                 data="AGOSTO 2016 - 2019"
                 titulo="Product Designer"
                 empresa="E Corp."
                 paragrafo="Criação de modelos estratégicos de conversão identificando o cliente e mapeando toda a sua jornada de compra."
                 TemaEscuro= {props.TemaEscuro} 
                 />
                <Card                                
                 data="FEVEREIRO 2019 - 2021"
                 titulo="Digital Consulting"
                 empresa="Arasaka Inc."
                 paragrafo="Consultoria em estratégias digitais para todas as etapas do ciclo do projeto, desde a definição inicial até a execução."
                 TemaEscuro= {props.TemaEscuro} 
                 />
            </div>
        </section>
    )
}

