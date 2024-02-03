var typed=new typed(".text",{
    Strings:["Student","Programmer"],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop: true
});

let menuBtn=document.querySelector(".menu-btn");
let cancelBtn=document.querySelector(".cancel-btn");
let navBar1=document.querySelector(".navbar1");


menuBtn.onclick= function(){
    menuBtn.style.opacity="0";
    menuBtn.style.pointerEvents="none";
    navBar1.classList.add("active");

}

cancelBtn.onclick= function()
{
    menuBtn.style.opacity="1";
    menuBtn.style.pointerEvents="auto";
    navBar1.classList.remove("active");


}


