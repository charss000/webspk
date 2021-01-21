
export function buscar_header() {
$('.search-input').focus(function(){
    $(this).parent().addClass('focus');
  }).blur(function(){
    $(this).parent().removeClass('focus');
  })

    
 function habilitar_boton() {
  let $comment = document.getElementById("search-input2");
  var values = $comment.value;
    let val =0;
  if(values ==""){
    val++;
  }
  if(val==0){
    document.getElementById("btn-search").disabled=false;
    document.getElementById("btn-search1").disabled=false;
    
  }else{      
      document.getElementById("btn-search").disabled=true;
      document.getElementById("btn-search1").disabled=true;
     
   
  }
 }
  //El evento lo puedes reemplazar con keyup, keypress y el tiempo a tu necesidad
 
        document.getElementById("search-input2").addEventListener('keyup', habilitar_boton)
  
}