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
