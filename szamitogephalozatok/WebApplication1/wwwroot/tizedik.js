var hotList = [];
var questionsInHotlist = 3;
var displayedQuestions;
var numberOfQuestions;
var nexQuestion = 1;

function init() {
    for (let i = 0; i < questionsInHotlist; i++) {
        let q = {
            question: {},
            goodAnswers = 0


        }
    }
    for (let i = 0; i < questionsInHotlist; i++) {
        kérdésbetöltés(nexquestion, i);
        nexQuestion++;

    }
 }




function letöltés(id, destination) {

    fetch(`/questions/${id}`)
        .then(
            result => {
                if (!result.ok) {
                    console.log(`hibás letöltés: ${response.status}`)
                }

                else {
                    return result.json()
                }
            }
    )
        .then(
            q => {
                hotList[destination].question = q;
                hotList[destination].goodAnswers = 0;
                console.log(`A ${questionNumber}.kérdés letöltve a hot list ${destination}.helyére`)

            }
        )
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
    letöltés(id)







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