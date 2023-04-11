import "../estilos/footer.css"

const Footer = () => {
    return (
    <>
       <footer class="seccion-oscura d-flex flex-column align-items-center justify-content-center">
       <img class="footer-logo" src={require("../imagenes/LOGO small.png")} alt="logo black eyed peas"></img>
       <p class="footer-texto text-center">LIVE IT UP! <br /> BE YOURSELF</p>
    <div class="iconos-redes-sociales d-flex flex-wrap align-items-center justify-content-center">
      
        <a href="https://www.facebook.com/blackeyedpeas" target="_blank" rel="noopener noreferrer">
            <i class="bi bi-facebook"></i>
        </a>
        <a href="https://www.blackeyedpeas.com/" target="_blank" rel="noopener noreferrer">
             <i class="bi bi-globe"></i>
        </a>
        <a href="https://twitter.com/bep" target="_blank" rel="noopener noreferrer">
            <i class="bi bi-twitter"></i>
        </a>
        <a href="https://www.instagram.com/blackeyedpeas" target="_blank" rel="noopener noreferrer">
            <i class="bi bi-instagram"></i>
        </a>
    </div> 
        
        
       <div class="derechos-autor">Creado por Germán Laulhé (2023) &#169;</div>
        </footer> 
    
    </>
)
};
 


export default Footer;