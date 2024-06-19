// access 
let boxes = document.querySelectorAll(".box");    // access buttons 
let resetbtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnO = true;  // playerX, playerO

// 2D array
const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

// function
const resetGame = () => {
    turnO = true;
    anableBoxes();
    msgContainer.classList.add("hide");
}

boxes.forEach((box) => {
    box.addEventListener("click" , () => {
        // console.log("box was clicked");

        // playerO
        if(turnO){
            box.innerText = "O";
            turnO = false;
        }
        // playerX
        else{
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;
     
       checkWinner(); 
    });
});

// function
const disableBoxes = () => {
    for(let box of boxes){
       box.disable = true;
    }
}

// function
const anableBoxes = () => {
    for(let box of boxes){
       box.anable = false;
       box.innerText = "";
    }
}

// function
const showWinner = (winner) => {
    msg.innerText = `Congratulations, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
}

// function
const checkWinner = () => {
    for(let pattern of winPatterns){
      /*console.log(pattern[0],pattern[1],pattern[2]);
        console.log(
            boxes[pattern[0]].innerText,
            boxes[pattern[1]].innerText,
            boxes[pattern[2]].innerText,
        );  */

        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText; 

        if(pos1Val != "" && pos2Val != "" && pos3Val != "" ){
            if(pos1Val === pos2Val && pos2Val === pos3Val){
                // console.log("Winner", pos1Val);
                showWinner(pos1Val);
            }
        }
    }
};

// triggering new game function
newGameBtn.addEventListener("click", resetGame);
resetbtn.addEventListener("click", resetGame);


