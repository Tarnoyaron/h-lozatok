let a = 2;
let i = 1;
let n = 1;
let hválaszID = 1;
let id = 1;

function letöltés(id) {
     
    fetch(`/questions/${id}`)
        .then(r => r.json())
        .then(kérdések => adatÉrkezett(kérdések));
}
    function adatÉrkezett(kérdések)
    {
        console.log(kérdések)
        document.getElementById("kérdés").innerHTML = kérdések.questionText;
        document.getElementById("kérdés").innerHTML = kérdések.questionText;
        document.getElementById("válasz1").innerHTML = kérdések.answer1;
        document.getElementById("válasz2").innerHTML = kérdések.answer2;
        document.getElementById("válasz3").innerHTML = kérdések.answer3;
        hválaszID = kérdések.correctAnswer;
            
            
     }
 



function tovább()
{
    id++;
    letöltés(id)
    

   

    
    

}
function vissza()
{
    id=id-1;
    letöltés(id)
   
}

let válaszId = 0;
function válasz1() {
    válaszId = 1;
    console.log(válaszId);
    if (válaszId==hválaszID) {
        console.log("helyes")
    }
    else {
        console.log("helytelen")
    }
}
function válasz2() {
    válaszId = 2;
    console.log(válaszId);
    if (válaszId == hválaszID) {
        console.log("helyes")
    }
    else {
        console.log("helytelen")
    }
}
function válasz3() {
    válaszId = 3;
    console.log(válaszId);
    if (válaszId == hválaszID) {
        console.log("helyes")
    }
    else {
        console.log("helytelen")
    }
}



