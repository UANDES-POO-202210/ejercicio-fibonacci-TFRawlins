const a=0;
const b=0;
const counter=0
let input=0
const fs = require('fs')
fs.readFile('input.txt', (err, data) => {
    if (err) throw err;

    const data_txt=(data.toString());
    input=parseInt(data_txt);
    fibonacci(a,b,input,counter);
})
function fibonacci(x,y,ct,n){
    if(ct!=0){
        console.log('F(',n,') =',y);
        if(x==0 && y==0){
                suma=1;
                ct-=1;
                x+=1;
                n+=1;
                fibonacci(y,suma,ct,n);
        }
        else{
            suma=x+y;
            ct-=1;
            n+=1;
            fibonacci(y,suma,ct,n);
        }
    }
}