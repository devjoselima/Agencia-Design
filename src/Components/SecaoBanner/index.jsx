import './style.css'

export default function SecaoBanner(props){
    return(
        <section id="secaoBanner">

            <div id="imagemDeFundo"
            className={props.TemaEscuro ? "fundo-modo-escuro" : "fundo-modo-claro"}></div>

            <div className={props.TemaEscuro ? "texto-secaoBanner-escuro" : "texto-secaoBanner-claro"} >

                <p>BRANDING / UI / UX / TECNOLOGIA</p>
                <h2>Agência de Branding</h2>
                <span>e design digital</span>

            </div>
        </section>
    )
}