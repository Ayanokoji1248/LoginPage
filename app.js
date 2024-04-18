

let UserName=document.getElementById("usrName");
let usrPass=document.getElementById("password");
let usrEmail=document.getElementById("email");
let button=document.getElementById("btn");


let InvalidEmail=document.getElementById("invalidEmail");
let InvalidPass=document.getElementById("invalidPass");
let InvalidUsr=document.getElementById("invalidUsr");

function validateEmail(email) {
    // Regular expression pattern for email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    // Test the email against the pattern
    return emailPattern.test(email);
}

function validatePassword(password) {
    // Regular expression pattern for password validation
    const passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+~\-={}[\]:;"'<>,.?/\\]).{8,}$/;
    
    // Test the password against the pattern
    return passwordPattern.test(password);
}

function validateUsername(username) {
    // Remove leading and trailing whitespace
    username = username.trim();

    // Check if the username is not empty and has a length between 3 and 20 characters
    return username.length >= 3 && username.length <= 20;
}






button.addEventListener("click",(e)=>{
    e.preventDefault();
    // console.log(usrName.value);
    // console.log(usrEmail.value);
    if (validateEmail(usrEmail.value)) {
        console.log("Email is valid.");
    } else {
        console.log("Email is invalid.");
        InvalidEmail.style.color="red";
        InvalidEmail.style.fontSize="10px"
        InvalidEmail.innerHTML=`* Invalid Email`;
    }

    if (validatePassword(usrPass.value)) {
        console.log("Password is valid.");
    } else {
        console.log("Password is invalid.");
        InvalidPass.style.color="red";
        InvalidPass.style.fontSize="10px";
        InvalidPass.style.maxWidth="30vw";
        
        InvalidPass.innerHTML=`* At least 8 characters long ,
        Contains at least one digit, 
        Contains at least one lowercase letter, 
        Contains at least one uppercase letter,
        Contains at least one special character`;
    }

    if (validateUsername(UserName.value)) {
        console.log("Username is valid.");
        InvalidUsr.innerHTML="";
    } else {
        console.log("Username is invalid.");
        InvalidUsr.style.color="red";
        InvalidUsr.style.fontSize="10px";
        InvalidUsr.innerHTML=`* username length should between 3 and 20 characters `;
    }
    
    
    
})