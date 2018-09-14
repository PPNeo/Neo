var myHeading = document.querySelector('h1');
myHeading.textContent = "Hello World!";

document.querySelector('h1').onclick = function() {
    alert('不要动我的标题！');
}

var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/picture1.jpg') {
      myImage.setAttribute('src', 'images/picture2.jpg');
    } 
    if(mySrc === 'images/picture2.jpg')
    {
      myImage.setAttribute('src', 'images/picture3.jpg');
    }
    if(mySrc === 'images/picture3.jpg')
    {
      myImage.setAttribute('src', 'images/picture1.jpg');
    }
}

var myButton = document.querySelector('button');

function setUserName(){
    var myName = prompt('Please enter your name.');
    localStorage.setItem('name',myName);
    myHeading.textContent = '欢迎浏览此网站，'+myName;
}

if(!localStorage.getItem('name')){
  setUserName();
}else {
  var myName = localStorage.getItem('name');
  myHeading.textContent = '欢迎您浏览此网站，'+myName;
}

myButton.onclick = function(){
  setUserName();
}