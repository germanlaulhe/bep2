import React from "react";
import "../estilos/lista.css"
import Lista2 from "./listaprops";



const Lista = () =>{

    return(
        <>
    <section class="experiencia seccion-clara">
    <div class="container text-center">
        <div id="titulo-int">
               <h4 id="texto-discografia">Discografía</h4>
               
        </div>
        <div class="row" id="fecha">
        <Lista2 
              titulo="Behind the front"
              año="(1998)"
              discografica="Interscope Records" 
              imagen="BehindTheFrontAlbum.png"   
           />  
           <Lista2 
              titulo="Bridging the gap"
              año="(2000)"
              discografica="Interscope Records" 
              imagen="Bridging.jpg"   
           /> 
           <Lista2 
              titulo="Elephunk"
              año="(2003)"
              discografica="A&M Records" 
              imagen="Elephunk.jpg"   
           />  
            <Lista2 
              titulo="Monkey business"
              año="(2005)"
              discografica="Interscope Records" 
              imagen="Monkey_Business.png"   
           /> 
              <Lista2 
              titulo="The E.N.D."
              año="(2009)"
              discografica="Interscope Records" 
              imagen="The_E.N.D._cover.png"   
           /> 
            <Lista2 
              titulo="The beginning"
              año="(2010)"
              discografica="Interscope Records" 
              imagen="The_Beginning_(The_Black_Eyed_Peas_album).jpg"   
           /> 
            <Lista2 
              titulo="Masters of the sun (Vol.1)"
              año="(2018)"
              discografica="Interscope Records" 
              imagen="Masters_of_the_Sun_Vol._1.jpg"   
           /> 
            <Lista2 
              titulo="Translation"
              año="(2020)"
              discografica="Epic Records" 
              imagen="Black_Eyed_Peas_-_Translation.png"   
           />  
           
            
           
          
           
     

        
        </div>

    </div>
    </section>
    </>
)
};

    
export default Lista;