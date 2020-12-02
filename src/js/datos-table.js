
  var requestURL2 =  './assets/data/producto.json';
  var request2 =   new XMLHttpRequest();
  request2.open('GET', requestURL2);
 request2.responseType = 'json';
 request2.send();
  
 export     function cargar_table(){
   
  var datajson2 =  request2.response;
  var datos = JSON.parse(JSON.stringify(datajson2));
  $(".datos-table > .cont-descripcion").html("")
  for (let i=0; i<datos.length;i++) {
      //for (let items of datos) {
       
     $(".datos-table").append(`<div class="fila${i} cont-descripcion">
     <div class="itemDes">${i+1} </div>
     <div class="itemDes">${datos[i].codProducto} </div>
     <div class="itemDes right"><i class="fas fa-dollar-sign icomTable"></i>  ${datos[i].PrecioDolar} </div>
     <div class="itemDes">
     <div class="tooltip-container">
     <i class="fas fa-low-vision ico-ver"  ></i>  
<span class="tooltip">
${datos[i].detalle}
</span>
</div>
    
    
   </span>
     </div>
     <div class="itemDes right"><i class="fas fa-dollar-sign icomTable"></i> ${datos[i].precioAlquiler} </div>
     <div class="itemDes">-</div>
     <div class="itemDes right"><i class="fas fa-dollar-sign icomTable"></i> ${datos[i].cps} </div>
     <div class="itemDes right"><i class="fas fa-dollar-sign icomTable"></i>${datos[i].hosting} </div>
     <div class="itemDes ">${datos[i].cantCp} </div>
     <div class="itemDes"><a href="#" class="link"  data-toggle="modal" data-target="#modal-a${i}"><i class="fas fa-search"></i></a> </div>
   </div>`);
   $('.cont_Aquiler').append(`<div class="modal fade" id="modal-a${i}" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
   <div class="modal-dialog " role="document">
     <div class="modal-content">
       <div class="modal-header">
         <h6 class="modal-title" id="exampleModalLabel">${datos[i].detalle}</h6>
         <button type="button" class="close" data-dismiss="modal" aria-label="Close">
           <span aria-hidden="true">&times;</span>
         </button>
       </div>
       <div class="modal-body">
         
       <div class="titulo-alquiler2">
       <div class="titulo-alquiler-header">
         <div class="titleitem">Prestaciones Tecnológicas mensuales</div>
         
         </div>
       <div class="titleitem">Alquiler Producto</div>
       <div class="titleitem">Soporte</div>
       <div class="titleitem">Administración y envio</div>
       <div class="titleitem">Alojamiento</div>
      </div>
      <div class="cont-alquiler-descripcion">
      <div class="itemDes right"><i class="fas fa-dollar-sign icomTable"></i> ${datos[i].precioAlquiler} </div>
     <div class="itemDes"><a href="#" class="link btn-page2"  data-toggle="modal" data-target="#modal-a${i}"><i class="fas fa-search"></i></a></div>
     <div class="itemDes right"><i class="fas fa-dollar-sign icomTable"></i> ${datos[i].cps} </div>
     <div class="itemDes right"><i class="fas fa-dollar-sign icomTable"></i>${datos[i].hosting} </div>
      </div>

       </div>
       <div class="modal-footer d-flex justify-content-between align-items-left">
         <button type="button" class="btn " data-dismiss="modal">Close</button>
       
       </div>
     </div>
   </div>
</div>`);
 
}

}   

 