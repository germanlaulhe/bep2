import "../estilos/lista.css"

function Lista2(props){
    return(
    
        <div class="columna col-12 col-md-6 col-xl-4">
                <img className="album-cover" alt={props.titulo} src={require(`../imagenes/${props.imagen}`)}></img>
                <p class="album-titulo">{props.titulo}</p>
                <p class="year">{props.discografica} {props.año}</p>
                <div class="budges-contenedor">  
                </div>
        </div>
        
    
    )
};

export default Lista2;