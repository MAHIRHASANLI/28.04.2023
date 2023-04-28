let formItem=document.querySelector("#form__item")
let image=document.querySelector(".image")
let button=document.querySelector(".buttonn")
let carouselItems=document.querySelectorAll(".carousel-item")
let carouselInner= document.querySelector(".carousel-inner");
let btnLeft= document.querySelector(".btn-left");
let btnRight= document.querySelector(".btn-right");
let c1=document.querySelector("#c1")
let c3=document.querySelector("#c3")
let aa=document.querySelector("#aa")

let images=[]
let img=""

image.addEventListener("change",(e)=>{
    const mh=new FileReader();
    mh.readAsDataURL(image.files[0])
    mh.addEventListener("load",()=>{
        const url=mh.result;
        if(image.files[0].type.includes("image/")){
            img=url
            // image.value=" "
            // console.log(img);
        }
        else {
            alert("Tez ol sekil sec!!!")
            image.value=""
        }
        
    })

   
       
    button.addEventListener("click",(e)=>{
        e.preventDefault()
        if(image.files[0].type.includes("image/")){
            // images.push(
            //     {
            //         src:img
            //     }
            // );
            carouselInner.innerHTML+=`
            <div  class="carousel-item">
            <img src="${img}" class="d-block w-100 imgcar" alt="...">
          </div>`
          image.value=""
          
        }
        else{
           
        }
    })
})











// btnLeft.addEventListener("click",()=>{
//     if (carouselItems[0].classList.contains("active")){
        
//         carouselItems[0].classList.remove("active")
//         // carouselItems[(images.length)].classList.add("active")
        
//     }
//         })
//         btnRight.addEventListener("click",()=>{

//                     if (carouselItems.classList.contains("active")) {
                        
//                     }
//                 })
           
//                Array.form(carouselInner.children).forEach((element,id)=>{
//                  if(Math.max(id).classList.contains("active")){
//                     console.log('asa');
//                  }
//                }) 
