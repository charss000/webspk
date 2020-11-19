// Mobile Menu Toggle Button JavaScript
  export function showalert(bus) {
   
   const xhttp=new XMLHttpRequest();
   xhttp.open('GET','assets/data/datos.json',true);
   xhttp.send();
   xhttp.onreadystatechange=function(){
     if(this.readyState == 4 && this.status == 200 ){
     //  console.log(this.responseText)
     let data =JSON.parse(this.responseText);
     //console.log(data);
     let buscar=bus;
     //let buscar =this.bus;
     for (let item of data)
     {
      if(item.namePage=== buscar){
          var url='page/'+item.namePage+'.html';
                $('.modal-body').load(url,function(){
          $('#exampleModal').modal({show:true});
          $(".modal-title").text(item.Title);
          
      });

        console.log(item.Title);
      
      }
        
      
     
     }
    }
   }
  }