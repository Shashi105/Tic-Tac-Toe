document.addEventListener("DOMContentLoaded",displayBoard);
var arrPlayerO=[];
var arrPlayerX=[];
var result=false;
function displayBoard(){
    console.log(arrPlayerO,arrPlayerX,result)
    let initialCount=getRandomInt(2);
    let count=initialCount;
    initialCount+=9;
    const gameBoard=document.getElementById("gameBoard");
    gameBoard.style.visibility="visible";
    const myTable=document.getElementById("gameBoard");
    const myTdTag=myTable.querySelectorAll("td");
    myTdTag.forEach((e)=>{
        e.style.textAlign="center";
        e.style.fontSize="70px";
        e.style.offsetHeight=e.style.fontSize+'px';
        e.addEventListener("click",drawMark);
    });

    function drawMark(element){
              if(Boolean(event.timeStamp)){
                count+=1;
                if(count<=initialCount){
                    if(count%2===0)
                    {
                       const newText=document.createElement("p");
                       newText.innerText="O";
                       newText.style.color="black";
                       this.appendChild(newText);   
                      arrPlayerO.push(parseInt(element.target.id));
                       if(count>=5){
                        playerInfo={
                            "displayText":"O has Won!!",
                            "playerScore":arrPlayerO,
                           }
                           checkWinner(playerInfo,count);
                       }
                    }
                    else
                    {
                       const newText=document.createElement("p");
                       newText.innerText="X";
                       newText.style.color="red";
                       this.appendChild(newText);
                        arrPlayerX.push(parseInt(element.target.id));
                       if(count>=5){
                        playerInfo={
                            "displayText":"X has Won!!",
                            "playerScore":arrPlayerX,
                           }
                           checkWinner(playerInfo,count);
                       }
                    }
                    
                }    
            }
            else{
                alert("Already filled, Please try in some square!!!")
            }
             
    }
    function getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
      }
    function checkTie(count,result){
        if(count==10 && !result){
            setTimeout(()=>{alert("Cat's Game!!!")},5);
            location.reload();
        }
           
    }

    function checkWinner(playerInfo,count){    
          a1=[1,2,3];
          a2=[4,5,6];
          a3=[7,8,9];
          a4=[1,4,7];
          a5=[2,5,8];
          a6=[3,6,9];
          a7=[1,5,9];
          a8=[3,5,7];
          if(playerInfo){
                setTimeout(()=>{
                if(a1.every(val=>playerInfo.playerScore.includes(val))||a2.every(val=>playerInfo.playerScore.includes(val))||
                a3.every(val=>playerInfo.playerScore.includes(val))||a4.every(val=>playerInfo.playerScore.includes(val))||
                a5.every(val=>playerInfo.playerScore.includes(val))||a6.every(val=>playerInfo.playerScore.includes(val))||
                a7.every(val=>playerInfo.playerScore.includes(val))||a8.every(val=>playerInfo.playerScore.includes(val))){
                 alert(playerInfo.displayText);
                 result=true;
                 location.reload();
              }
             },5);
          }
            console.log(count);
            checkTie(count,result);          
      }
};
