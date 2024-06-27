function isPalindrome(str){
    let alt = /[^A-Za-z0-9]/g;   
    str = str.toLowerCase().replace(alt, '');
    let divStr = str.length
    for(let i = 0; i < divStr/2; i++){
        if(str[i] !== str[divStr -1 -i]){
            return false
        }
    }
    return true
}

function arrayMaxMin(arr){
  
    let menorNumero = arr[0]
    let maiorNumero = arr[0]

    for(let i = 0; i < arr.length; i++){
        if(arr[i] < menorNumero){
            menorNumero = arr[i]
        }
        if(arr[i] > maiorNumero){
            maiorNumero = arr[i]
            
        }
        
    } 
    return [menorNumero, maiorNumero]
}   
