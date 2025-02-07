(()=>{
    

    // swtich between nav and short menu 
    const menuBtn = document.querySelector("#mobile-menu > a");
    const menuSection = document.getElementById("mobile-nav-menu");
    
    menuBtn.addEventListener("click",function(e){
        e.preventDefault()
        menuSection.classList.toggle("col-sm-hidden")
        menuSection.classList.toggle("col-md-hidden")
    })



    const dropDownMobile = document.querySelectorAll("#mbmenu ul li.dropdown");

    dropDownMobile.forEach(btn=>{
        btn.addEventListener("click",function(e){
            e.preventDefault()
            e.target.closest("li").classList.toggle("active")
        })
    })
})() 