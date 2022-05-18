const ecran = document.querySelector(".ecran"); //On recupere "l'ecran" du DOM
const touches = [...document.querySelectorAll(".btn")]; // on range les touches dans un tabaleau (plus simple a manipuler)
const listeKeycode = touches.map((touche) => touche.dataset.key); // on recupere la valeur des data key aux touches coresspondante
const history = document.querySelector('#history') 
let tab = [];
let trash = [];
let result = "";

const calculer = (valeur) => {
  while (listeKeycode.includes(valeur)) {
    if (valeur == "46") {
      ecran.textContent = " ";
    }
    if (valeur == "fact") {
      tempF = factorial(ecran.textContent);
      ecran.textContent = tempF;
      console.log(ecran.textContent);
    }

    if (valeur === "square") {
      let tempS = Math.sqrt(ecran.textContent);
      ecran.textContent = tempS;
    }
    if (valeur === "binary") {
      let tempB = Number(ecran.textContent).toString(2);
      ecran.textContent = tempB;
    }
    if (valeur === "hex") {
      let tempH = Number(ecran.textContent).toString(16);
      ecran.textContent = tempH;
    }

    if (valeur === "round") {
      let tempR = Math.round(ecran.textContent);
      ecran.textContent = tempR;
    } else if (valeur == "13") {
      result = eval(ecran.textContent);
      if (result == undefined) {
        trash.push(result);
        return false;
      }
      let temp = ecran.textContent;
      ecran.textContent = result;
      tab.push(temp + "=" + result);
    } else if (
      valeur != "46" &&
      valeur != "13" &&
      valeur != "82" &&
      valeur != "round" &&
      valeur != "square" &&
      valeur != "fact" &&
      valeur != "binary" &&
      valeur != "hex"
    ) {
      const indexKeycode = listeKeycode.indexOf(valeur);
      const touche = touches[indexKeycode];
      ecran.textContent += touche.innerHTML;
    }
    break;
  }
};

/* document.getElementById("history").addEventListener("click", (e) => {
  alert("vos précedents resultat : " + tab);
}); */

document.addEventListener("click", (e) => {
  const valeur = e.target.dataset.key;
  calculer(valeur);
});

/* document.addEventListener('keydown', (e) => {
    const valeur = e.keyCode.toString();
    calculer(valeur)

}) */

/* window.addEventListener("error", (e) => {
  alert("ERROR SYNTAX");
}); */

const factorial = (num) => {
  var x = num;
  while (x > 1) {
    num *= x - 1;
    x--;
  }
  return num;
};

history.addEventListener("click",function toggle(){
  const recap = document.querySelector('.recap')
  recap.style.visibility='visible'
})

//-----------------jQuery------------------------------

/* $('#history').click(function(e){
  $('.recap').css('visibility','visible')
}) */