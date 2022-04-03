//1
const square = document.getElementById("square");
square.addEventListener("click", ()=>
    {
        r = Math.floor(Math.random() * 256),
        g = Math.floor(Math.random() * 256),
        b = Math.floor(Math.random() * 256),
        square.style.background='#' + r.toString(16) + g.toString(16) + b.toString(16);
    }
)

//2
const counter=document.getElementById("counter");
let time=0;
let times;

counter.addEventListener("mouseover",()=>
    {
        times=setInterval(()=>{ time++; counter.innerText=time;},1000);
    }
)

counter.addEventListener("mouseout", () =>
    {
        times=clearInterval(times);
    }
)

//3
const button=document.querySelector(".button")
button.onclick=function(){
    if (document.querySelector(".list").style.display=="block"){
        document.querySelector(".list").style.display="none";
    }
    else
    document.querySelector(".list").style.display="block";
}

//4
const circle=document.getElementById("circle");
const sqr=document.getElementById("sqr");

let flag=false;

circle.addEventListener("click",()=>
{
    flag=true;
}
)

document.addEventListener("keydown",(e)=>
{
    if (e.key=="Escape")
        flag=false;
}
)

let x=0;
let y=0;

sqr.addEventListener("mousemove",(e)=>
{
    if (flag){

        x=Math.min(e.pageX-sqr.offsetLeft-circle.offsetWidth/2,sqr.offsetWidth-circle.offsetWidth);
        y=Math.min(e.pageY-sqr.offsetTop-circle.offsetHeight/2,sqr.offsetHeight-circle.offsetHeight);

        if ((x>=0) && (y>=0)){
            circle.style.left=x+"px";
            circle.style.top=y+"px";
        }
    }
}
)






