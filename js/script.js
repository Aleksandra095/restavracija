function toggleMenu(){

let menu=document.getElementById("menu");

if(menu.style.display==="block"){
menu.style.display="none";
}
else{
menu.style.display="block";
}

}



let count=document.getElementById("count");

let service=document.getElementById("service");

let total=document.getElementById("total");


function calculate(){

let price=
Number(service.value);

let quantity=
Number(count.value);


total.innerHTML=
price*quantity;

}


count.addEventListener(
"input",
calculate
);


service.addEventListener(
"change",
calculate
);



document
.getElementById("form")
.addEventListener(
"submit",
function(e){

e.preventDefault();

alert(
"Дякуємо! Ми зв'яжемося з вами найближчим часом."
);

this.reset();

}
);