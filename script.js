function displayText() {
    let text = document.getElementById("text-input").value;
    document.getElementById("text-output").innerText = text;
}

function makeBold(elem) {
    elem.classList.toggle('active');
    document.getElementById('text-output').classList.toggle('bold');

}

function makeItalic(elem) {
    elem.classList.toggle('active');
    document.getElementById("text-output").classList.toggle("italic");

}

function makeUnderline(elem) {
    elem.classList.toggle('active');
    document.getElementById("text-output").classList.toggle("underline");

}

function alignText(elem , state){
    document.getElementById("text-output").style.textAlign=state;
    let buttonsList = document.getElementsByClassName("align");
    for (let i=0 ; i<buttonsList.length ; i++){
        buttonsList[i].classList.remove("active");
    }
    elem.classList.toggle("active")
}