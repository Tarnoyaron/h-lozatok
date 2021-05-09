var hotList = [];
var questionsInHotlist = 3;
var displayedQuestion;
var numberOfQuestions;
var nextQuestion = 1;
var timeHandler;


function init() {
    for (let i = 0; i < questionsInHotlist; i++) {
        hotList[i] = {
            question: {},
            goodAnswers : 0


        }
    }
    if (localStorage.getItem("hotList")) {
        hotList = JSON.parse(localStorage.getItem("hotList"))
    }
    if (localStorage.getItem("displayedQuestion")) {
        displayedQuestion = parseInt(localStorage.getItem("displayedQuestion"))
    }
    if (localStorage.getItem("nextQuestion")) {
        nextQuestion = parseInt(localStorage.getItem("nextQuestion"))
    }

    if (hotList == 0) {


        for (let i = 0; i < questionsInHotlist; i++) {
            kérdésbetöltés(nextQuestion, i);
            nextQuestion++;

        }
    }
    else {
        kérdésmegjelenítés();
    }
 
    //kérdések száma
    fetch("questions/count11")
        .then(result => result.text())
        .then(n => { numberOfQuestions = parseInt(n) })
}


function kérdésbetöltés(questionNumber, destination)
{
    fetch(`/questions/11/${questionNumber}`)
        .then(result => {
            if (!result.ok) {
                console.error(`hisbás letöltés: ${result.status}`);
                return null;
            }
            else {
                return result.json();
            }
        })
        .then(q => {
            hotList[destination].question = q;
            hotList[destination].goodAnswers = 0;
            console.log(`A ${questionNumber}.kérdés letöltésre került a hotlist ${destination}.helyére`)
            if (displayedQuestion === undefined && destination == 0)
            {
                displayedQuestion = 0;
                kérdésmegjelenítés();
                

            }
        })
}
//A hotlistben szereplő kérdések megjelenítése 
function kérdésmegjelenítés() {
    let kérdés = hotList[displayedQuestion].question;
    document.getElementById("kep").src = kérdés.image;
    document.getElementById("kérdés_szövege").innerHTML = kérdés.questionText;
    document.getElementById("válasz1").innerHTML = kérdés.answer1;
    document.getElementById("válasz2").innerHTML = kérdés.answer2;
    document.getElementById("válasz3").innerHTML = kérdés.answer3;

    if (kérdés.image) {


        document.getElementById("kep").src = kérdés.image;
        document.getElementById("kep").style.display = "block";
    }
    else {
        document.getElementById("kep").style.display = "none";
    }

    for (let i = 1; i <= 3; i++) {
        document.getElementById("válasz" + i).classList.remove("jó", "rossz");
        document.getElementById("válaszok").style.pointerEvents = "auto";
    }
}
//előre hátra gombok
function tovább() {
    clearTimeout(timeHandler);
    displayedQuestion++;
    if (displayedQuestion === questionsInHotlist) {
        displayedQuestion = 0;
        kérdésmegjelenítés();
    }
    kérdésmegjelenítés();

}
function vissza() {
    displayedQuestion--;
    if (displayedQuestion < 0) {
        displayedQuestion = questionsInHotlist - 1;
        if (hotList[displayedQuestion].goodAnswers > 1) {
            goodAnswers--;
        }
    }
    kérdésmegjelenítés();
}
function válasz(n) {
    let kérdés = hotList[displayedQuestion].question;
    if (n === kérdés.correctAnswer) {
        document.getElementById("válasz" + n).classList.add("jó");
        hotList[displayedQuestion].goodAnswers++;
        if (hotList[displayedQuestion].goodAnswers === 3) {
            kérdésbetöltés(nextQuestion, displayedQuestion)
            nextQuestion++;
        }
    }
    else {
        document.getElementById("válasz" + n).classList.add("rossz");
        document.getElementById("válasz" + kérdés.correctAnswer).classList.add("jó");
        hotList[displayedQuestion].goodAnswers = 0;
    }
    document.getElementById("válaszok").style.pointerEvents = "none";
    timeHandler = setTimeout(tovább, 3000);
    localStorage.setItem("hotList", JSON.stringify(hotList));
    localStorage.setItem("displayedQuestion", displayedQuestion);
    localStorage.setItem("nextQuestion", nextQuestion);
}
;
document.addEventListener("DOMContentLoaded",init)