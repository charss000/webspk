export function autocompleta() {
    function buscar(search2,matchLis2) {
        const search = search2;
  
    const matchList = matchLis2;
    matchList.style.display = "block";
    const searchStates =  async searchText =>{
        const res = await fetch ('./assets/data/states.json');
        const states = await res.json();
      //obtener los elementos ingresados
      let matches = states.filter(states => {
          const regex = new RegExp(`^${searchText}`,'gi');
          return states.name.match(regex) || states.abbr.match(regex);
      });
      if (searchText.length === 0){
          matches = [];
          matchList.innerHTML = '';
      }

      outputHtml(matches);
    };
    //mostrar resultados
    const outputHtml = matches => {
       if(matches.length > 0){
            const html = matches.map(match => `
       
            <div class="opciones2" id="opciones2">
					<a href="index.html" class="opcion">
						<div class="contenido-opcion">

							<div class="textos">
								<p class="store"> ${match.name} (${match.abbr})</p>

							</div>
						</div>
					</a>
				</div>
            `).join('');
            matchList.innerHTML = html;
           
       }
       
    };
    
  
    
      var Url = window.location.pathname;
      var page=Url.substr(6)
      
      if (page ==='index.html'){
       
        search.addEventListener('input',()=> searchStates(search.value))
 
   
      }
      
    
    
  
   
    
    }
    
   
    $("#search-input2").on("click", function() {
      const search = document.getElementById('search-input2');
      const matchList = document.getElementById('match-list');
      buscar(search,matchList);
      ocultar(matchList,search);
    
    });
    $("#search-header").on("click", function() {
      const search = document.getElementById('search-header');
      const matchList = document.getElementById('match-list2');
      buscar(search,matchList);
      ocultar(matchList,search);
    });
     
      function ocultar(matchList,search) {
        document.addEventListener("click", function(e){      
            matchList.innerHTML = '';
            search.value = "";
            });
      }
      
}