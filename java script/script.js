document.querySelector('h1').innerText='Subscribe';

const box= document.querySelector('.box');
box.style.backgroundColor='red';
box.style.width='100px';
box.style.height='100px';


document.getElementById('box').style.backgroundColor='blue';

const menuItem= document.querySelectorAll('a');
menuItem[1].style.color='green';
menuItem.forEach(function(i){
  i.style.color= 'red';
  i.style.fontsize='24px';
});

const cusclass= document.getElementsByClassName('nav-link');