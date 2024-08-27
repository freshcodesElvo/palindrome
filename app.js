let inputElement = document.querySelector(".input");
let button = document.querySelector(".submitBtn")
let feedback = document.querySelector(".response")
let cont = document.querySelector(".container")


function checker(){
    let regEx = /[\W_]/g;
    wordToLower = inputElement.value.toLowerCase();
    let removeEx = wordToLower.replace(regEx, "");

    let reversed = removeEx.split("").reverse().join("");
    

    console.log(reversed);

    if(inputElement.value === reversed)
    {
        feedback.innerText = `${inputElement.value} is a palindrome`;
        
    }
    else
    {
        feedback.innerText = `${inputElement.value} is not a palindrome`;

    }
    
    inputElement.value = " "
    
}
button.addEventListener("click", ()=>{
    checker();

})