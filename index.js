document.addEventListener("DOMContentLoaded",displayBoard);
function displayBoard(){
    let count=0;
    const gameBoard=document.getElementById("gameBoard");
    gameBoard.style.visibility="visible";
        
    const myTable=document.getElementById("gameBoard");
    const myTdTag=myTable.querySelectorAll("td");
    myTdTag.forEach((e)=>
    e.addEventListener("click",drawMark));
    function drawMark(){
        count+=1;
        if(count%2===0)
        {
            console.log("print O");
        }
        else{
            console.log("print X"); 
        }
        
    }
};



