const balls=document.querySelectorAll(".ball")

const resetbtn=document.getElementById("reset");
resetbtn.addEventListener("click",()=>window.location.reload());

const score1=document.getElementById("score-team1");
const score2=document.getElementById("score-team2");
const wicket1=document.getElementById("wickets-team1");
const wicket2=document.getElementById("wickets-team2");

const strikebtn=document.getElementById("strike");

let w1=0;let w2=0;

let i=0;

let s1=0;let s2=0;

strikebtn.addEventListener("click",function(){
    let ran=Math.floor(Math.random()*7)+1;
if(i>=12){
    if(s1>s2){
        alert("IND Won");
    }
    else if(s1===s2){
        alert("Draw Match");
    }
    else{
        alert("PAK Won");
    }
}
else if(i <6) {
    if(ran==7){
        balls[i].textContent="W";
        w1++;
        wicket1.textContent=w1;
    }
    else{
        balls[i].textContent=ran;
        s1+=ran;
        score1.textContent=s1;
    }
}
else{
    if(ran==7){
        balls[i].textContent="W";
        w2++;
        wicket2.textContent=w2;
    }
    else{
        balls[i].textContent=ran;
        s2+=ran;
        score2.textContent=s2;
    }
}
    i++;
})
















