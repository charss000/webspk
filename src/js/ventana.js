//import {cargar_table} from './datos-table'
var requestURL = 'assets/data/datos.json';
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();


var url;
var titulopage;
export function muestraVentana(bus, modal) {
  var datajson = request.response;

  var data = JSON.parse(JSON.stringify(datajson));
  let buscar = bus;
  let ven = '#' + modal;
 
  for (let item of data) {

    if (item.namePage === buscar ) {
       url = 'page/' + item.namePage + '.html';
      titulopage=item.Title;
      cargarDatosVentana(url,titulopage) 
     
    }
  
   
   
  }
 function cargarDatosVentana(url,titulopage){
  if(buscar ==='listaprecios'){
    $('.cont-modal').load(url, function () {
      $(ven).modal({ show: true });
      $(ven + " > .modal-dialog > .modal-content> .modal-header > .modal-title").text(titulopage)
    
      //cargar_table();
    
     }); 

   
  }else
  {
    $('.cont-modal').load(url, function () {
      $(ven).modal({ show: true });
      $(ven + " > .modal-dialog > .modal-content> .modal-header > .modal-title").text(titulopage)  
    
     });
  }
  
 
}
  
 


}

