/*

The prime factors of 13195 are 5, 7, 13 and 29.

What is the largest prime factor of the number 600851475143 ?

ANS 6857
*/



function largePrime(max){


    var x = max

    while(true){
        var p = smallFactor(x);
        if(p < x){
            x /= p;
        }else{
            break;
        }
    }
    return x;
}

function smallFactor(num){
    
    for(var i = 0, end = Math.sqrt(num); i <= end;i++){
        if(num % i == 0){
            return i;
        }
    }
    return num
}

module.exports = largePrime