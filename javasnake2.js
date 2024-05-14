function poga1() {
    var element = document.getElementById("vAButtons1");
    if (element.style.backgroundColor == "red") {
        element.style.backgroundColor = "green"}
    else { element.style.backgroundColor = "red"}
}
function poga2() {
    var element = document.getElementById("vAButtons2");
    if (element.style.backgroundColor == "red") {
        element.style.backgroundColor = "green"}
    else { element.style.backgroundColor = "red"}
}
function poga3() {
    var element = document.getElementById("vAButtons3");
    if (element.style.backgroundColor == "red") {
        element.style.backgroundColor = "green"}
    else { element.style.backgroundColor = "red"}
}

function ieraksts() {
     var clickTime = new Date();
     var formattedTime = clickTime.toLocaleString();
     console.log("Button clicked at: " + formattedTime);
 }

 function popUps() {              //* KYS!!!!!!!!!!!!!!!!!!!!!!!!
    

    let buttonIsClicked = false;

    window.addEventListener('click', () =>{
        var elem = document.getElementById('vAButtons1');
    })

    if(buttonIsClicked === false){
        alert("Izvēlēties šo atslēgu?");
        buttonIsClicked != buttonIsClicked;
    }
    else {
        alert("Nodot šo atslēgu?");
        console.log(buttonIsClicked);
        buttonIsClicked != buttonIsClicked;
    }

}

function myFunc() {
    popUps();
    ieraksts();
}

fetch('http://localhost:3000/data')
  .then(response => response.json())
  .then(data => {
    console.log(data); // parada datus
  })
  .catch(error => console.error('Error:', error));