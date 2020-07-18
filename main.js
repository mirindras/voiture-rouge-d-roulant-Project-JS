/*
When I click on "tourner", The box Turn

*/
var maVoiture = document.querySelector('.voiture');
let positionInitiale = maVoiture.style.left;
let positionInitiale2 = maVoiture.style.top;
console.log('Voiture style: ', maVoiture.style);


function faireBouger(direction, rotation) {
  //console.error('============================');
  console.log('Rotation', rotation);
  console.log('Direction >>>>>', direction);
  console.log('Position initiale >>>>>', positionInitiale);
  positionInitiale = +positionInitiale + direction;

  console.log('Nouvelle position >>>>>', positionInitiale);
  if(direction){
    document.querySelector('.voiture').style.left = positionInitiale + 'px';
    document.querySelector('.voiture').style.transition= "all 1s ease";
  } else{
    
    var voit = document.querySelector('.voiture');
    var t = voit.style.transform.match(/(\d+)/g) || [0];  // on met ||[0) pour le 1st passage
    var val = ( t[0] *1 +36) % 360;                      // incrémentation de 40
    voit.style.transform = 'rotate(' +val +'deg)';
    document.querySelector('.voiture').style.transition= "all 1s ease";
  } 
}

function faireHaut(dir, norm){
  positionInitiale2 = +positionInitiale2 + dir;
  document.querySelector('.voiture').style.top = positionInitiale2 + 'px';
  if (dir){
  document.querySelector('.voiture').style.transition= "all 1s ease";
  } else{
  var voit = document.querySelector('.voiture');
  var t = voit.style.transform.match(/(\d+)/g) || [0];  // on met ||[0) pour le 1st passage
  var val = ( t[0] *1 +(360 -36)) % 360;                      // incrémentation de 40
  voit.style.transform = 'rotate(' +val +'deg)';  }
}
