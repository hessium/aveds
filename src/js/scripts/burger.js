const catalogBtn = document.querySelector('.btn__catalog');
const catalog = document.querySelector('.burger');
const btnKrest = document.querySelector('.btn__icon--krest');
const btnSpan = document.querySelector('.btn__icon--span');
const burgerItem = document.querySelector('.burger__item');
const burgerMenu = document.querySelector('.burger-menu');

catalogBtn.addEventListener("click",(e) => {
    e.preventDefault();
    if(!catalog.classList.contains('active')) {
      catalog.classList.add("active");
      btnKrest.style='display:block';
      btnSpan.style='display:none';
    } else{
      catalog.classList.remove("active");
      btnKrest.style='display:none';
      btnSpan.style='display:block';
    }
  });
  
  burgerItem.addEventListener("mouseover", (e) => {
    e.preventDefault();
    burgerMenu.style ="display:block";
    
  });
  
  document.documentElement.addEventListener('click', (e)=>{
    if(e.target.tagName !== 'A') {
      burgerMenu.style.display = 'none';
      
    } });
  
   
  