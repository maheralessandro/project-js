let frase = "ciao sono una frase"
console.log(frase);

function inverti(str){
    let sum = str.split("");
    let sum1 = [];
    
   for(let i=sum.length-1 ; i>=0 ; i--){
      sum1.push(sum[i]);  
      
      }
    // let sum1 = sum.reverse()
    
    
   return sum1.join("");
}
console.log(inverti(frase)); 

function numera(num){
    return num.length;
}

console.log(numera(frase))
    
function maiuscolo(cap){
    
    let cap2 = []
    for(let i=0 ; i<cap.length ; i++){
       
        if(cap[i]===" "){
            cap2.push(cap[i+1].toUpperCase())
        }else if(cap[i]!=" "){
            cap2.push(cap[i+1])
        }
        
     }
    
    cap2.unshift(cap[0].toUpperCase())
       return cap2.join("")

}
 console.log(maiuscolo(frase));

 let tab = [75,30,200,85,7,10,]

 function maxmin(num){
    let nummin = num[0];
    let nummax = num[0];
    for(i=0 ; i<num.length ; i++){
        if(nummin>num[i]){
            nummin=num[i]
            
        }
        if(nummax<num[i]){
            nummax=num[i]
            
        }
    }
    
    let minmax = [nummin,nummax]
    return minmax
    
 }
 console.log(maxmin(tab));

 function somma(sum){
    let sum1 = 0
    for(i=0 ; i<sum.length ; i++){
        sum1 += sum[i]
    }
    return sum1
 }

 console.log(somma(tab));

 function filtra(pari){
    let pari1 = []
    for(i=0 ; i<pari.length ; i++){
        if(pari[i]%2 === 0){
            pari1.push(pari[i]);
        }
    }
    return pari1
 }
 
console.log(filtra(tab));

function fattoriale(num){
    let num1 = []
    let num2 = 1
    for(let i=0 ; i<num ; i++){
        
        num1.push(num-i)
        num2 *=num1[i]
    }
    return num2
}

console.log(fattoriale(5));

function interi(num){
    verifica = true
    if(num<1){
        verifica = false;
        
    }
    
    for(let i=2 ; i<num ; i++){
        if(num % i === 0 ){
            verifica = false
        }
    }
    return verifica
}

console.log(interi(4));

function fibonacci(num){
    let num1 = 1 ;
    let num2 = 1 ;
    let num3
    for(i=0 ; i<num ; i++){
        num3 = num1 + num2 ; 
        num1 = num2 ;
        num2 = num3 ; 
    }

    return num3
}

console.log(fibonacci(3));
    





