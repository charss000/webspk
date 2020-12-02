
import { muestraVentana } from './js/ventana';
import { cargar_table } from './js/datos-table';
import './assets/scss/style.scss';
import './assets/img/favicon.png' ;
//import './assets/img/logo/logo-07.png';
//slider
import './assets/img/slider/1.jpg' ;
import './assets/img/slider/2.jpg';
import './assets/img/slider/3.jpg';

//find slider
//page comercial
import './assets/img/soluciones/comercial.jpg';

//fin de comercial
import './assets/img/soluciones/facturador.jpg';
import './assets/img/soluciones/hoteleria.jpg';
import './assets/img/soluciones/restobar.jpg';
import './assets/img/soluciones/transporte.jpg';
import './assets/img/formulario/login.jpg';
import './assets/img/formulario/registro.jpg';
import './assets/img/carrusel/pio.png';
import './assets/img/carrusel/apache.png';
import './assets/img/carrusel/balcones.png';
import './assets/img/carrusel/archi.png';
import './assets/img/carrusel/one.png';
import './assets/img/carrusel/2p.png';
import './assets/img/carrusel/elift.png';
import './assets/img/carrusel/selva.png';
import './assets/img/shape/footer_bg.png';
//quienes somos
import './assets/img/quienes_somos/vision.jpg';
import './assets/img/quienes_somos/compromiso.jpg';
import './assets/img/quienes_somos/equipo.jpg';
import './assets/img/quienes_somos/innovacion.jpg';
import './assets/img/quienes_somos/integridad.jpg';
import './assets/img/quienes_somos/mision.jpg';
import './assets/img/quienes_somos/transparencia.jpg';
//importar iconos
import './assets/css/fontawesome-all.min.css';
import './assets/css/themify-icons.css';
//footer
import './assets/img/certificado.png';


//cargar contenido dinamico
    $(".btn-page").click(function() {
        var bus= $(this).attr("pagina");
        var modal= $(this).attr("modal");
        muestraVentana(bus,modal);
      });
      $(".cargatable").click(  function() {
       cargar_table();
      });
     

      function load() {
        var Url = window.location.pathname;
        var page=Url.substr(6)
        
        if (page ==='productos.html'){
          location.href ="productos.html?#";
          cargar_table();
   
     
        }
        
      
      }
      window.onload = load;
 
     
    


