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

/* function popUps() {              //* KYS!!!!!!!!!!!!!!!!!!!!!!!!
    

    let buttonIsClicked = false;
    vatslega.onclick('click', () =>{
        buttonIsClicked = !buttonIsClicked;
    })

    if(buttonIsClicked === true){
        alert("Izvēlēties šo atslēgu?");
    }
    else {
        alert("Nodot šo atslēgu?");
    }

}

function myFunc() {
    popUps();
    ieraksts();
} */