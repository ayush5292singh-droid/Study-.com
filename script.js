function speak(){

let text =
document.getElementById("message").innerText;


let speech =
new SpeechSynthesisUtterance(text);


speech.rate=1;

speech.pitch=1.2;


window.speechSynthesis.speak(speech);

}



function askAI(){

let question =
document.getElementById("question").value;


if(question===""){

alert("Ask a question first");

return;

}


document.getElementById("answer").innerHTML =

"🤖 I will help you learn about: " + question;

}
// =====================
// TO DO LIST
// =====================


let tasks=[];


function addTask(){

let task =
document.getElementById("task").value;


if(task===""){

alert("Enter task");

return;

}


tasks.push(task);


showTasks();


document.getElementById("task").value="";

}



function showTasks(){

let result="";


tasks.forEach(function(t,index){


result +=

"<p>📌 "+t+
" <button onclick='deleteTask("+index+")'>❌</button></p>";


});


document.getElementById("taskList").innerHTML=result;


}



function deleteTask(index){

tasks.splice(index,1);

showTasks();

}



// =====================
// TIMETABLE
// =====================


let schedule=[];


function addSchedule(){


let subject =
document.getElementById("subject").value;


let time =
document.getElementById("time").value;



if(subject==="" || time===""){

alert("Enter subject and time");

return;

}


schedule.push({

subject:subject,
time:time

});


showSchedule();


}



function showSchedule(){


let result="";


schedule.forEach(function(item){


result +=

"<p>📚 "+item.subject+
" ⏰ "+item.time+"</p>";


});


document.getElementById("scheduleList").innerHTML=result;


}
// =====================
// BETTER AI ANSWER
// =====================


function askAI(){

let question =
document.getElementById("question").value.toLowerCase();


let answer="";


if(question.includes("math")){

answer="🤖 Maths tip: Understand concepts first, then practice problems.";

}

else if(question.includes("science")){

answer="🤖 Science tip: Learn concepts with examples and diagrams.";

}

else if(question.includes("history")){

answer="🤖 History tip: Remember events using timelines.";

}

else{

answer="🤖 I will help you learn about "+question+". Keep practising!";

}


document.getElementById("answer").innerHTML=answer;


}



// =====================
// QUIZ GENERATOR
// =====================


function generateQuiz(){


let quizzes=[

"Math: What is 5 × 5?",

"Science: What planet is called the Red Planet?",

"English: What is a noun?",

"Computer: What is HTML used for?"

];


let random =

quizzes[Math.floor(Math.random()*quizzes.length)];


document.getElementById("quiz").innerHTML=

"🧠 "+random;


}



// =====================
// DARK MODE
// =====================


function darkMode(){

document.body.classList.toggle("dark");

}



// =====================
// SAVE NOTES
// =====================


let notesBox =
document.getElementById("notes");


notesBox.addEventListener("input",function(){

localStorage.setItem(
"notes",
notesBox.value
);

});



let savedNotes =
localStorage.getItem("notes");


if(savedNotes){

notesBox.value=savedNotes;

}
