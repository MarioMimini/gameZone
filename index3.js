var numberOfdrumButtons=document.querySelectorAll(".drum").length;

for(var i=0 ; i<numberOfdrumButtons ; i++){

  document.querySelectorAll(".drum")[i].addEventListener("click",function(){
 
  var buttonInnertHTML=this.innerHTML;


   makeSounds(buttonInnertHTML);
  
   buttonAnimation(buttonInnertHTML);
  });
}

  document.addEventListener("keypress",function(event){

    makeSounds(event.key);
    buttonAnimation(event.key);
  });

    function makeSounds (key){

   
    switch(key){

      case"w":
      var tom1 = new Audio("sounds1/tom-1.mp3");
      tom1.play();
      break;
  
      case "a" :
      var tom2= new Audio("sounds1/tom-2.mp3");
      tom2.play();
      break;
  
      case "s" :
      var tom3= new Audio("sounds1/tom-3.mp3");
      tom3.play();
      break;
  
      case "d" :
      var tom4= new Audio('sounds1/tom-4.mp3');
      tom4.play();
      break;
  
      case "j" :
      var tom5= new Audio('sounds1/snare.mp3');
      tom5.play();
      break;
  
      case "k" :
      var tom6= new Audio('sounds1/crash.mp3');
      tom6.play();
      break;
  
      case "l" :
      var tom7= new Audio('sounds1/kick-bass.mp3');
      tom7.play();
      break;
  
        default:console.log(buttonInnertHTML);
  
    }
  };

  function buttonAnimation (currentKey){
  
   var activeButton = document.querySelector("."+currentKey);
   activeButton.classList.add("pressed");

   setTimeout(function(){

    activeButton.classList.remove("pressed");
   },100);
  }
