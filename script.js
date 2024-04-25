let simbol = prompt('rock, paper or sciccors');
let against = '';
let random = (Math.random() * 9) / 3;
console.log(random);
if (Math.floor(random) === 1) {
  against = 'rock';
} else if (Math.floor(random) === 2) {
  against = 'paper';
} else if (Math.floor(random) === 0) {
  against = 'sciccors';
}
console.log(against);

function result(simbol) {
  if (against === simbol) {
    alert(`კომპიუტერმაც აირჩია ${against}, ფრეა`);
  } else if (against === 'rock' && simbol === 'paper') {
    alert(`კომპიუტერმა აირჩია ${against}, თქვენ დამარცხდით`);
  } else if (against === 'rock' && simbol === 'sciccors') {
    alert(`კომპიუტერმა ამოირჩია ${against}, თქვენ მოიგეთ`);
  } else if (against === 'paper' && simbol === 'rock') {
    alert(`კომპიუტერმა აირჩია ${against}, თქვენ დამარცხდით`);
  } else if (against === 'paper' && simbol === 'sciccors') {
    alert(`კომპიუტერმა ამოირჩია ${against}, თქვენ მოიგეთ`);
  } else if (against === 'sciccors' && simbol === 'paper') {
    alert(`კომპიუტერმა აირჩია ${against}, თქვენ დამარცხდით`);
  } else if (against === 'sciccors' && simbol === 'rock') {
    alert(`კომპიუტერმა ამოირჩია ${against}, თქვენ მოიგეთ`);
  }
}

let game = result(simbol);
