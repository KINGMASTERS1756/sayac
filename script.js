const ekranEl =document.querySelector(".screen")
const eksiButton =document.querySelector(".negative")
const artiButton = document.querySelector(".positive")
 
let sayac=0;
 

console.log(ekranEl, artiButton,eksiButton);

artiButton.addEventListener("click",() => { sayac=sayac+1
    console.log("artı tıklandı", sayac);
    ekranEl.innerHTML=sayac
    });

 eksiButton.addEventListener("click",
    () => {
    sayac=sayac-1;
    console.log("eksi tıklandı", sayac);
    ekranEl.innerHTML = sayac});