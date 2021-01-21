export function muestraVentana() {
 
 var btnGo = document.getElementById('btnModal');
 
 btnGo.addEventListener("click", logFetch, false);

 async function logFetch() {
   try {
    var title=this.title;
    var url = this.rel; 
   fetch(url).then (Response => {
      return Response.text();
  }).then(
    function (data) {
    
    $('#mainmodal').modal('show');
    $(' #mainmodal > .modal-dialog > .modal-content> .modal-header > .modal-title' ).text(title)
     document.querySelector('#mainmodal > .modal-dialog > .modal-content > .cont-modal').innerHTML =data;
    }
  )
   } catch (err) {
     console.log('fetch failed', err.message);
   }
 }
 
 
}
