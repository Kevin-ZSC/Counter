

const Number = document.querySelector(".num");

const Btn = document.querySelectorAll(".btn");

let n = 0;


Btn.forEach((btn) => {
    btn.addEventListener("click",(e)=>{
     const styles = e.currentTarget.classList;
     if (styles.contains("btn3")) {
        n++;
     } else if (styles.contains("btn1")) {
        n--;
     } else {
        n = 0;
     }
     Number.textContent = n;
     if (n>0) {
        Number.style.color = "green";
     } else if (n<0) {
        Number.style.color = "red";
     } else {
        Number.style.color = "black"
     }
    });
});
