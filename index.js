/*
Given a string s, reverse the order of characters in each word within a sentence while still preserving whitespace and initial word order.

Input: s = "Let's take LeetCode contest"
Output: "s'teL ekat edoCteeL tsetnoc"
*/

var reverseWords = function(s) {
    let arr = s.split(' ')
    for (let i=0; i<arr.length; i++){
        arr2 = arr[i].split('')
        let start = 0
        let end = arr2.length-1
        while (start <= end){
            [arr2[start++],arr2[end--]] = [arr2[end],arr2[start]]
        }
        arr[i] = arr2.join('')
    }
    return arr.join(' ')
};