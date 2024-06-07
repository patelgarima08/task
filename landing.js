window.addEventListener("scroll",function()
{
    var navbar =this.document.getElementsByClassName("navbar");
    if(this.window.scrollY>50){
        navbar.classList.add("scroll-nav");
    }
    else{
        navbar.classList.remove("scroll-nav");
    }
}
);