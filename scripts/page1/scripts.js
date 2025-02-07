(()=>{

    // PRODUCT TABS
    const bestProductsTabs    = document.querySelectorAll("#best-products .actions > a")
    const products            = document.querySelectorAll("#best-products .products")


    bestProductsTabs.forEach((element,index) => {

        element.addEventListener("click",function(e){
            e.preventDefault()
            document.querySelector("#best-products .actions > a.active").classList.remove("active")
            this.classList.add("active")

            document.querySelector("#best-products .products.active").classList.remove("active")
            products[index].classList.add("active")
        })

    });

        
})() 