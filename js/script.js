var strings = [];
let btn = document.querySelector('.js-btn');
let input = document.querySelector('.js-input');
let wrapper = document.querySelector('.js-wrapper');
let jsSum = document.querySelector('.js-sum');
let deleteBtn = document.querySelector('.deleteBtn');

function addNumber(number){
   strings.push(number);
}

function sum(array){
   var result = 0;
   for(let i = 0; i < array.length; i++){
      result += array[i];
   };
   return result;
}

function render(){
   let html = '';
   strings.forEach((number) => {
      html += `<div>${number}</div>`;
   });
   wrapper.innerHTML = html;
}

function renderSum(){
   let htmlSum = '';
   let result = sum(strings);
   htmlSum += `<div>Сумма строк: <b>${result}</b></div>`
   jsSum.innerHTML = htmlSum;
}

btn.addEventListener('click', () => {
   let number = Number(input.value);
   addNumber(number);
   sum(strings);
   renderSum();
   render();
});

deleteBtn.addEventListener('click', () => {
   deleteItems(strings);
   sum(strings);
   renderSum();
   render();
});

function deleteItems (array){
   array.length = 0;

};

render();
console.log(strings);




