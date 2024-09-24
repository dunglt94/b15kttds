// chatGPT
// function isPalindrome(str) {
//     str = prompt("Nhập 1 từ palindrome:")
//     function checkPalindrome(first, last) {
//         if (first >= last) return true;
//         if (str[first] !== str[last]) return false;
//         return checkPalindrome(first + 1 , last - 1)
//     }
//     if (checkPalindrome(0, str.length - 1)) {
//         alert(`${str} là một từ palindrome.`);
//     } else {
//         alert(`${str} không phải là một từ palindrome. Nhập lại`);
//         isPalindrome(str);
//     }
// }

// Làm theo hướng dẫn của bài + gợi ý từ đáp án của chat GPT
function isPalindrome(str) {
    str = prompt("Nhập 1 từ palindrome:")
    let first = 0;
    let last = str.length - 1;
    // if (str[first] === str[last]) return true;
    function checkPalindrome (first, last) {
        // if (first >= last) return true;
        // if (str[first +1] !== str[last-1]) return false;
        // return checkPalindrome(first +1, last -1);
        while (first < last) {
            if (str[first] !== str[last]) return false;
            first++;
            last--;
        }
        if (first >= last) return true;
    }
    if (checkPalindrome (first, last)) {
        alert(`${str} là 1 từ palindrome`);
    } else {
        alert(`${str} không phải là một từ palindrome. Nhập lại`);
        isPalindrome(str);
    }
}


