function check() {
    let total = 0;
    let q1 = document.quiz.question1.value;
    let q2 = document.quiz.question2.value;
    let q3 = document.quiz.question3.value;
    let q4 = document.quiz.question4.value;
    let q5 = document.quiz.question5.value;

    let result = document.getElementById("result");
    let quiz = document.getElementById("quiz");
    let finalcall = document.getElementById("finalcall");
    if (q1 === "Hyper text markup language") {
        total++;
    }
    if (q2 === "Object-Oriented") {
        total++;
    }
    if (q3 === "Const") {
        total++;
    }
    if (q4 === "Stringify()") {
        total++;
    }
    if (q1 === "None of the above") {
        total++;
    }

    finalcall.textContent = "Final Call";
    finalcall.style.background = "white";
    finalcall.style.textAlign = "center";
    finalcall.style.fontSize = "larger";
    quiz.style.display = "none";
    result.style.textAlign = "center";
    result.style.padding = "10px";
    result.style.fontSize = "bolder";
    if (total >= 4) {
        result.textContent = "Yes";
        result.style.fontSize = "larger";
        result.style.fontSize = "bolder";
        result.style.color = "white";
        result.style.background = "green";
    }
    if ((total <= 3) && (total >= 2)) {
        result.textContent = "Maybe";
        result.style.fontSize = "larger";
        result.style.fontSize = "bolder";
        result.style.background = "violet";
    }
    if (total === 1 || total === 0) {
        result.textContent = "NO";
        result.style.fontSize = "larger";
        result.style.fontSize = "bolder";
        result.style.background = "red";

    }



}
