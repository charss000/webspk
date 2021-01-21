import { select_header } from './js/select';
import {buscar_header} from './js/search';
import {carrito} from './js/carrito';
import {autocompleta} from './js/autocompletado';
import {preloader} from './js/preloader';
import { muestraVentana } from './js/ventana';
import { carrucelVent } from './js/carrucel';
import {filtroGalery} from './js/galeriaFiltro';
import './assets/scss/style.scss';
//importar iconos
import '../node_modules/@fortawesome/fontawesome-free/css/all.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import './assets/css/themify-icons.css';
import './assets/css/iconspk.css';
//imgenes
import './assets/img/favicon.png'
//inicio-baner
import './assets/img/burguer.webp';
import './assets/img/fashion.webp';
import './assets/img/markets.webp';
import './assets/img/mrs.webp';
import './assets/img/pharmacy.webp';
import './assets/img/sports.webp';
//cargar contenido dinamico

preloader();
carrucelVent();
autocompleta();
select_header();
filtroGalery();
carrito();

var Url = window.location.pathname;
var page=Url.substr(6)

if (page ==='index.html'){
  buscar_header();

  muestraVentana();

}

