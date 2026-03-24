// 125. Valid Palindrome

function ValidPalindrom(s){
    let cleanedString = s.replace(/[^a-zA-Z0-9]/g, "").trim()
    let end=cleanedString.length-1
    let start=0
    while(start<end){
        if(cleanedString[start]!==cleanedString[end])return false
        start++
        end--
    }
    return true
}

console.log(ValidPalindrom("anan"));
