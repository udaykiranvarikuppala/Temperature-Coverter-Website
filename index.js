var ipt=document.getElementById('ip')
var rst=document.getElementById('rs')
var btn=document.getElementById('bt')
var sl=document.getElementById('sel')
var tx=document.getElementById('h')
var tx1=document.getElementById('p1')
var tx2=document.getElementById('p2')
var tx3=document.getElementById('far1')
var tx4=document.getElementById('cel1')


ipt.addEventListener('blur',function(ob){
    // console.log(ob.target.value)
    var n=ob.target.value
    // var m=((9/5)*n)+32;
    var t=sl.value
    // rst.innerHTML=m;
    // console.log(t)
    btn.addEventListener('click',function(o){
        

        if (t=="celsiusToFahrenheit"){
            rst.value=((9/5)*n)+32;
            

        }
        else if (t=="fahrenheitToCelsius"){
            rst.value=((n-32)*(5/9));
            

        }
        o.preventDefault();
    
        // alert(m)

        // rst.value=m;

        
        
    })
    ob.preventDefault();
    
})
sl.addEventListener('change',function(b){
    var n=ipt.value
    var t=sl.value
    console.log(t);
  
    if (t=="fahrenheitToCelsius"){
        tx.innerText="°F   to   °C";
        tx4.innerHTML="Fahrenheit"
        tx3.innerHTML="Celsius"
     
    }
    else{
        tx.innerText="°C   to   °F";
        tx4.innerHTML="Celsius"
        tx3.innerHTML="Fahrenheit"
    
    }


    // tx.innerText="°F   to   °C";
    // if (t=="celsiusToFahrenheit"){
    //     tx.innerText="°C   to   °F";

    // }
    // else if (t=="fahrenheitToCelsius"){
    //     tx.innerText="°F   to   °C";
    // }

    btn.addEventListener('click',function(o){
        if (t=="celsiusToFahrenheit"){
            rst.value=((9/5)*n)+32;
            tx2.innerText="°F";
            tx1.innerText="°C";

        }
        else if (t=="fahrenheitToCelsius"){
            rst.value=((n-32)*(5/9));
            tx1.innerText="°F";
            tx2.innerText="°C";
            f=1;

        }
        o.preventDefault();  
    })
    b.preventDefault();  
    
})
