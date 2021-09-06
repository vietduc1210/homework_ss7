//12.1
var items = ['Backjack', 'MiBand watch', 'Ring'];
console.log(items);
let numberOfItems = items.length;
//12.2
let itemList = document.getElementById("item_list_ul");
console.log(itemList);

//12.3
for(let i = 0;i<items.length;i++){
    let li = document.createElement("li");
    let span = document.createElement("span");
    let textNote = document.createTextNode(items[i]);
    span.appendChild(textNote);
    li.appendChild(span);
    itemList.appendChild(li);
}

//12.4
document.getElementsByTagName("li")[0].remove();
document.getElementsByTagName("li")[0].remove();
console.log(document.getElementById("item_list_ul"));

//12.7
let button1 = document.getElementsByTagName("button")[0];
button1.addEventListener("click", () => {
    console.log("Add button clicked");
})

//12.8
button1.addEventListener("click", () => {
    let new_item = document.getElementsByTagName("input")[0].value;
    console.log(new_item);
})
//12.9+12.10
button1.addEventListener("click", () => {
    let new_item = document.getElementsByTagName("input")[0].value;
    items.push(new_item);
    console.log(items);
})

//12.11
button1.addEventListener("click", () => {
    newitem = document.getElementsByTagName("input")[0].value;
    let li = document.createElement("li");
    let span = document.createElement("span");
    let textNote = document.createTextNode(newitem);
    span.appendChild(textNote);
    li.appendChild(span);
    itemList.appendChild(li);
    let button = document.createElement("button");
    button.className = "removeButton";
    let text = document.createTextNode("remove");
    button.appendChild(text);
    li.appendChild(button);
    document.getElementsByTagName("input")[0].value ="";
   
})

//12.12
for(let i = 0;i<items.length;i++){
    let li = document.getElementsByTagName("li")[i];
    let button = document.createElement("button");
    button.className = "removeButton";
    let text = document.createTextNode("remove");
    button.appendChild(text);
    li.appendChild(button);
}
//12.13
let allButton = document.getElementsByClassName("removeButton");
for(let i=0;i<items.length;i++){  
    allButton[i].addEventListener("click",() => {
    console.log("remove");
})
}
//Phần này em mới chỉ cho nó in ra khi mà ấn vào ô remove của phần từ có sẵn, phần từ add thêm vào chưa dùng được
//Anh có thể gợi ý cách làm đoạn này hộ em được k ạ 

//12.14
for(let i=0;i<items.length;i++){  
    allButton[i].addEventListener("click",() => {
    console.log("Item: "+i);
})
}
//12.15
for(let i=0;i<items.length;i++){  
    allButton[i].addEventListener("click",() => {
    items.splice(i,1);
    console.log(items);
    i=0;  
})
}

//12.16
for(let i=0;i<items.length;i++){  
    allButton[i].addEventListener("click",() => {
    let removeThing = document.getElementsByTagName("li")[i];
    removeThing.remove();
    i=0;  
})
}