// it will check the entered number is valid for bd or not

let re = /^01[0-9]{9}/;

let cell = prompt("Enter your cell number:");

if(re.test(cell)){
    alert("Your cell number is valid for Bangladesh!");
}
else{
    alert("Please enter a valid Bangladeshi cell number!");
}