let boxes =document.querySelectorAll(".box");
let resetbutton=document.querySelector("#reset-button");
let newbutton=document.querySelector("#new-button");
let msgcontainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");
let turnO=true;//playerO
const winPattern =[//array 
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],


];
const resetGame=()=>{
    turnO=true
    enableBoxes();
    msgcontainer.classList.add("hide");
}
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("box was clicked");
        if(turnO==true){
            box.innerText="O";
            turnO=false;//set false so it doesnot print O again
        }else{
            box.innerText="X";
            turnO=true;

        }
        box.disabled =true;//disabled so if we tap on box again it can't chnge
        checkwinner();//call fun to check who is winner

    });
});//add event listener to perform operation when we press button
const disableBoxes=()=>{
    for(let box of boxes){
        box.disabled=true;//box disable so game is stop when winner is announce
    }
};const enableBoxes=()=>{
    for(let box of boxes){
        box.disabled=false;//for new game 
        box.innerText="";
    }
}
const showWinner=(winner)=>{
    msg.innerText=`congratulations,Winner is ${winner}`;
    msgcontainer.classList.remove("hide");
    disableBoxes();
};
const checkwinner=()=>{

    for(let pattern of winPattern){//loop to check boxes
        let pos1val=boxes[pattern[0]].innerText;
        let pos2val=boxes[pattern[1]].innerText;
        let pos3val=boxes[pattern[2]].innerText;
        if(pos1val!=""&&pos2val!=""&&pos3val!=""){
            if(pos1val==pos2val&&pos2val==pos3val){
                console.log("winner",pos1val);
                showWinner(pos1val);
            }
        }
    }
    };
newbutton.addEventListener("click",resetGame);
resetbutton.addEventListener("click",resetGame);
    
    
