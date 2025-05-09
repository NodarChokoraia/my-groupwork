let reset = document.getElementById('reset');
let minus = document.getElementById('minus');
let content = document.getElementById('content');
let plius = document.getElementById('plius');


let num = 0;
function reset1(){
    num = 0
    content.innerText = num
}
function minus1(){
    num--
    content.innerText = num
}
function plius1(){
    num++
    content.innerText = num
}
setInterval(function(){
    if(num>0){
        content.style.color = 'green'
    }else if(num==0){
        content.style.color = 'white'
    }else{
        content.style.color = 'red'
    }
},1)



reset.addEventListener('click',reset1);
minus.addEventListener('click',minus1);
plius.addEventListener('click',plius1);


document.addEventListener('keypress',function(e){
    if(e.key === '+'){
        plius1()
    }else if(e.key === 'Enter'){
        reset1()
    }else if(e.key === '-'){
        minus1()
    }
})
