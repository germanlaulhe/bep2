import "../estilos/hero.css";


const Hero = () => { 
    return (
    <>  
        <div className="hero-image"> 
        
            <div className="hero-text">
                 <div className="input-group flex-nowrap">
                    
                    <input type="text" class="form-control" placeholder="Enter your search" aria-label="Username" aria-describedby="addon-wrapping"></input>
                    <button>Search</button>
                    
                 </div>
                 
            </div>
            <img className="img-fluid logo-bep" id="logo" src={require("../imagenes/88.png")} alt="logo BEP"></img>
            <div id="blacky"></div>
            <img className="img-fluid" id="separador" src={require("../imagenes/2.png")} alt="separador"></img>
            
        </div>
    </> 
) 
};

export default Hero;