// console.log("Hello World");
let user_score=0;
let com_score=0;

let choices= document.querySelectorAll(".rps");

let draw=()=>{
    console.log("game is draw");
};

let display_winner=(user_win)=>{
    if(user_win){
        console.log("You Win");
    }else{
        console.log("You Lose");
    }
};

let computerchoice=()=>{
    let option = ["rock", "paper", "scissor"];
    let randomNum=Math.floor(Math.random()*3);
    return option[randomNum];
};

let playgame = (rps_Id) => {
  console.log(rps_Id, "is clicked okay");
    let com_gen=computerchoice();
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
        display_winner(user_win);
    }
    
};

choices.forEach((rps)=>{
    rps.addEventListener("click", ()=>{
        const rps_Id=rps.getAttribute("id");
         console.log("clicked", rps_Id);
         playgame(rps_Id);
    });
});