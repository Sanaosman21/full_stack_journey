function palindrome(s){
 let left=0 
 let right=s.length-1
 while(left<=right){
    if (s[left]==s[right]){
        return "it is a palindrome"
    }
    left++
    right--
 }
 return "not palindrome"
}
let string =palindrome("sana");
console.log(string)