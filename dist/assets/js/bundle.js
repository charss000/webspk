(()=>{"use strict";const t=document.querySelector("#select"),e=document.querySelector("#opciones"),n=document.querySelector("#select .store"),a=document.querySelector("#inputSelect");$(window).on("load",(function(){$("#preloader-active").delay(450).fadeOut("slow"),$("body").delay(450).css({overflow:"visible"})})),$(".owl-carousel").owlCarousel({loop:!0,nav:!0,navText:['<i class="fas fa-angle-left"></i>','<i class="fas fa-angle-right"></i>'],autoplay:!0,autoplayTimeout:1e3,autoplayHoverPause:!0,margin:15,responsive:{0:{items:1},768:{items:1},992:{items:2},1200:{items:3}}}),function(){function t(t,e){const n=t,a=e;a.style.display="block";"index.html"===window.location.pathname.substr(6)&&n.addEventListener("input",(()=>(async t=>{const e=await fetch("./assets/data/states.json");let n=(await e.json()).filter((e=>{const n=new RegExp("^"+t,"gi");return e.name.match(n)||e.abbr.match(n)}));0===t.length&&(n=[],a.innerHTML=""),(t=>{if(t.length>0){const e=t.map((t=>`\n       \n            <div class="opciones2" id="opciones2">\n\t\t\t\t\t<a href="index.html" class="opcion">\n\t\t\t\t\t\t<div class="contenido-opcion">\n\n\t\t\t\t\t\t\t<div class="textos">\n\t\t\t\t\t\t\t\t<p class="store"> ${t.name} (${t.abbr})</p>\n\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</a>\n\t\t\t\t</div>\n            `)).join("");a.innerHTML=e}})(n)})(n.value)))}function e(t,e){document.addEventListener("click",(function(n){t.innerHTML="",e.value=""}))}$("#search-input2").on("click",(function(){const n=document.getElementById("search-input2"),a=document.getElementById("match-list");t(n,a),e(a,n)})),$("#search-header").on("click",(function(){const n=document.getElementById("search-header"),a=document.getElementById("match-list2");t(n,a),e(a,n)}))}(),document.querySelectorAll("#opciones > .opcion").forEach((o=>{o.addEventListener("click",(o=>{o.preventDefault(),n.innerHTML=o.currentTarget.innerHTML,t.classList.toggle("active"),e.classList.toggle("active"),a.value=o.currentTarget.querySelector(".store").innerText}))})),t.addEventListener("click",(()=>{t.classList.toggle("active"),e.classList.toggle("active")})),$(".list").click((function(){const t=$(this).attr("data-filter");"All"==t?$(".itembox").show("1000"):($(".itembox").not("."+t).hide("1000"),$(".itembox").filter("."+t).show("1000"))})),$(".list").click((function(){$(this).addClass("active").siblings().removeClass("active")})),""==document.getElementById("contCarrito").innerHTML&&$(".body-carrito").append(' <div class="vacio">\n                    <i class="spk-cart"></i>\n                    <p ><strong  class="f-body">Tu canasta está vacía</strong></p>\n                    <p  class="f-caption-1">Te invitamos a volver a nuestras tiendas y agregar productos a tu canasta</p>\n                    </div>\n                    '),"index.html"===window.location.pathname.substr(6)&&($(".search-input").focus((function(){$(this).parent().addClass("focus")})).blur((function(){$(this).parent().removeClass("focus")})),document.getElementById("search-input2").addEventListener("keyup",(function(){let t=0;""==document.getElementById("search-input2").value&&t++,0==t?(document.getElementById("btn-search").disabled=!1,document.getElementById("btn-search1").disabled=!1):(document.getElementById("btn-search").disabled=!0,document.getElementById("btn-search1").disabled=!0)})),document.getElementById("btnModal").addEventListener("click",(async function(){try{var t=this.title,e=this.rel;fetch(e).then((t=>t.text())).then((function(e){$("#mainmodal").modal("show"),$(" #mainmodal > .modal-dialog > .modal-content> .modal-header > .modal-title").text(t),document.querySelector("#mainmodal > .modal-dialog > .modal-content > .cont-modal").innerHTML=e}))}catch(t){console.log("fetch failed",t.message)}}),!1))})();