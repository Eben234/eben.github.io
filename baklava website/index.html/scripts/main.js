/*var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/baklava.jpg') {
        myImage.setAttribute ('src','images/baklava1.jpg');
    }else {
        myImage.setAttribute('src','images/baklava.jpg')
    }
}*/
var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
    var myName = prompt('Plese enter your name.');
    localStorage.setItem('name', myName);
    myHeading.textContent = "Baklava is awesome ", + myName;
}
if (!localStorage.getItem('name')) {
    setUserName();
}else {
    var storedName = localStorage.getItem('name');
    myHeading.textContent = 'Baklava is awesome ' + storedName;
}
myButton.onclick = function (){
    setUserName();
}