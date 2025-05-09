let p1  = document.getElementById('p1');
let p2  = document.getElementById('p2');

let on = document.getElementById('on');
let off = document.getElementById('off');


let c = document.getElementById('c');
let f = document.getElementById('-/+');
let plus = document.getElementById('1+');
let delate = document.getElementById('delete');
let f7 =  document.getElementById('7');
let f8 =  document.getElementById('8');
let f9 =  document.getElementById('9');
let ff =  document.getElementById('%');
let devide =  document.getElementById('/');
let f4 =  document.getElementById('4');
let f5 =  document.getElementById('5');
let f6 =  document.getElementById('6');
let minus =  document.getElementById('-');
let multiply =  document.getElementById('x');
let f1 =  document.getElementById('1');
let f2 =  document.getElementById('2');
let f3 =  document.getElementById('3');
let equal =  document.getElementById('=');
let f0 =  document.getElementById('0');
let dot =  document.getElementById('.');


let num1 = ''
let num2 = ''

let sum = [num1,num2];
on.addEventListener("click",function(){
    let sound = document.getElementById('sound')
    let cal = '';
    cal = ''
    p2.textContent = ''
    plus.disabled = false
    p1.textContent = cal
    sound.disabled = false
    c.disabled = false
    f.disabled = false
    off.disabled = false
    delate.disabled = false
    f7.disabled = false
    f8.disabled = false 
    f9.disabled = false
    ff.disabled = false
    devide.disabled = false
    f4.disabled = false
    f5.disabled = false
    f6.disabled = false 
    minus.disabled = false
    multiply.disabled = false
    f1.disabled = false
    f2.disabled = false
    f3.disabled = false
    equal.disabled = false
    f0.disabled = false
    dot.disabled = false

    
        //key 0
        function key0(){
            cal+='0'
            num1+='0'
            let int = setInterval(function(){
                p1.textContent=cal
                clearInterval(int)
            })
         }
        // key 1
        function key1(){
            cal+='1'
            num1+='1'
            let int = setInterval(function(){
                p1.textContent=cal
                clearInterval(int)
            })
        }
        // key 2
        function key2(){
            cal+='2'
            num1+='2'
            let int = setInterval(function(){
                p1.textContent=cal
                clearInterval(int)
            })
        }
        //key 3
        function key3(){
            cal+='3'
            num1+='3'
            let int = setInterval(function(){
                p1.textContent=cal
                clearInterval(int)
            })
        }
        // key 4
        function key4(){
            cal+='4'
            num1+='4'
            let int = setInterval(function(){
                p1.textContent=cal
                clearInterval(int)
            })
        }
        // key 5
        function key5(){
            cal+='5'
            num1+='5'
            let int = setInterval(function(){
                p1.textContent=cal
                clearInterval(int)
            })
        }
        //key 6
        function key6(){
            cal+='6'
            num1+='6'
            let int = setInterval(function(){
                p1.textContent=cal
                clearInterval(int)
            })
        }
        //key 7
        function key7(){
            cal+='7'
            num1+='7'
            let int = setInterval(function(){
                p1.textContent=cal
                clearInterval(int)
            })
        }
        //key 8
        function key8(){
            cal+='8'
            num1+='8'
            let int = setInterval(function(){
                p1.textContent=cal
                clearInterval(int)
            })
        }
        //key 9
        function key9(){
            cal+='9'
            num1+='9'
            let int = setInterval(function(){
                p1.textContent=cal
                clearInterval(int)
            })
        }
        //key clear
        function clear(){
            cal = ''
            num1 = ''
            num2 = ''
            p1.textContent = ''
            p2.textContent = ''
            let int = setInterval(function(){
                p1.textContent=cal
                clearInterval(int)
            })
        }
        function delete1(){
            
            let cal1 = cal.slice(0,cal.length-1)
            cal = cal1
            let num4 = num1.slice(0,num1.length-1)
            num1 = num4
            
            let int = setInterval(function(){
                p1.textContent=cal
                clearInterval(int)
            })
            
            
        }
        function minus1(){
            cal += '-'
            
            
            let int = setInterval(function(){
                p1.textContent=cal
                clearInterval(int)
            })
        }
        function plius1(){
            cal += '+'
            
            
            let int = setInterval(function(){
                p1.textContent=cal
                clearInterval(int)
            })
        }
        function devide1(){
            cal += '/'
            
            
            let int = setInterval(function(){
                p1.textContent=cal
                clearInterval(int)
            })
        }
        function multiply1(){
            cal += '*'
            
            
            let int = setInterval(function(){
                p1.textContent=cal
                clearInterval(int)
            })
        }

        function    dot1(){
            cal += '.'
            
            
            let int = setInterval(function(){
                p1.textContent=cal
                clearInterval(int)
            })
        }
        function  idk1(){
            cal += '%'
            
            
            let int = setInterval(function(){
                p1.textContent=cal
                clearInterval(int)
            })
        }
        function  sound1(){
            sound.src = 'nigga.mp3'
            sound.play()
        
            
            
        }

        

    //eventlesteners
    f0.addEventListener('click',key0)
    f1.addEventListener('click',key1)
    f2.addEventListener('click',key2)
    f3.addEventListener('click',key3)
    f4.addEventListener('click',key4)
    f5.addEventListener('click',key5)
    f6.addEventListener('click',key6)
    f7.addEventListener('click',key7)
    f8.addEventListener('click',key8)
    f9.addEventListener('click',key9)
    c.addEventListener('click',clear)
    delate.addEventListener('click',delete1)
    minus.addEventListener('click',minus1)
    plus.addEventListener('click',plius1)
    multiply.addEventListener('click',multiply1)
    devide.addEventListener('click',devide1)
    dot.addEventListener('click',dot1)
    ff.addEventListener('click',idk1)
    f.addEventListener('click',sound1)
    document.addEventListener('keypress',function(e){
        if(e.key==='0'){
            key0()
        }
    })
    document.addEventListener('keypress',function(e){
        if(e.key==='1'){
            key1()
        }
    })
    document.addEventListener('keypress',function(e){
        if(e.key==='2'){
            key2()
        }
    })
    document.addEventListener('keypress',function(e){
        if(e.key==='3'){
            key3()
        }
    })
    document.addEventListener('keypress',function(e){
        if(e.key==='4'){
            key4()
        }
    })
    document.addEventListener('keypress',function(e){
        if(e.key==='5'){
            key5()
        }
    })
    document.addEventListener('keypress',function(e){
        if(e.key==='6'){
            key6()
        }
    })
    document.addEventListener('keypress',function(e){
        if(e.key===7){
            key7()
        }
    })
    document.addEventListener('keypress',function(e){
        if(e.key===8){
            key8()
        }
    })
    document.addEventListener('keypress',function(e){
        if(e.key===9){
            key9()
        }
    })
    document.addEventListener('keypress',function(e){
        if(e.key==='e'){
            delete1()
        }
    })
    document.addEventListener('keypress',function(e){
        if(e.key==='-'){
            minus1()
        }
    })
    document.addEventListener('keypress',function(e){
        if(e.key==='+'){
            plius1()
        }
    })
    document.addEventListener('keypress',function(e){
        if(e.key==='*'){
            multiply1()
        }
    })
    document.addEventListener('keypress',function(e){
        if(e.key==='/'){
            devide1()
        }
    })

    document.addEventListener('keypress',function(e){
        if(e.key==='.'){
            dot1()
        }
    })
    document.addEventListener('keypress',function(e){
        if(e.key==='%'){
            idk1()
        }
    })





    
    
    
function equal1(){
    if(cal.startsWith('*')||cal.startsWith('/')||cal.startsWith('.')||cal.startsWith('%')||cal.startsWith('-')||cal.startsWith('+')){
            p2.textContent = 'sythax eror'
    }
    
    num1 = Number(num1)
    num2 = Number(num2)
    p2.textContent = eval(p1.textContent)
    if(Number( cal.slice(0,cal.indexOf('*')))==0 && Number(cal.slice(cal.indexOf('*')+1,cal.length)==0)||Number( cal.slice(0,cal.indexOf('/')))==0&&Number(cal.slice(cal.indexOf('/')+1,cal.length)==0)){
        p2.textContent ='NaN'
    }  
    // let pluss = Number( cal.slice(0,cal.indexOf('+')))+ Number(cal.slice(cal.indexOf('+')+1,cal.length))
    // let minuss = Number( cal.slice(0,cal.indexOf('-')))- Number(cal.slice(cal.indexOf('-')+1,cal.length))
    // let devidee = Number( cal.slice(0,cal.indexOf('/')))/ Number(cal.slice(cal.indexOf('/')+1,cal.length))
    // let multiplyy = Number( cal.slice(0,cal.indexOf('*'))) * Number(cal.slice(cal.indexOf('*')+1,cal.length))
    // let num3 = Number( cal.slice(0,cal.indexOf('%')))% Number(cal.slice(cal.indexOf('%')+1,cal.length))
    
    
    // for(let i = 0;i<cal.length;i++){
    //     let num = 0
    
    //     if(cal[i] == '+'){

    //         p2.textContent =pluss
    //     }else if(cal[i] == '-'){
    //         p2.textContent = minuss
    //     }else if(cal[i] == '*'){
    //         p2.textContent =multiplyy
    //     }else if(cal[i] == '/'){
    //         p2.textContent =devidee
    //     }else if(cal[i] == '%'){
    //         p2.textContent =num3 
    //     }       
    //     if(cal[i]=='.'){
    //         num++
    //         if(num>2){
    //             p2.textContent = 'sythax eror'
    //         }
    //     }
    //     
         
    // }
}
    


equal.addEventListener('click',equal1)
document.addEventListener('keypress',function(e){
    if(e.key=== 'Enter'){
        equal1()
    }
})

})

// end of on




off.addEventListener("click",function(){
    p1.textContent = ''
    p2.textContent = ''
    cal = ''
    sum = 0
    plus.disabled = true
    c.disabled = true
    f.disabled = true
    off.disabled = true
    delate.disabled = true
    f7.disabled = true
    f8.disabled = true
    f9.disabled = true
    ff.disabled = true
    devide.disabled = true
    f4.disabled = true
    f5.disabled = true
    f6.disabled = true 
    minus.disabled = true
    multiply.disabled = true
    f1.disabled = true
    f2.disabled = true
    f3.disabled = true
    equal.disabled = true
    f0.disabled = true
    dot.disabled = true
    sound.disabled = true

    
    
})






 









































































































