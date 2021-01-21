
export function carrito() {    
  
      let divs = document.getElementById('contCarrito');
          
            if(divs.innerHTML == "") {
                $(".body-carrito").append(
                    ` <div class="vacio">
                    <i class="spk-cart"></i>
                    <p ><strong  class="f-body">Tu canasta está vacía</strong></p>
                    <p  class="f-caption-1">Te invitamos a volver a nuestras tiendas y agregar productos a tu canasta</p>
                    </div>
                    `);
            }
            else{
             
              
            }
       
        
     
     
}
