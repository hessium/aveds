const btnBasket = document.querySelector(".btn__price--basket");
const basket = document.querySelector(".link__basket");
const basketPopup = document.querySelector(".basket")

    basket.addEventListener("click",(e) => {
        e.preventDefault();
        if(!basketPopup.classList.contains('active')) {
            basketPopup.classList.add("active");              
          } else{
            basketPopup.classList.remove("active"); 
            }
          })
    

btnBasket.addEventListener("click",(e) => {
    e.preventDefault();
    if(!basket.classList.contains('active')) {
        basket.classList.add("active");              
      } else{
        basket.classList.remove("active"); 
        }
      }
)





