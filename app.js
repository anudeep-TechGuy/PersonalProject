var stuff = document.getElementById("india");
console.log(stuff);
stuff.onclick = function () {

    if (stuff.checked) {
        document.getElementById("indian-states").style.display = "block";
    }
    else {
        document.getElementById("indian-states").style.display = "none";
    }
};
var stuff1 = document.getElementById("america");
console.log(stuff1);
stuff1.onclick = function () {

    if (stuff1.checked) {
        document.getElementById("american-states").style.display = "block";
    } else {
        document.getElementById("american-states").style.display = "none";
    }




};