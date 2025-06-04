  //Class="Slider", Primera parte de JS
  //Esta funcion es dinamica, por lo que no importa cuantas testimonios haya, siempre se va a adaptar.

(function(){
  const sliders = [...document.querySelectorAll('.testimony_body')];
  /*document.querySelectorAll('.testimony_body') -> es la Lista de nodo. 
  al agregar [...] lo convierte en un array: Esto metodo selecciona todas las class="testimony_body"*/
    
  //Defino los botones
  const buttonNext = document.querySelector('#next'); //Boton siguiente -> seleccion el boton con el id="next"
  const buttonBefore = document.querySelector('#before'); //Boton anterior -> seleccion el boton con el id="before"

  let value; //Variable que guarda el valor del testimonio actual

  //Eventos de los botones
  buttonNext.addEventListener('click',()=>{
    changePosition(1); 
    //Cuando presiona click en el boton siguiente, llama a changePosition(1) y avanza ->
  })
      
  buttonBefore.addEventListener('click',()=>{
    changePosition(-1);
    //Cuando presiona click en el boton anterior, llama a changePosition(-1) y retrocede <-
  })

  const changePosition = (add) =>{ 
    const currentTestimony = document.querySelector('.testimony_body--show').dataset.id; 
    value = Number(currentTestimony);
    value+= add; 


    sliders[Number(currentTestimony)-1].classList.remove('testimony_body--show');
    if(value === sliders.length + 1 || value === 0){
      value = value === 0 ? sliders.length : 1 ;
    }

    sliders[value-1].classList.add('testimony_body--show'); 
  }    

  /*Esta funcion se ejecuta al cargar la pagina, crea un ambito aislado para las variables 
  y que no contaminen el ambito global.*/
})();


