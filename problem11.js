//11.2
let button1 = document.getElementById("button1");
console.log(button1);

//11.3
button1.addEventListener("click",() =>{
    console.log("Upper it!!! just clicked");
})

//11.4
let input1 = document.getElementsByTagName("input")[0];
console.log(input1);

//11.5
button1.addEventListener("click",() =>{
    let userName = document.getElementsByTagName("input")[0].value;
    console.log("User's name: "+userName);
})

//11.6
button1.addEventListener("click",() =>{
    let userName = document.getElementsByTagName("input")[0].value;
    console.log("User's name uppercase: "+userName.toUpperCase());
})

//11.7
let div = document.getElementById("result_div");
console.log(div);

//11.8
button1.addEventListener("click",() =>{
    let userName = document.getElementsByTagName("input")[0].value;
    document.getElementById("result_div").innerText = userName.toUpperCase();
})
