<<<<<<< HEAD
var isPalindrome = function(x) {
    if(x<0) return false;
    x=x.toString();
    let left=0;
    let right= x.length-1;
    while(left<right)
    {
        if(x[left]!==x[right]) {
            return false;
        }
        left++;
        right--;

    }
    return true;
};
=======

    function myFunction() {
        document.getElementById("Form")
        console.log("fname"); 
    }
>>>>>>> 1917b697d2a01f51f03949d8e430ef4f94c71a21
