/*


A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.

Find the largest palindrome made from the product of two 3-digit numbers.

ANS 906609
*/

function largePalin(min, max){
    var maxPalin = -1;
		for (var i = min; i < max; i++) {
			for (var j = min; j < max; j++) {
				var prod = i * j;
				if (isPalindrome(prod) && prod > maxPalin)
					maxPalin = prod;
			}
        }
    return maxPalin
}

function isPalindrome(num){
    result = false
    if(String(num) == String(num).split("").reverse().join("")){
        result = true
    }
    return result
}

module.exports = largePalin