//INTERSECTIONOBSERVER
/* function toggleMenu(){
	let callback = function(entries) 
	{

     entries.forEach(entry => 
		{
		console.log(entry.isIntersecting);
		let menuItems = document.querySelector(".menu-items")
		let acenderMenu = document.querySelector(".header")
		if (entry.isIntersecting == false)
			{
				acenderMenu.classList.add('acender');
				menuItems.classList.toggle('lightOn');
				console.log("tafufando");
			}
			else
			{
			//	menuItems.classList.add('lightOn')
				acenderMenu.classList.remove('acender');
			}
		})
    };
	
	
let options =
{	
   root: null,
  rootMargin: "0px 0px 0px 0px",
  threshold: 0.1 
};


let io = new IntersectionObserver(callback, options);

io.observe(document.querySelector('#brightBx'));
} */

//FAZ O MENU ACENDER

function brightMenu() {
	
	
	var brightMenu = document.querySelector("ul.menu-items");
	console.log (brightMenu);
	brightMenu.classList.toggle('lightOn');
 	console.log (brightMenu);
}

function changecolor(){
//pega o conteúdo texto do objeto .fancy e separa cada caracter em um array com a função split.

var brightBx = document.getElementById("brightBx");
brightBx.classList.add('changecolor');


setTimeout(function(){brightMenu();}, 1000);

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
		
		setTimeout(function(){changecolor();}, 800);
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
		startDelay: 7000,
		smartBackspace: false,
       onComplete: function() {
    /*  let cursor = document.getElementsByClassName('typed-cursor')[0];
      console.log(cursor); */
      setTimeout(function(){/*cursor.style.visibility = "hidden";*/ fancy()}, 3000);
      
        
        }};

var typed = new Typed('#typed', options);

        //Inicia o typed quando estiver no viewport
const callback = (entries, observer) => {

    entries.forEach(entry => {
       let menuItems = document.querySelector(".menu-items")
		let acenderMenu = document.querySelector(".header")
		let portifolio = document.querySelector(".logo")
        if (entry.isIntersecting == false)              
        {
			acenderMenu.classList.add('acender');
		console.log(portifolio);
		portifolio.innerHTML = "Ébano Assumpção";
        }
        else
        {
			
			portifolio.innerHTML = "Portifolio";
			acenderMenu.classList.remove('acender');
        };

      });
    };

let io = new IntersectionObserver(callback);
io.observe(document.querySelector('#brightBx'));
//toggleMenu();

// SLICEBOX

$(function() {
				
				var Page = (function() {

					var $navArrows = $( '#nav-arrows' ).hide(),
						$navOptions = $( '#nav-options' ).hide(),
						$shadow = $( '#shadow' ).hide(),
						slicebox = $( '#sb-slider' ).slicebox( {
							onReady : function() {

								$navArrows.show();
								$navOptions.show();
								$shadow.show();

							},
							orientation : 'r',
							cuboidsRandom : true,
							disperseFactor : 30
						} ),
						
						init = function() {

							initEvents();
							
						},
						initEvents = function() {

							// add navigation events
							$navArrows.children( ':first' ).on( 'click', function() {

								slicebox.next();
								return false;

							} );

							$navArrows.children( ':last' ).on( 'click', function() {
								
								slicebox.previous();
								return false;

							} );
							
						

						};

						return { init : init };

				})();

				Page.init();

			});
