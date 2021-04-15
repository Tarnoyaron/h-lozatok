


i = 1
function myFunction() {
    fetch('/kerdes.json')
        .then(response => response.json())
        .then(data => letöltésBefejeződött(data)
        );
   

    function letöltésBefejeződött(data) {
        console.log("Sikeres letöltés")
        console.log(data[i])
        kérdések = data;
        document.getElementsByClassName("kerdes kattinthato1").innerHTML = adat
    }
    i = i + 1
    
    
}
function myFunction2() {
    fetch('/kerdes.json')
        .then(response => response.json())
        .then(data => letöltésBefejeződött(data)
        );


    function letöltésBefejeződött(data) {
        console.log("Sikeres letöltés")
        console.log(data[i])
        kérdések = data;
    }
    i = i - 1
   
};