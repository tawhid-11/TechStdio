// Add text inside tags
let headTitle= document.querySelector('h1');
//  headTitle.innerText= 'Hello Tawhid';
headTitle.innerText= headTitle.innerText + 'Mister';

// Change text
let boxes= document.querySelectorAll('.box');
boxes[0].innerText = 'New text';
boxes[1].innerText = 'New Product';
boxes[2].innerText = 'New Prize';

let newNum= 1
for(box of boxes){
  box.innerText =`Box No ${newNum}`; newNum ++;
}