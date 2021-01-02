function changecolor(){
//pega o conteúdo texto do objeto .fancy e separa cada caracter em um array com a função split.

var brightBx = document.getElementById("brightBx");
brightBx.classList.add('changecolor');
console.log ("passei aqui");

/* const text = document.querySelector(".changecolor"); 
const strText = text.textContent;
const splitText = strText.split("");
text.textContent = ""; //para tirar a duplicação que ocorre no textContent após o laço de adição da tag span pra cada letra


//laço para adição da tag span para cada letra da constante text
for (let i = 0; i < splitText.length; i++) 
{ text.innerHTML += "<span>" + splitText[i] + "</span>";   }

//Setando os intervalos para a animação executando a função da animação que adiciona a classe de efeito a cada tag span.

let char = 0;
let timer = setInterval(onTick, 5);

function onTick() {
    const span = text.querySelectorAll('span')[char];
    span.classList.add('color');
    char++
    //para fazer o loop parar
    if (char === splitText.length) {
        complete();
        return;
    }
    function complete()
    {
        clearInterval(timer);
        timer = null;
		
    }
} */
}


//FANCY

function fancy(){
//pega o conteúdo texto do objeto .fancy e separa cada caracter em um array com a função split.
const text = document.querySelector(".fancy"); 
const strText = text.textContent;
const splitText = strText.split("");
text.textContent = ""; //para tirar a duplicação que ocorre no textContent após o laço de adição da tag span pra cada letra


//laço para adição da tag span para cada letra da constante text
for (let i = 0; i < splitText.length; i++) 
{ text.innerHTML += "<span>" + splitText[i] + "</span>";   }

//Setando os intervalos para a animação executando a função da animação que adiciona a classe de efeito a cada tag span.

let char = 0;
let timer = setInterval(onTick, 50);
let animeTag = document.getElementById("animeTag")

function onTick() {
    const span = text.querySelectorAll('span')[char];
    span.classList.add('fade');
    char++
    //para fazer o loop parar
    if (char === splitText.length) {
        complete();
        return;
    }
    function complete()
    {
        clearInterval(timer);
        timer = null;
		
		setTimeout(function(){changecolor();}, 1000);
    }
}
}

//TYPED
 var options = 
      {
        stringsElement: '#typed-strings',
        typeSpeed: 80,
		backSpeed: 100,
		backDelay: 5000,
		startDelay: 4500,
		smartBackspace: false,
       onComplete: function() {
      var cursor = document.getElementsByClassName('typed-cursor')[0];
      
      setTimeout(function(){cursor.remove(); fancy()}, 2000);
      
        
        }};

var typed = new Typed('#typed', options);

        //Inicia o typed quando estiver no viewport
const callback = (entries, observer) => {

    entries.forEach(entry => {
       
        if (entry.isIntersecting == false)
        
        
        {
            typed.destroy()
        }
        else
        {
            typed.reset()
        };

      });
    };

let io = new IntersectionObserver(callback);


