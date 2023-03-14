let content2 = document.getElementById('content-2');
let textHtml = '<b>怎么能不呢？</b>';
textHtml += '<i>对 不 起，我 的 中 文 不 好</i>'；
content2.innerHTML = textHtml;


let discountButton = document.getElementById('discount-button')；
let message = document.getElementById('message')；

function showMessage(){
    message.innerHTML = '你 们 来 迟 了'；
}

discountButton.addEventListener('click',showMessage)；
