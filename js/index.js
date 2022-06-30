// console.log('hi')
let modalBtn = document.getElementById('modalBtn');
let modal = document.getElementById('modal');
let closeBtn = document.getElementById('closeBtn');
let modalInput = document.getElementById('modalInput');
let changeableText = document.getElementById('changeableText');

modalBtn.onclick = function(){
    modal.style.display = 'block';
    modalInput.value = changeableText.textContent;
}

closeBtn.onclick = function(){
    modal.style.display = 'none';
}

function changeText(){
    let inputValue = modalInput.value;
    changeableText.textContent = inputValue;
    // console.log(modalInput.value);
}