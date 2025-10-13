function string_combination(s){
    result=[]
    for (let i=0 ; i<s.length;i++)
        for (let j=i+1;j<=s.length;j++)
        result.push(s.substring(i,j))
return result
}
let string=string_combination("dog")
console.log(string)