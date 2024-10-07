
let final_result = document.getElementById("res");

let com_gen=()=>{
  let cg=Math.floor(Math.random()*10);
  console.log("computer generated=", cg );
  chcompare(cg);
}

let chcompare=(cg)=>{
  // console.log("computer generated number=", cg);
  let human_gen=parseInt(window.prompt("Guess the number"));
  console.log("Your guess=", human_gen);
  if(cg==human_gen){
    console.log("You guess the correct number");
 final_result.innerText = `Game is a draw because both you and the computer guessed ${cg}`;
  }
  else if(cg>human_gen){
    console.log("Guess greater number");
    final_result.innerText = `Guess a greater number than ${human_gen}`;
    chcompare(cg);
  }
  else if(cg<human_gen){
    console.log("Guess smaller number");
    final_result.innerText = `Guess a smaller number than ${human_gen}`;
    chcompare(cg);
  }
}

com_gen();