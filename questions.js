
(function(){
   const titleQuestion = [...document.querySelectorAll('.questions_title')];

   console.log(titleQuestion);
   
    titleQuestion.forEach(question =>{
        question.addEventListener('click', () => {

           let height = 0;
           let answer = question.nextElementSibling;
           let addPadding = question.parentElement.parentElement;

           addPadding.classList.toggle('questions_padding--add');
           //Entra la clase questions--padding

           question.children[0].classList.toggle('questions_arrow--rotate');
           if (answer.clientHeight === 0){
             height = answer.scrollHeight; //Nos da el alto minimo
           }

           answer.style.height = `${height}px`;

           //Entra la clase questions--padding
        })
    
    })
})();
