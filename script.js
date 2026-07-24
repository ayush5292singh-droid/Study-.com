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
