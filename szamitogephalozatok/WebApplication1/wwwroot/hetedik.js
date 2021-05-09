

let i = 1;
let n = 1;
let hválaszID = 1;
let id = 1;
let questionNumber = 0;
var destinaton;
var QuestionsInHotList = 3;
var hotlist = [];
let goodAnswers = 0;

function init() {
    for (let i = 0; i < QuestionsInHotList; i++) {
        hotlist[i] = {
            question: {},
            goodAnswers : 0

        }
    }
    for (let i = 0; i < QuestionsInHotList; i++) {
        id++;
        goodAnswers == 0;
    }


}

function letöltés(id, destination) {

    fetch(`/questions/${id}`)
        .then(r => {
            if (!r.ok) {
                console.log("hiba")

            }
            else {
                return r.json();
            }
        }).then(kérdések =>adatÉrkezett(kérdések))
}
function adatÉrkezett(kérdések) {
    console.log(kérdések)
    document.getElementById("kérdés").innerHTML = kérdések.questionText;
    document.getElementById("kérdés").innerHTML = kérdések.questionText;
    document.getElementById("válasz1").innerHTML = kérdések.answer1;
    document.getElementById("válasz2").innerHTML = kérdések.answer2;
    document.getElementById("válasz3").innerHTML = kérdések.answer3;
    hválaszID = kérdések.correctAnswer;


}




function tovább() {
    id++;
    
    questionNumber++;
    if (goodAnswers == 3) {
        init();
        goodAnswers = 0;
    }
    else
    {
        if (QuestionsInHotList == questionNumber) {
            id = id - QuestionsInHotList;
            questionNumber = 0;
        }
    }

    letöltés(id);
   




}
function vissza() {
    id = id - 1;
    letöltés(id)

}

let válaszId = 0;
function válasz1() {
    válaszId = 1;
    console.log(válaszId);
    if (válaszId == hválaszID) {
        console.log("helyes");
        goodAnswers++;

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
        goodAnswers++;
    }
    else {
        console.log("helytelen")
    }
}
function válasz3() {
    válaszId = 3;
    console.log(válaszId);
    if (válaszId == hválaszID) {
        console.log("helyes");
        goodAnswers++;
    }
    else {
        console.log("helytelen")
    }
}