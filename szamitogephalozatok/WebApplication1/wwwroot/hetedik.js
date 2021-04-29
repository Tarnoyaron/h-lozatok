


i = 0
function myFunction() {
    fetch('/kerdes.json')
        .then(response => response.json())
        .then(data => letöltésBefejeződött(data)
        );


    function letöltésBefejeződött(data) {
        console.log("Sikeres letöltés")
        console.log(data[i])
        kérdések = data;
        document.getElementById("kerdes_szovege").innerHTML = data[i].questionText;
        document.getElementById("valasz1").innerHTML = data[i].answer1;
        document.getElementById("valasz2").innerHTML = data[i].answer2;
        document.getElementById("valasz3").innerHTML = data[i].answer3;
        function helyese()
        {
            if (true) {

            }
        }

    }
    if (i < 1) {
        i = 3
    }
    i = i - 1
    

}
function myFunction2() {
    fetch('/kerdes.json')
        .then(response => response.json())
        .then(data => letöltésBefejeződött(data)
    );
    if (i>1) {
        i=0
    }



    function letöltésBefejeződött(data) {
        console.log("Sikeres letöltés")
        console.log(data[i])
        kérdések = data;
        document.getElementById("kerdes_szovege").innerHTML = data[i].questionText;
        document.getElementById("valasz1").innerHTML = data[i].answer1;
        document.getElementById("valasz2").innerHTML = data[i].answer2;
        document.getElementById("valasz3").innerHTML = data[i].answer3
        console.log(i)
        i++




    };
  

}
fetch('/kerdes.json')
    .then(response => response.json())
    .then(data => letöltésBefejeződött(data)
);
