// console.log("Hello World");
let user_score=0;
let com_score=0;

let choices= document.querySelectorAll(".rps");

let result=document.getElementById("res");

let userscore = document.getElementById("user_score");
let computerscore = document.getElementById("sys_score");

let draw=()=>{
    // console.log("game is draw");
    setTimeout(()=>{
        result.innerText = "Game is draw!";
    }, 1000);

};

let display_winner=(user_win, rps_Id, com_gen)=>{
    if(user_win){
       user_score++
        // userscore.innerText=user_score;
        // console.log("You Win");
       setTimeout(()=>{
        result.innerText = `You win because ${rps_Id} beats ${com_gen}! `;
         userscore.innerText = user_score;
       }, 1000);
    }else{
        com_score++;
        // console.log("You Lose");
        setTimeout(()=>{
            result.innerText = `You lose because ${rps_Id} cannot beats ${com_gen}! `;
            computerscore.innerText = com_score;
        }, 1000);
    }
};

let computerchoice=()=>{
    // console.log("Wait computer is choosing");
    let option = ["rock", "paper", "scissor"];
    let randomNum=Math.floor(Math.random()*3);
    return option[randomNum];
};

let playgame = (rps_Id) => {
  console.log(rps_Id, "is clicked okay");

  result.innerText = "Computer is choosing...";

    let com_gen= computerchoice();
   
    console.log(com_gen, "is computer generated");

    if(rps_Id===com_gen){
        draw(); 
    }else{
        let user_win =true;
        if(rps_Id==="rock"){
           user_win= com_gen==="paper"?false:true;
        }else if(rps_Id==="paper"){
            user_win= com_gen==="scissor"?false:true;
        }else if(rps_Id==="scissor"){
            user_win= com_gen==="rock"?flase:true;
        }
        display_winner(user_win, rps_Id, com_gen);
    //    setTimeout( display_winner(user_win, rps_Id, com_gen), 5000);
    }
    
};

choices.forEach((rps)=>{
    rps.addEventListener("click", ()=>{
        const rps_Id=rps.getAttribute("id");
         console.log("clicked", rps_Id);
         playgame(rps_Id);
    });
});